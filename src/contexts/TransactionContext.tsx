import { ReactNode, createContext, useEffect, useState } from 'react'

export interface TransactionType {
  id: number
  description: string
  expense: 'income' | 'outcome'
  category: string
  price: number
  createdAt: string
}

interface TransactionContextType {
  transactions: TransactionType[]
}

interface TransactionsProviderProps {
  children: ReactNode
}

export const TransactionsContext = createContext({} as TransactionContextType)

export const TransactionsProvider = ({
  children,
}: TransactionsProviderProps) => {
  const [transactions, setTransactions] = useState<TransactionType[]>([])

  const loadTransactions = async () => {
    const response: Response = await fetch('http://localhost:3000/transactions')
    const data: TransactionType[] = await response.json()

    setTransactions(data)
  }

  useEffect(() => {
    loadTransactions()
  }, [])

  return (
    <TransactionsContext.Provider value={{ transactions }}>
      {children}
    </TransactionsContext.Provider>
  )
}
