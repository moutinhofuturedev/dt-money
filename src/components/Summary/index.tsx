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
        values="R$ 1.259,00"
      />
      <SummaryCard
        coloring="green"
        headerType="Total"
        icon={<DollarSign size={32} color="#FFFFFF" />}
        values="R$ 17.400,00"
      />
    </SummaryContainer>
  )
}
