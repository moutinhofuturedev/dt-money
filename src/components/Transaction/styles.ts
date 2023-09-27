import styled, { css } from 'styled-components'

export const TransactionContainer = styled.main`
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;
`
export const TransactionTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.5rem;

  tr {
    display: flex;
    justify-content: space-between;
    align-items: center;

    td {
      width: 100%;
      padding: 1.25rem 2rem;
      background: ${(props) => props.theme['gray-700']};

      &:first-child {
        border-top-left-radius: 6px;
        border-bottom-left-radius: 6px;
      }

      &:last-child {
        border-top-right-radius: 6px;
        border-bottom-right-radius: 6px;
      }
    }
  }
`
type PriceHighLightProps = {
  variant: 'income' | 'outcome'
}

export const PriceHighLight = styled.span<PriceHighLightProps>`
  ${(props) =>
    props.variant === 'income' &&
    css`
      color: ${(props) => props.theme['green-300']};
    `};

  ${(props) =>
    props.variant === 'outcome' &&
    css`
      color: ${(props) => props.theme['red-300']};
    `};
`
