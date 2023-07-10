import { ReactNode } from 'react'
import { SummaryCardStyle } from './styles'

type CardValues = {
  headerType: string
  icon: ReactNode
  values: string
  coloring?: 'green' | 'gray'
}

export const SummaryCard = ({
  headerType,
  values,
  icon,
  coloring,
}: CardValues) => {
  return (
    <SummaryCardStyle variant={coloring}>
      <header>
        <span>{headerType}</span>
        {icon}
      </header>
      <strong>{values}</strong>
    </SummaryCardStyle>
  )
}
