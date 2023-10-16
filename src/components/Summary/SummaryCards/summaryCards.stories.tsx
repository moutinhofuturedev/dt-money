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
    price: 12.123,
  },
}

export const Saídas: StoryObj<typeof SummaryCard> = {
  args: {
    coloring: 'gray',
    headerType: 'Saída',
    icon: <ArrowDownCircle size={32} color="#F75A68" />,
    price: 4.454,
  },
}

export const Total: StoryObj<typeof SummaryCard> = {
  args: {
    coloring: 'green',
    headerType: 'Total',
    icon: <DollarSign size={32} color="#FFFFFF" />,
    price: 15.456,
  },
}
