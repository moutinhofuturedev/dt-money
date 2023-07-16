import { SummaryCard } from './SummaryCards'
import { SummaryContainer } from './styles'
import { ArrowUpCircle, ArrowDownCircle, DollarSign } from 'lucide-react'

export const Summary = () => {
  return (
    <SummaryContainer>
      <SummaryCard
        coloring="gray"
        headerType="Entradas"
        icon={<ArrowUpCircle size={32} color="#00B37E" />}
        values="R$ 17.400,00"
      />
      <SummaryCard
        coloring="gray"
        headerType="Saídas"
        icon={<ArrowDownCircle size={32} color="#F75A68" />}
        values="R$ 8.259,00"
      />
      <SummaryCard
        coloring="green"
        headerType="Total"
        icon={<DollarSign size={32} color="#FFFFFF" />}
        values="R$ 9.141,00"
      />
    </SummaryContainer>
  )
}
