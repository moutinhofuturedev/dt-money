import {
  HeaderContainer,
  HeaderContent,
  HeaderLogo,
  NewTransactionButton,
} from './styles'
import logoImg from '../../assets/logo.svg'

export type HeaderProps = {
  title: string
  name: string
}

export const Header = ({ title, name }: HeaderProps) => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <HeaderLogo>
          <img src={logoImg} alt="DT Money" />
          <strong>{title}</strong>
        </HeaderLogo>
        <NewTransactionButton>{name}</NewTransactionButton>
      </HeaderContent>
    </HeaderContainer>
  )
}
