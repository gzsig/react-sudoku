(this["webpackJsonpjs-react-sudoku"]=this["webpackJsonpjs-react-sudoku"]||[]).push([[0],{25:function(n,t,e){},26:function(n,t,e){},31:function(n,t,e){"use strict";e.r(t);var r=e(1),o=e(2),a=e.n(o),c=e(9),i=e.n(c),u=(e(25),e(26),e(10)),l=e(11),s=e(19),f=e(18),d=e(3),b=e(4);function h(){var n=Object(d.a)(["\n    font-family: 'Roboto';\n    font-size: 16px;\n    background-color: ",";\n    opacity: 0.85;\n    height: min-content;\n    width: 85%;\n    padding: 8px;\n    margin: 3px auto;\n    color: #131a21;\n    border-radius: 8px;\n    border: none;\n    outline: none;\n    display: block;\n    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.1);\n    transition: all 0.3s ease 0s;\n\n\n    &:hover {\n        background-color: "," ;\n        box-shadow: 0px 15px 20px rgba(44, 153, 242, 0.1);\n        color: #fff;\n        \n    }\n"]);return h=function(){return n},n}var p=Object(b.a)("button")(h(),(function(n){return n.color||"#90caf9"}),(function(n){return"#90caf9"!==n.color?n.color:"#2C99F2"})),j=function(n){return Object(r.jsx)(p,{onClick:n.onClick,name:n.name,color:n.color,children:n.name})};function x(){var n=Object(d.a)(["\n  /* slide bar */\n   -webkit-appearance: none;\n    width: 100%;\n    height: 10px;\n    border-radius: 5px;  \n    /* background-color: #8AC2D0; */\n    background-color: ",";\n    outline: none;\n    opacity: 0.7;\n    -webkit-transition: .2s;\n    transition: opacity .2s;\n    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.2);\n\n  &:hover {\n    opacity: 0.9;\n  }\n  /* slider */\n  &::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    appearance: none;\n    width: 20px;\n    height: 12px;\n    border-radius: 4px; \n    background-color: #347383;\n    border: none;\n    cursor: pointer;\n    transition: all 0.3s ease 0s;\n\n    &:hover {\n      width: 24px;\n      height: 14px;\n    }\n  }\n\n  &::-moz-range-thumb {\n    width: 20px;\n    height: 12px;\n    border-radius: 4px; \n    background-color: #347383;\n    border: none;\n    cursor: pointer;\n    transition: all 0.3s ease 0s;\n\n    &:hover {\n      width: 24px;\n      height: 14px;\n    }\n}\n"]);return x=function(){return n},n}function v(){var n=Object(d.a)(["\n  width: 100%; \n  margin: 0px auto 10px;\n"]);return v=function(){return n},n}var g=Object(b.a)("div")(v()),m=Object(b.a)("input")(x(),(function(n){return n.color})),O=function(n){return Object(r.jsx)(g,{children:Object(r.jsx)(m,{type:n.type,min:n.min,max:n.max,step:n.step,value:n.value,onChange:n.onChange,color:n.color})})};function y(){var n=Object(d.a)(["\n  display: flex;\n  flex-direction: row;\n  margin-left: auto;\n  margin-right: 0;\n"]);return y=function(){return n},n}function k(){var n=Object(d.a)(["\n  display: flex;\n  flex-direction: row;\n  width: 90%; \n  margin: 0 auto;\n  justify-content: space-between;\n  align-items: center;\n  font-family: 'Roboto';\n"]);return k=function(){return n},n}var C=Object(b.a)("div")(k()),S=Object(b.a)("div")(y()),z=e(15),w=e.n(z),N=e(16),I=function(n){return Object(r.jsxs)(C,{children:[Object(r.jsx)("h1",{children:"Sudoku"}),Object(r.jsxs)(S,{children:[Object(r.jsx)(N.a,{size:20}),Object(r.jsx)(w.a,{})]})]})};function T(){var n=Object(d.a)(["\n\tfont-size: 26px;\n  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\n\tcolor: #4d73a0;\n\tbackground: none;\n  background-color: transparent;\n  border: 0 none transparent;\n  appearance: none;\n"]);return T=function(){return n},n}function B(){var n=Object(d.a)(["\n\twidth: 75%;\n\ttext-align: center;\n\tdisplay: flex;\n\tflex-direction: row;\n\tjustify-content: space-evenly;\n\talign-items: center;\n  margin: 10px auto 5px;\n\n"]);return B=function(){return n},n}var P=Object(b.a)("div")(B()),D=Object(b.a)("button")(T()),J=e(17),M=function(n){return Object(r.jsxs)(P,{onClick:n.onClick,children:[Object(r.jsx)(D,{value:1,children:" 1 "}),Object(r.jsx)(D,{value:2,children:" 2 "}),Object(r.jsx)(D,{value:3,children:" 3 "}),Object(r.jsx)(D,{value:4,children:" 4 "}),Object(r.jsx)(D,{value:5,children:" 5 "}),Object(r.jsx)(D,{value:6,children:" 6 "}),Object(r.jsx)(D,{value:7,children:" 7 "}),Object(r.jsx)(D,{value:8,children:" 8 "}),Object(r.jsx)(D,{value:9,children:" 9 "}),Object(r.jsxs)(D,{value:0,children:[" ",Object(r.jsx)(J.a,{})," "]})]})},F=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};return Array.apply(null,{length:n}).map(t)}(9,(function(n,t){return t+1})),L=function(){return function(){for(var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]&&arguments[1]?n:n.slice(),e=t.length-1;e>0;e--){var r=Math.floor(Math.random()*(e+1)),o=t[e];t[e]=t[r],t[r]=o}return t}(F)},A=function(n){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=e.length-1;r>-1;r--)for(var o=e[r].length-1;o>-1;o--){var a=t[o];if(a===e[r][o])return!1;var c=6;n<3?c=0:n<6&&(c=3);var i=6;o<3?i=0:o<6&&(i=3);for(var u=[],l=0;l<3;l++)e[c+l]instanceof Array&&(u=u.concat(e[c+l].slice(i,i+3)));if(-1!==u.indexOf(a))return!1}return!0},V=function n(){for(var t=[L()],e=0,r=1;r<8;r++)for(;;){var o=L();if(A(r,o,t)){t[r]=o,e=0;break}if(++e>2e5)return n()}for(var a=t.reduce((function(n,t,e){return t.forEach((function(t,r){n[r]=n[r]||[],n[r][e]=t})),n}),[]),c=[],i=9;i>0;i--)for(var u=a.length-1;u>-1;u--)if(-1===a[u].indexOf(i)){c[u]=i;break}return t.push(c),t},E=function(n){var t=V();return{puzzle:t.map((function(t){return t.slice().map((function(t){return Math.random()>n?t:null}))})),solution:t}},G=function(n){Object(s.a)(e,n);var t=Object(f.a)(e);function e(n){var r;return Object(u.a)(this,e),(r=t.call(this,n)).componentDidUpdate=function(){document.body.onclick=function(n){"INPUT"===n.target.tagName&&r.setState((function(t){return{lastInput:n.target}}))}},r.setValue=function(n){var t=n.target;if(void 0!==r.state.lastInput&&!r.state.lastInput.readOnly){r.state.lastInput.value=t.value;var e=r.state.lastInput.dataset,o=e.x,a=e.y;o=Number(o),a=Number(a),r.setState((function(n){var e=n.attempt.map((function(n){return n.slice()}));return e[a][o]=parseInt(t.value),{attempt:e}}))}},r.onChange=function(n){var t=n.key,e=n.target,o=e.dataset,a=o.x,c=o.y;a=Number(a),c=Number(c),[1,2,3,4,5,6,7,8,9].includes(parseInt(t))&&(e.readOnly||r.setState((function(n){var e=n.attempt.map((function(n){return n.slice()}));return e[c][a]=parseInt(t)||(t.length>1?null:t),{attempt:e}})))},r.checkSolution=function(n){var t=n.target;console.log(t);var e=r.state,o=e.attempt,a=e.solutionJSON;JSON.stringify(o)===a?r.setState({buttonColor:"green",checkSolutionButtonText:"Solved!"}):(r.setState({buttonColor:"red",checkSolutionButtonText:"Incorrect"}),setTimeout((function(){r.setState({buttonColor:"#90caf9",checkSolutionButtonText:"Check Solution"})}),1500))},r.clearPuzzle=function(){r.setState((function(n){return{attempt:n.puzzle.map((function(n){return n.slice()})),buttonColor:"#90caf9",checkSolutionButtonText:"Check Solution"}}))},r.newPuzzle=function(){r.setState((function(n){var t=n.difficulty,e=E(t),r=e.puzzle,o=e.solution;return{attempt:r.map((function(n){return n.slice()})),puzzle:r,solution:o,solutionJSON:JSON.stringify(o),buttonColor:"#90caf9",checkSolutionButtonText:"Check Solution"}}))},r.changeDifficulty=function(n){var t=n.target,e=10*Number(t.value),o="";o=e>=5?"rgb(255, "+(41*(11-e)+9)+", 0)":"rgb("+(41*e+9)+", 255, 0)",r.setState((function(){return{difficulty:Number(t.value),sliderColor:o}}))},r.setLevelName=function(n){return n*=100,0===(n=parseInt(n))?"lazy":n<=15?"very easy (".concat(n,")"):n<35?"easy (".concat(n,")"):n<=50?"normal (".concat(n,")"):n<75?"hard (".concat(n,")"):n<=99?"expert (".concat(n,")"):"creator"},r.state={attempt:[],difficulty:.3,puzzle:[],solution:[],solutionJSON:"",lastInput:void 0,solved:!1,buttonColor:"#90caf9",checkSolutionButtonText:"Check Solution",sliderColor:"rgb(132, 255, 0)"},r}return Object(l.a)(e,[{key:"componentDidMount",value:function(){this.newPuzzle()}},{key:"render",value:function(){var n=this,t=this.state,e=t.attempt,o=t.difficulty,a=t.puzzle;return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("div",{children:[Object(r.jsx)("table",{children:Object(r.jsx)("tbody",{ref:function(t){return n.tbody=t},children:e.map((function(t,e){return Object(r.jsx)("tr",{children:t.map((function(t,o){return Object(r.jsx)("td",{children:Object(r.jsx)("input",{type:"text",pattern:"[1-9]",maxLength:"1",formNoValidate:!0,"data-x":o,"data-y":e,value:t||"",readOnly:Boolean(a[e][o]),onKeyDown:n.onChange,onChange:function(){}})},o)}))},e)}))})}),Object(r.jsx)(M,{onClick:this.setValue}),Object(r.jsx)("div",{className:"level_controller",children:Object(r.jsxs)("label",{children:["Level: ",this.setLevelName(o),Object(r.jsx)(O,{type:"range",min:0,max:1,step:.01,value:o,onChange:this.changeDifficulty,color:this.state.sliderColor})]})}),Object(r.jsxs)("div",{className:"buttons_container",children:[Object(r.jsx)(j,{onClick:this.checkSolution,name:this.state.checkSolutionButtonText,color:this.state.buttonColor}),Object(r.jsx)(j,{onClick:this.newPuzzle,name:"New Puzzle",color:"#90caf9"}),Object(r.jsx)(j,{onClick:this.clearPuzzle,name:"Clear Puzzle",color:"#90caf9"})]})]})})}}]),e}(a.a.Component);var R=function(){return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(I,{}),Object(r.jsx)(G,{})]})},U=function(n){n&&n instanceof Function&&e.e(3).then(e.bind(null,32)).then((function(t){var e=t.getCLS,r=t.getFID,o=t.getFCP,a=t.getLCP,c=t.getTTFB;e(n),r(n),o(n),a(n),c(n)}))};i.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(R,{})}),document.getElementById("root")),U()}},[[31,1,2]]]);
//# sourceMappingURL=main.e2544dfc.chunk.js.map