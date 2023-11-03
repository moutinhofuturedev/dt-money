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

        @media (max-width: 768px) and (max-width: 992px) {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          gap: 0.5rem;
          color: ${(props) => props.theme['gray-500']};
        }
      }

      svg {
        display: none;

        @media (max-width: 768px) and (max-width: 992px) {
          display: inline;
        }
      }

      @media (max-width: 768px) and (max-width: 992px) {
        padding: 1.5rem 1.5rem;
        line-height: 0;
      }
    }

    @media (max-width: 768px) and (max-width: 992px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
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

  @media (max-width: 768px) and (max-width: 992px) {
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 700;
  }
`
