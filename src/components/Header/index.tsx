import {
  HeaderContainer,
  HeaderContent,
  HeaderLogo,
  NewTransactionButton,
} from './styles'
import logoImg from '../../assets/logo.svg'

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <HeaderLogo>
          <img src={logoImg} alt="DT Money" />
          <strong>DT Money</strong>
        </HeaderLogo>
        <NewTransactionButton>Nova transação</NewTransactionButton>
      </HeaderContent>
    </HeaderContainer>
  )
}
