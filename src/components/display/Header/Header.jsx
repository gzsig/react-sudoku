import React from 'react'
import * as S from './header_style'
import ThemeSwitcher from "react-theme-switcher";
import { IoInvertMode } from "react-icons/io5";

const Header = (props) => {
	return (
		<S.HeaderContainer>
			<h1>Sudoku</h1>
			
			<S.ThemeContainer>
				<IoInvertMode size={20} />
				<ThemeSwitcher />
			</S.ThemeContainer>

		</S.HeaderContainer>
	)
}

export { Header }