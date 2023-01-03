import { CartContainer, DataContainer, Main } from './styles'

export function Cart() {
  return (
    <Main>
      <DataContainer>
        <h1>Complete seu pedido</h1>
      </DataContainer>
      <CartContainer>
        <h1>Cafés selecionados</h1>
      </CartContainer>
    </Main>
  )
}
