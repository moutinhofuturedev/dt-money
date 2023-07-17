import { SearchFormContainer } from './styles'
import { Search } from 'lucide-react'

export const SearchForm = () => {
  return (
    <SearchFormContainer>
      <input placeholder="Busque por transações" type="search" />
      <button type="submit">
        <Search />
        Buscar
      </button>
    </SearchFormContainer>
  )
}
