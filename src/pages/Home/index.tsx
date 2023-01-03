import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { useTheme } from 'styled-components'
import homeImage from '../../assets/coffee-home-image.png'
import { CoffeeCard } from '../../components/CoffeeCard'
import { HomeContainer, IntroItem, IntroText, Main } from './styles'

export function Home() {
  const { color } = useTheme()
  return (
    <Main>
      <HomeContainer>
        <IntroText>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
          <div>
            <IntroItem color={color.yellowDark}>
              <span>
                <ShoppingCart size={16} weight="fill" />
              </span>
              Compra simples e segura
            </IntroItem>

            <IntroItem color={color.text}>
              <span>
                <Package size={16} weight="fill" />
              </span>
              Embalagem mantém o café intacto
            </IntroItem>

            <IntroItem color={color.yellow}>
              <span>
                <Timer size={16} weight="fill" />
              </span>
              Entrega rápida e rastreada
            </IntroItem>
            <IntroItem color={color.purple}>
              <span>
                <Coffee size={16} weight="fill" />
              </span>
              O café chega fresquinho até você
            </IntroItem>
          </div>
        </IntroText>
        <div>
          <img
            src={homeImage}
            alt="Imagem de um copo de café com a marca Coffee Delivery com alguns tipos de café ao fundo"
          />
        </div>
        <CoffeeCard />
      </HomeContainer>
    </Main>
  )
}
