import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background: ${(props) => props.theme['gray-900']};
  padding: 2.5rem 0 7.5rem 0;
`
export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const HeaderLogo = styled.div`
  display: flex;
  gap: 1em;
  align-items: center;

  strong {
    font-size: 1.6rem;
    line-height: 160%;

    @media (max-width: 768px) and (max-width: 992px) {
      font-size: 1rem;
      font-weight: 700;
      line-height: 160%;
    }
  }

  img {
    @media (max-width: 768px) and (max-width: 992px) {
      height: 1.5625rem;
      flex-shrink: 0;
    }
  }

  @media (max-width: 768px) and (max-width: 992px) {
    gap: 0.2rem;
  }
`

export const NewTransactionButton = styled.button`
  height: 50px;
  min-width: 160px;
  border: 0;
  background: ${(props) => props.theme['green-500']};
  color: ${(props) => props.theme.white};
  font-weight: bold;
  padding: 0 1.25rem;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${(props) => props.theme['green-700']};
  }

  @media (max-width: 768px) and (max-width: 992px) {
    font-size: 0.875rem;
    font-weight: 700;
    line-height: 160%;
    min-width: 100px;
  }
`
