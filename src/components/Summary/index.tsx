import { SummaryCard } from './SummaryCards'
import { SummaryContainer } from './styles'
import { ArrowUpCircle, ArrowDownCircle, DollarSign } from 'lucide-react'

import { useContext } from 'react'
import { TransactionsContext } from '../../contexts/TransactionContext'

export const Summary = () => {
  const { transactions } = useContext(TransactionsContext)

  const { income, outcome, total } = transactions.reduce(
    (accumulator, transaction) => {
      if (transaction.expense === 'income') {
        accumulator.income += transaction.price
        accumulator.total += transaction.price
      } else {
        accumulator.outcome += transaction.price
        accumulator.total -= transaction.price
      }

      return accumulator
    },
    {
      income: 0,
      outcome: 0,
      total: 0,
    },
  )
  return (
    <SummaryContainer>
      <SummaryCard
        coloring="gray"
        headerType="Entradas"
        icon={<ArrowUpCircle size={32} color="#00B37E" />}
        values={income}
      />
      <SummaryCard
        coloring="gray"
        headerType="Saídas"
        icon={<ArrowDownCircle size={32} color="#F75A68" />}
        values={outcome}
      />
      <SummaryCard
        coloring="green"
        headerType="Total"
        icon={<DollarSign size={32} color="#FFFFFF" />}
        values={total}
      />
    </SummaryContainer>
  )
}
