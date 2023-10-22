import { ReactNode, createContext, useEffect, useState } from 'react'

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
    const url = new URL('http://localhost:3000/transactions')

    if (query) {
      url.searchParams.append('q', query)
    }

    const response: Response = await fetch(url)
    const data: TransactionType[] = await response.json()

    setTransactions(data)
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
