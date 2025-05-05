import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background-color: ${(props) => props.theme['gray-700']};
  height: 12.5rem;
  display: flex;
`
export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 0 1.5rem;
`
export const Logo = styled.img`
  width: auto;
  height: 100%;
  max-height: 3rem;
  margin: 0 auto;
`
