import { ReactNode } from 'react'
import { SummaryCardStyle } from './styles'
import { priceFormatter } from '../../../utils/formatter'

interface CardValues<T, U> {
  headerType: T
  icon: ReactNode
  price: U
  coloring: 'green' | 'gray'
}

export const SummaryCard = ({
  headerType,
  price,
  icon,
  coloring,
}: CardValues<string, number>) => {
  return (
    <SummaryCardStyle variant={coloring}>
      <header>
        <div>{headerType}</div>
        {icon}
      </header>
      <strong>{priceFormatter.format(price)}</strong>
    </SummaryCardStyle>
  )
}
