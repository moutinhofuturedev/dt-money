import { SearchFormContainer } from './styles'
import { Search } from 'lucide-react'

import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { TransactionsContext } from '../../context/TransactionContext'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export const SearchForm = () => {
  const { fetchTransactions } = useContext(TransactionsContext)

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  const handleSearchTransactions = async ({ query }: SearchFormInputs) => {
    if (fetchTransactions) {
      await fetchTransactions(query)
    }

    console.log(query)
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
      <input
        placeholder="Busque por transações"
        autoComplete="off"
        type="search"
        {...register('query')}
      />
      <button type="submit" disabled={isSubmitting}>
        <Search />
        <p>Buscar</p>
      </button>
    </SearchFormContainer>
  )
}
