import { ReactNode } from 'react'
import { SummaryCardStyle } from './styles'
import { priceFormatter } from '../../../utils/formatter'

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
        <div>{headerType}</div>
        {icon}
      </header>
      <strong>{priceFormatter.format(values)}</strong>
    </SummaryCardStyle>
  )
}
