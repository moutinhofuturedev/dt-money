import { Meta, StoryObj } from '@storybook/react'
import { SummaryCard } from '.'
import { ArrowDownCircle, ArrowUpCircle, DollarSign } from 'lucide-react'

const meta = {
  title: 'Components/SummaryCard',
  component: SummaryCard,
  tags: ['autodocs'],
} satisfies Meta<typeof SummaryCard>

export default meta

export const Entradas: StoryObj<typeof SummaryCard> = {
  args: {
    coloring: 'gray',
    headerType: 'Entradas',
    icon: <ArrowUpCircle size={32} color="#00B37E" />,
    values: 'R$ 12.123,00',
  },
}

export const Saídas: StoryObj<typeof SummaryCard> = {
  args: {
    coloring: 'gray',
    headerType: 'Saída',
    icon: <ArrowDownCircle size={32} color="#F75A68" />,
    values: 'R$ 4.456,00',
  },
}

export const Total: StoryObj<typeof SummaryCard> = {
  args: {
    coloring: 'green',
    headerType: 'Total',
    icon: <DollarSign size={32} color="#FFFFFF" />,
    values: 'R$ 15.456,00',
  },
}
