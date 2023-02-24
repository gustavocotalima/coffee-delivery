import {
  CoffeeCardContainer,
  FooterContainer,
  Form,
  Tag,
  TagList,
  SubmitButton,
} from './styles'
import { QtyInput } from '../QtyInput'
import coffeeImage from '../../assets/coffees/Expresso Tradicional.png'
import { ShoppingCartSimple } from 'phosphor-react'

export function CoffeeCard() {
  return (
    <CoffeeCardContainer>
      <img src={coffeeImage} alt="Café expresso" />
      <TagList>
        <Tag>TRADICIONAL</Tag>
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
          <SubmitButton>
            <ShoppingCartSimple size={20} weight="fill" />
          </SubmitButton>
        </Form>
      </FooterContainer>
    </CoffeeCardContainer>
  )
}
