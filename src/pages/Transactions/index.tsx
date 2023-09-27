import { useEffect, useState } from 'react'
import { Header } from '../../components/Header'
import { SearchForm } from '../../components/SearchForm'
import { Summary } from '../../components/Summary'
import { Transaction } from '../../components/Transaction'

interface TransactionType {
  id: number
  description: string
  expense: 'income' | 'outcome'
  category: string
  price: number
  createdAt: string
}

export const Transactions = () => {
  const [transactions, setTransactions] = useState<TransactionType[]>([])

  async function loadTransactions() {
    const response: Response = await fetch('http://localhost:3000/transactions')
    const data: TransactionType[] = await response.json()

    setTransactions(data)
  }

  useEffect(() => {
    loadTransactions()
  }, [])

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
