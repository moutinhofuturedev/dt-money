import { ReactNode, createContext, useEffect, useState } from 'react'
import { api } from '../lib/api'

export interface TransactionType {
  id: number
  description: string
  expense: 'income' | 'outcome'
  category: string
  price: number
  createdAt: string
}
export interface TransactionsContextType {
  transactions?: TransactionType[]
  fetchTransactions?: (query?: string) => Promise<void>
}
interface TransactionsProviderProps {
  children: ReactNode
}

export const TransactionsContext = createContext({} as TransactionsContextType)

export const TransactionsProvider = ({
  children,
}: TransactionsProviderProps) => {
  const [transactions, setTransactions] = useState<TransactionType[]>([])

  const fetchTransactions = async (query?: string) => {
    const response = await api.get('/transactions', {
      params: {
        q: query,
      },
    })

    setTransactions(response.data)
  }

  useEffect(() => {
    fetchTransactions()
  }, [])

  return (
    <TransactionsContext.Provider value={{ transactions, fetchTransactions }}>
      {children}
    </TransactionsContext.Provider>
  )
}
