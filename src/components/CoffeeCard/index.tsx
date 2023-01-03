import {
  CoffeeCardContainer,
  FooterContainer,
  Form,
  Tag,
  TagList,
} from './styles'
import { QtyInput } from '../QtyInput'
import coffeeImage from '../../assets/coffees/Type=Expresso.png'
import { ShoppingCartSimple } from 'phosphor-react'

export function CoffeeCard() {
  return (
    <CoffeeCardContainer>
      <img src={coffeeImage} alt="Café expresso" />
      <TagList>
        <Tag>TRADICIONAL</Tag>
        <Tag>QUENTE</Tag>
        <Tag>COM LEITE</Tag>
      </TagList>
      <h1>Expresso Tradicional</h1>
      <p>O tradicional café feito com água quente e grãos moídos</p>
      <FooterContainer>
        <a>
          R$ <span>9,99</span>
        </a>
        <Form>
          <QtyInput />
          <button type="button">
            <ShoppingCartSimple size={20} weight="fill" />
          </button>
        </Form>
      </FooterContainer>
    </CoffeeCardContainer>
  )
}
