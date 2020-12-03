import React from 'react';
import { Button } from '../../display'
import { Slider } from '../../display'
import { Numbers } from '../../display'

// Sudoku uses numbers 1-9
const SIZE = 9;

/**
 * Generates an array with values.
 *
 * @param  {Number}   len
 * @param  {Function} [callback]
 * @return {Array}
 */
const generateArray = (len, callback = () => { }) =>
  Array.apply(null, { length: len }).map(callback);

// [1, 2, 3, 4, 5, 6, 7, 8, 9]
const NUMBERS = generateArray(SIZE, (_, index) => index + 1);

/**
 * Shuffles an array.
 *
 * @param  {Array}   array
 * @param  {Boolean} [shouldMutate=false]
 * @return {Array}
 */
const shuffleArray = (array = [], shouldMutate = false) => {
  const arr = shouldMutate ? array : array.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  return arr;
};

/**
 * Generates row.
 *
 * @return {Array}
 */
const generateRow = () => shuffleArray(NUMBERS);


/**
 * Given output, checks if row is usable.
 *
 * @param  {Number}  index
 * @param  {Array}   row
 * @param  {Array}   output
 * @return {Boolean}
 */
const isRowUsable = (index, row = [], output = []) => {
  let rowIndex = output.length - 1;
  for (; rowIndex > -1; rowIndex--) {
    let columnIndex = output[rowIndex].length - 1;
    for (; columnIndex > -1; columnIndex--) {
      // check if row value exists in output column
      const rowValue = row[columnIndex];
      if (rowValue === output[rowIndex][columnIndex]) return false;

      let rowStart = 6;
      if (index < 3) {
        rowStart = 0;
      } else if (index < 6) {
        rowStart = 3;
      }

      let columnStart = 6;
      if (columnIndex < 3) {
        columnStart = 0;
      } else if (columnIndex < 6) {
        columnStart = 3;
      }

      let section = [];
      for (let i = 0; i < 3; i++) {
        if (output[rowStart + i] instanceof Array) {
          section = section.concat(
            output[rowStart + i].slice(columnStart, columnStart + 3)
          );
        }
      }

      // check if row value exists in output 3x3 section
      if (section.indexOf(rowValue) !== -1) return false;
    }
  }
  return true;
};


/**
 * Generates a solution to a Sudoku puzzle.
 *
 * @return {Array}
 */
const generateSolution = () => {
  // seed 1st row
  const output = [generateRow()];

  // generate rows 2 to 8
  let loopCount = 0;
  for (let index = 1; index < 8; index++) {
    while (true) {
      const row = generateRow();
      if (isRowUsable(index, row, output)) {
        output[index] = row;
        loopCount = 0;
        break;
      }
      loopCount++;
      // break and try again if stuck in infinite loop
      if (loopCount > 2e5) return generateSolution();
    }
  }

  // invert the output
  const columnValues = output.reduce((result, row, rowIndex) => {
    row.forEach((columnValue, columnIndex) => {
      result[columnIndex] = result[columnIndex] || [];
      result[columnIndex][rowIndex] = columnValue;
    });
    return result;
  }, []);

  // get 9th row
  const lastRow = [];
  for (let number = SIZE; number > 0; number--) {
    for (let i = columnValues.length - 1; i > -1; i--) {
      if (columnValues[i].indexOf(number) === -1) {
        lastRow[i] = number;
        break;
      }
    }
  }
  output.push(lastRow);

  return output;
}


/**
 * Creates Sudoku game solution.
 *
 * @param  {Number} difficulty - A number between 0 and 1. Higher means harder, lower means easier.
 * @return {Object}
 */
const createGame = difficulty => {
  const solution = generateSolution();
  const puzzle = solution.map(row => row.slice().map(value => Math.random() > difficulty ? value : null));
  return { puzzle, solution };
};

class Sudoku extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      attempt: [],
      difficulty: 0.5,
      puzzle: [],
      solution: [],
      solutionJSON: '',
      lastInput: undefined,
      solved: false, 
      buttonColor: '#90caf9',
      checkSolutionButtonText: 'Check Solution'
    };
  }


  componentDidMount() {
    this.newPuzzle();
  }

  componentDidUpdate = () => {
    document.body.onclick = (e) => {
      if (e.target.tagName === "INPUT" /* && e.target.className === "editavel"*/) {

        this.setState(state => ({ lastInput: e.target }))

      }
    };
  }

  // Focuses puzzle cell when clicked.

  handleCellClick({ target }) {
    target.select();
  }

  setValue = ({ target }) => {
    if (this.state.lastInput === undefined) return

    if (!this.state.lastInput.readOnly) {
      // eslint-disable-next-line
      this.state.lastInput.value = target.value

      let { x, y, } = this.state.lastInput.dataset;

      x = Number(x);
      y = Number(y);

      this.setState(state => {
        const attempt = state.attempt.map(row => row.slice());
        attempt[y][x] = parseInt(target.value) //|| (this.state.lastInput.value.length > 1 ? null : this.state.lastInput.value);
        return { attempt };
      });
    }

  }

  // Navigates puzzle and records user's attempt.

  onChange = ({ key, target }) => {
    let { x, y, } = target.dataset;
    x = Number(x);
    y = Number(y);

    if (![1, 2, 3, 4, 5, 6, 7, 8, 9].includes(parseInt(key))) {
      return
    }

    if (!target.readOnly) {
      this.setState(state => {
        const attempt = state.attempt.map(row => row.slice());
        attempt[y][x] = parseInt(key) || (key.length > 1 ? null : key);
        return { attempt };
      });
    }
  };

  // Checks if puzzle is solved.

  checkSolution = ({ target }) => {
    console.log(target)
    const { attempt, solutionJSON } = this.state;
    if (JSON.stringify(attempt) === solutionJSON) {
      this.setState({buttonColor: 'green', checkSolutionButtonText: 'Solved!'})

      // alert('Solved!');


    } else {
      this.setState({buttonColor: 'red', checkSolutionButtonText: 'Incorrect'})
      // alert('Not solved.');
      setTimeout( () => {
        this.setState({buttonColor: '#90caf9', checkSolutionButtonText: 'Check Solution'})
      }, 1500)

    }
  };

  // Clears puzzle attempt.

  clearPuzzle = () => {
    this.setState(state => ({
      attempt: state.puzzle.map(row => row.slice()),
    }));
  };

  // Generates a new puzzle.

  newPuzzle = () => {
    this.setState(({ difficulty }) => {
      const { puzzle, solution } = createGame(difficulty);
      return {
        attempt: puzzle.map(row => row.slice()),
        puzzle,
        solution,
        solutionJSON: JSON.stringify(solution),
        buttonColor: '#90caf9',
        checkSolutionButtonText: 'Check Solution'
      };
    });
  };

  // Changes puzzle difficulty.

  changeDifficulty = ({ target }) => {
    this.setState(() => ({
      difficulty: Number(target.value),
    }));
  };

  setLevelName = (difficulty) => {
    let label = document.getElementById('level')
    if (!label) return
    let color = ""
    difficulty *= 10
    console.log(label)
    if (difficulty >= 5) {
      color = "rgb(255, " + (((11 - difficulty) * 41) + 9) + ", 0)"
    } else {
      color = "rgb(" + (((difficulty) * 41) + 9) + ", 255, 0)"
    }
    label.style.color = color
    switch (difficulty) {

      case 0:
        label.style.color = '#00ff00'
        return "lazy"
      
      case 10:
        return "creator"
      default:
        return difficulty
    }
  }

  render() {
    const { attempt, difficulty, puzzle } = this.state;
    return (
      <>
        <div>
          <table>
            <tbody ref={element => this.tbody = element}>
              {attempt.map((rows, y) => (
                <tr key={y}>
                  {rows.map((digit, x) => (
                    <td key={x}>
                      <input
                        type="text"
                        pattern="[1-9]"
                        maxLength="1"
                        formNoValidate
                        data-x={x}
                        data-y={y}
                        value={digit || ""}
                        readOnly={Boolean(puzzle[y][x])}
                        onKeyDown={this.onChange}
                        onChange={() => { }}
                        onClick={this.handleCellClick}
                      />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>

          <Numbers onClick={this.setValue} />

          <label id='level'>
            Level: {this.setLevelName(difficulty)}
            <Slider
              type="range"
              min={0}
              max={1}
              step={0.1}
              value={difficulty}
              onChange={this.changeDifficulty}
            ></Slider>
          </label>
          <div className="buttons_container">
            <Button onClick={this.checkSolution} name={this.state.checkSolutionButtonText} color={this.state.buttonColor} />
            <Button onClick={this.newPuzzle} name={'New Puzzle'} />
            <Button onClick={this.clearPuzzle} name={'Clear Puzzle'} />
          </div>
        </div>
      </>

    )
  }
}

export { Sudoku }