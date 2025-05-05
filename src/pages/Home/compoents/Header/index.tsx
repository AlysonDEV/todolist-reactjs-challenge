import ImgLogo from '../../../../assets/logo.svg'

import { HeaderContainer, Logo, LogoContainer } from './styles'

export function Header() {
	return (
		<HeaderContainer>
			<LogoContainer>
				<Logo
					src={ImgLogo}
					alt="Desenho de um foguete azul e a palavra TODO ao lado direto"
				/>
			</LogoContainer>
		</HeaderContainer>
	)
}
