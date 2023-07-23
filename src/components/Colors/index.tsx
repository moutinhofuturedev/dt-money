import { defaultTheme } from '../../styles/theme/default'
import { ColorsGridContainer, ColorsGridContent } from './styles'

export const ColorsGrid = () => {
  return Object.entries(defaultTheme).map(([key, color]) => {
    return (
      <ColorsGridContainer variant={color} key={key}>
        <ColorsGridContent key={key}>
          <strong>${key}</strong>
          <span>{color}</span>
        </ColorsGridContent>
      </ColorsGridContainer>
    )
  })
}
