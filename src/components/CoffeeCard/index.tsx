import {
  ButtonsContainer,
  CoffeeCardContainer,
  FooterContainer,
  Tag,
  TagList,
} from './styles'
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
        <ButtonsContainer>
          <a>-1+</a>
          <button type="button">
            <ShoppingCartSimple size={20} weight="fill" />
          </button>
        </ButtonsContainer>
      </FooterContainer>
    </CoffeeCardContainer>
  )
}
