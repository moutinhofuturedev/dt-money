/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useEffect, useState, useCallback } from 'react'
import {
  TransactionType,
  TransactionsContextType,
  TransactionsProviderProps,
} from './types/type'
import { api } from '../lib/api'
import axios, { AxiosError } from 'axios'
import { Toaster, toast } from 'react-hot-toast'

export const TransactionsContext = createContext({} as TransactionsContextType)

export const TransactionsProvider = ({
  children,
}: TransactionsProviderProps) => {
  const [transactions, setTransactions] = useState<TransactionType[]>([])
  const abortController = new AbortController()

  const fetchTransactions = useCallback(
    async (query?: string) => {
      try {
        const response = await api.get('/transactions', {
          params: {
            _sort: 'createdAt',
            _order: 'desc',
            q: query,
          },
        })

        setTransactions(response.data)
      } catch (error) {
        toast.error('Erro na solicitação das transações', {
          duration: 5000,
          position: 'top-left',
        })

        if (axios.isAxiosError(error)) {
          const axiosError = error as AxiosError

          if (axiosError.response) {
            console.log(
              'Erro na resposta da API:',
              axiosError.response.status,
              axiosError.response.data,
            )
          } else if (axiosError.request) {
            console.log('Erro na solicitação da API:', axiosError.request)
          } else {
            console.log(
              'Erro ao configurar a solicitação da API:',
              axiosError.message,
            )
          }
        }
      }
    },
    [abortController],
  )

  useEffect(() => {
    fetchTransactions()

    return () => {
      abortController.abort()
    }
  }, [])

  return (
    <>
      <Toaster />
      <TransactionsContext.Provider value={{ transactions, fetchTransactions }}>
        {children}
      </TransactionsContext.Provider>
    </>
  )
}
