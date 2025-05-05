import { HeaderContainer, Logo, LogoContainer } from './styles'

export function Header() {
	return (
		<HeaderContainer>
			<LogoContainer>
				<Logo src="src\assets\logo.svg" alt="Logo" />
			</LogoContainer>
		</HeaderContainer>
	)
}
