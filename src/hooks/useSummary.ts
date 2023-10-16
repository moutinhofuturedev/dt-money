import { useContext } from 'react'
import { TransactionsContext } from '../contexts/TransactionContext'

export const useSummary = () => {
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

  return {
    income,
    outcome,
    total,
  }
}