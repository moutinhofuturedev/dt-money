import { Header } from '../../components/Header'
import { SearchForm } from '../../components/SearchForm'
import { Summary } from '../../components/Summary'
import { Transaction } from '../../components/Transaction'

export const Transactions = () => {
  return (
    <>
      <Header title="DT Money" name="Nova transação" />
      <Summary />
      <SearchForm />
      <Transaction
        typeExpense="income"
        tableTitle="Desenvolvimento de site"
        tableValue="R$ 12.000,00"
        tableType="Venda"
        tableDate="12/12/2022"
      />
      <Transaction
        typeExpense="outcome"
        tableTitle="Aluguel do apartamento"
        tableValue="- R$ 1.200,00"
        tableType="Casa"
        tableDate="01/04/2023"
      />
    </>
  )
}
