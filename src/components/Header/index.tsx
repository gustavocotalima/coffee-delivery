import { Adress, Cart, HeaderContainer } from './styles'
import logoCoffeeDelivery from '../../assets/coffee-delivery-logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoCoffeeDelivery} alt="" />
      <nav>
        <Adress href="/">
          <MapPin size={22} weight="fill" />
          <span>Rio Piracicaba, MG</span>
        </Adress>
        <Cart href="/">
          <ShoppingCart size={22} weight="fill" />
        </Cart>
      </nav>
    </HeaderContainer>
  )
}
