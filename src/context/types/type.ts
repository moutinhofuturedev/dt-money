import { ReactNode } from 'react'

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
export interface TransactionsProviderProps {
  children: ReactNode
}
