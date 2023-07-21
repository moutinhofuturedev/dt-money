import {
  HeaderContainer,
  HeaderContent,
  HeaderLogo,
  NewTransactionButton,
} from './styles'
import { NewTransactionModal } from '../NewTransaction'
import logoImg from '../../assets/logo.svg'
import * as Dialog from '@radix-ui/react-dialog'

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
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionButton>{name}</NewTransactionButton>
          </Dialog.Trigger>
          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}
