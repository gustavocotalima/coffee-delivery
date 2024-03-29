import styled from 'styled-components'
import introBackground from '../../assets/intro-bg.png'

export const Main = styled.main`
  background: url(${introBackground}) no-repeat center;
  width: 100%;
  height: 34rem;
  display: flex;
  margin: 0;
  align-items: center;
`

export const HomeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  max-width: 70rem;
  width: 100%;
  margin: auto;
  align-items: center;
`
export const IntroText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 37rem;

  h1 {
    font-family: 'Baloo 2', cursive;
    font-weight: 800;
    font-size: ${(props) => props.theme.text.titleXL};
    line-height: 130%;
    color: ${(props) => props.theme.color.title};
  }

  p {
    font-weight: 400;
    font-size: ${(props) => props.theme.text.textRegularL};
    line-height: 130%;
    margin-top: 1rem;
    color: ${(props) => props.theme.color.subtitle};
  }

  div {
    margin-top: 4.125rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 1.25rem;
    justify-items: start;
  }
`

interface IntroItemProps {
  color: string
}

export const IntroItem = styled.a<IntroItemProps>`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: ${(props) => props.theme.text.textRegularM};
  color: ${(props) => props.theme.color.text};
  text-decoration: none;
  border: 0;
  border-radius: 6px;
  line-height: 130%;
  span {
    color: ${(props) => props.theme.color.background};
    background: ${({ color }) => color};
    padding: 0.5rem;
    border-radius: 999px;
    line-height: 0%;
  }
`
