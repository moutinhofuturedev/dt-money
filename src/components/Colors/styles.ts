import styled from 'styled-components'

type ColorsGridVariants = {
  variant:
    | '#E1E1E6'
    | '#C4C4CC'
    | '#8D8D99'
    | '#7C7C8A'
    | '#323238'
    | '#29292E'
    | '#202024'
    | '#121214'
    | '#00B37E'
    | '#00875F'
    | '#015F43'
    | '#F75A68'
    | '#AB222E'
    | '#7A1921'
    | '#FFF'
    | '#000'
}

export const ColorsGridContainer = styled.div<ColorsGridVariants>`
  padding: 2rem;
  background: ${(props) => props.variant};
`
export const ColorsGridContent = styled.div<ColorsGridVariants>`
  display: flex;
  justify-content: space-between;

  span,
  strong {
    color: ${(props) => props.variant};
  }
`
