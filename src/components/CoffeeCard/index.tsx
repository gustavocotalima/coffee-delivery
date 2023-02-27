import {
  CoffeeCardContainer,
  FooterContainer,
  Form,
  Tag,
  TagList,
  SubmitButton,
} from './styles'
import { QtyInput } from '../QtyInput'
import { ShoppingCartSimple } from 'phosphor-react'

interface coffeeProps {
  name: string
  price: number
  tags: string[]
  description: string
  image: string
}

export function CoffeeCard({
  description,
  image,
  name,
  price,
  tags,
}: coffeeProps) {
  return (
    <CoffeeCardContainer>
      <img src={'../../assets/coffees/' + image} />
      <TagList>
        {tags.map((tag) => (
          <Tag key={tag}>{tag.toUpperCase()}</Tag>
        ))}
      </TagList>
      <h1>{name}</h1>
      <p>{description}</p>
      <FooterContainer>
        <a>
          R$ <span>{price}</span>
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
