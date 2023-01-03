import { QtyInputContainer } from './styles'
import { Minus, Plus } from 'phosphor-react'

export function QtyInput() {
  return (
    <QtyInputContainer>
      <button type="button">
        <Minus size={20} weight="fill" />
      </button>
      <input type="number" name="" id="" value={1} min={1} />
      <button type="button">
        <Plus size={20} weight="fill" />
      </button>
    </QtyInputContainer>
  )
}
