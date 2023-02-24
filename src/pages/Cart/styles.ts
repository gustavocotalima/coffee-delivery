import styled from 'styled-components'

export const Main = styled.main`
  width: 100%;
  max-width: 70rem;
  display: flex;
  align-items: flex-start;
  gap: 2rem;
  margin-top: 2.5rem;

  h1 {
    color: ${(props) => props.theme.color.subtitle};
    font-family: 'Baloo 2', sans-serif;
    font-weight: 700;
    font-size: ${(props) => props.theme.text.titleXS};
    text-align: center;
    line-height: 100%;
  }
`

export const DataContainer = styled.div`
  width: 100%;
  max-width: 40rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.75rem;
`
export const AdressContainer = styled.div`
  width: 100%;
`

export const PaymentContainer = styled.div``

export const CartContainer = styled.div`
  width: 100%;
  max-width: 28rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.75rem;
`
