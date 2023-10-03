import { ReactNode } from 'react'
import { SummaryCardStyle } from './styles'

type CardValues<T, U> = {
  headerType: T
  icon: ReactNode
  values: U
  coloring?: 'green' | 'gray'
}

export const SummaryCard = ({
  headerType,
  values,
  icon,
  coloring,
}: CardValues<string, number>) => {
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
