import { useCallback, useContext } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import {
  Overlay,
  Content,
  CloseButton,
  TransactionType,
  TransactionTypeButton,
} from './styles'
import { ArrowDownCircle, ArrowUpCircle, X } from 'lucide-react'
import { Toaster, toast } from 'react-hot-toast'

import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

import { api } from '../../lib/api'
import axios, { AxiosError } from 'axios'
import { TransactionsContext } from '../../context/TransactionContext'

const newTransactionFormSchema = z.object({
  description: z.string(),
  price: z.number(),
  category: z.string(),
  expense: z.enum(['income', 'outcome']),
})

type NewTransactionFormInputs = z.infer<typeof newTransactionFormSchema>

export const NewTransactionModal = () => {
  const {
    control,
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm<NewTransactionFormInputs>({
    resolver: zodResolver(newTransactionFormSchema),
    defaultValues: { expense: 'income' },
  })

  const { fetchTransactions } = useContext(TransactionsContext)

  const handleCreateNewTransaction = useCallback(
    async (data: NewTransactionFormInputs) => {
      const { description, price, category, expense } = data

      try {
        await api.post('/transactions', {
          description,
          expense,
          category,
          price,
          createdAt: new Date(),
        })

        reset()

        if (fetchTransactions) {
          await fetchTransactions()

          toast.success('Transação cadastrada', {
            duration: 5000,
            position: 'top-left',
          })
        }
      } catch (error) {
        toast.error('Não foi possível cadastrar transação', {
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
    [fetchTransactions, reset],
  )

  return (
    <Dialog.Portal>
      <Overlay />
      <Toaster />
      <Content>
        <Dialog.Title>Nova Transação</Dialog.Title>
        <CloseButton>
          <X />
        </CloseButton>
        <form action="" onSubmit={handleSubmit(handleCreateNewTransaction)}>
          <input
            type="text"
            placeholder="Descrição"
            required
            {...register('description')}
          />
          <input
            type="number"
            placeholder="Preço"
            required
            {...register('price', { valueAsNumber: true })}
          />
          <input
            type="text"
            placeholder="Categoria"
            required
            {...register('category')}
          />

          <Controller
            control={control}
            name="expense"
            render={({ field }) => {
              return (
                <TransactionType
                  onValueChange={field.onChange}
                  value={field.value}
                >
                  <TransactionTypeButton variant="income" value="income">
                    <ArrowUpCircle size={24} />
                    Entrada
                  </TransactionTypeButton>
                  <TransactionTypeButton variant="outcome" value="outcome">
                    <ArrowDownCircle size={24} />
                    Saída
                  </TransactionTypeButton>
                </TransactionType>
              )
            }}
          />

          <button type="submit" disabled={isSubmitting}>
            Cadastrar
          </button>
        </form>
      </Content>
    </Dialog.Portal>
  )
}
