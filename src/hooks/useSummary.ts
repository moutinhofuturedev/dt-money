import { useContext, useMemo } from 'react'
import { TransactionsContext } from '../context/TransactionContext'

export const useSummary = () => {
  const { transactions } = useContext(TransactionsContext)

  const summary = useMemo(() => {
    return transactions
      ? transactions.reduce(
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
      : null
  }, [transactions])
  return summary
}
