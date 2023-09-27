import { useContext } from 'react'
import { Header } from '../../components/Header'
import { SearchForm } from '../../components/SearchForm'
import { Summary } from '../../components/Summary'
import { Transaction } from '../../components/Transaction'
import { TransactionsContext } from '../../contexts/TransactionContext'

export const Transactions = () => {
  const { transactions } = useContext(TransactionsContext)

  return (
    <>
      <Header title="DT Money" name="Nova transação" />
      <Summary />
      <SearchForm />
      {transactions.map((transaction) => {
        return (
          <Transaction
            key={transaction.id}
            tableExpense={transaction.expense}
            tableDescription={transaction.description}
            tablePrice={transaction.price}
            tableCategory={transaction.category}
            tableDate={transaction.createdAt}
          />
        )
      })}
    </>
  )
}
