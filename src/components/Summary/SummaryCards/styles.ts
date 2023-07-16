import { styled, css } from 'styled-components'

export type SummaryCardsProps = {
  variant?: 'green' | 'gray'
}

export const SummaryCardStyle = styled.div<SummaryCardsProps>`
  border-radius: 6px;
  padding: 2rem;
  margin-bottom: 1.5rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${(props) => props.theme['gray-300']};
  }

  strong {
    display: block;
    margin-top: 1rem;
    font-size: 2rem;
  }

  ${(props) =>
    props.variant === 'green' &&
    css`
      background: ${(props) => props.theme['green-700']};
    `}

  ${(props) =>
    props.variant === 'gray' &&
    css`
      background: ${(props) => props.theme['gray-600']};
    `}
`
