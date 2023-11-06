import styled, { css } from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'
import * as RadioGroup from '@radix-ui/react-radio-group'

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background: #00000094;
`

export const Content = styled(Dialog.Content)`
  min-width: 32rem;
  border-radius: 6px;
  padding: 2.5rem 3rem;
  background: ${(props) => props.theme['gray-800']};

  /* para centralizar modal na página */
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  h2 {
    @media (max-width: 768px) {
      font-size: 1.25rem;
      line-height: 160%;
    }
  }

  form {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    input {
      border-radius: 6px;
      border: 0;
      background: ${(props) => props.theme['gray-900']};
      color: ${(props) => props.theme.white};
      padding: 1rem;

      &::placeholder {
        color: ${(props) => props.theme['gray-500']};
      }

      @media (max-width: 768px) {
        font-size: 1rem;
        font-weight: 400;
        line-height: 140%;
      }
    }

    button[type='submit'] {
      height: 58px;
      border: 0;
      background: ${(props) => props.theme['green-500']};
      color: ${(props) => props.theme.white};
      font-weight: bold;
      padding: 0 1.25rem;
      border-radius: 6px;
      margin-top: 1.5rem;
      cursor: pointer;

      &:disabled {
        opacity: 0.7;
        cursor: not-allowed;
      }

      &:not(:disabled):hover {
        background: ${(props) => props.theme['green-700']};
        transition: background-color 0.2s;
      }

      @media (max-width: 768px) {
        display: flex;
        padding: 12px 20px;
        justify-content: center;
        align-items: center;
        gap: 0.625rem;

        font-size: 1rem;
        font-weight: 700;
        line-height: 160%;
      }
    }
  }

  @media (max-width: 768px) {
    min-width: 23.5rem;
    border-radius: 20px 20px 20px 20px;
    box-shadow: 0px -4px 32px 0px rgba(0, 0, 0, 0.8);
  }
`

export const CloseButton = styled(Dialog.Close)`
  position: absolute;
  background: transparent;
  color: ${(props) => props.theme['gray-400']};
  border: 0;
  top: 1.5rem;
  right: 1.5rem;
  line-height: 0;
  cursor: pointer;
`
export const TransactionType = styled(RadioGroup.Root)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 0.5rem;
`
type TransactionTypeButtonProps = {
  variant: 'income' | 'outcome'
}

export const TransactionTypeButton = styled(
  RadioGroup.Item,
)<TransactionTypeButtonProps>`
  background: ${(props) => props.theme['gray-700']};
  color: ${(props) => props.theme['gray-300']};
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border-radius: 6px;
  border: 0;
  cursor: pointer;

  svg {
    ${(props) =>
      props.variant === 'income' &&
      css`
        color: ${(props) => props.theme['green-300']};
      `}

    ${(props) =>
      props.variant === 'outcome' &&
      css`
        color: ${(props) => props.theme['red-300']};
      `}
  }

  &[data-state='unchecked']:hover {
    transition: background-color 0.2s;
    background: ${(props) => props.theme['gray-600']};
  }

  &[data-state='checked'] {
    color: ${(props) => props.theme.white};
    background: ${(props) =>
      props.variant === 'income'
        ? props.theme['green-500']
        : props.theme['red-500']};

    svg {
      color: ${(props) => props.theme.white};
    }
  }

  @media (max-width: 768px) {
    display: flex;
    padding: 1rem 1.5rem;
    justify-content: center;
    align-items: center;
    gap: 8px;
    flex: 1 0 0;

    font-size: 1rem;
    font-weight: 400;
    line-height: 160%;
  }
`
