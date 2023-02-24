import styled from 'styled-components'

export const CoffeeListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: space-between;
  max-width: 70rem;
  width: 100%;
  margin: 2rem auto;
  align-items: center;
  row-gap: 2.5rem;

  h2 {
    font-family: 'Baloo 2', cursive;
    font-weight: 800;
    font-size: 2rem;
    width: 100%;
    grid-column: 1/5;
  }
`
