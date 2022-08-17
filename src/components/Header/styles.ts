import styled from 'styled-components'

export const HeaderContainer = styled.header`
  max-width: 70rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;

  img {
    height: 2.5rem;
  }

  nav {
    display: flex;
    gap: 0.75rem;
  }
`

export const Adress = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.375rem;
  gap: 0.25rem;
  font-size: ${(props) => props.theme.text.textRegularS};
  color: ${(props) => props.theme.color.purple};
  text-decoration: none;
  border: 0;
  border-radius: 6px;
  padding: 0.5rem;
  background: ${(props) => props.theme.color.purpleLight};
  line-height: 130%;
  span {
    color: ${(props) => props.theme.color.purpleDark};
  }
`

export const Cart = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.375rem;
  color: ${(props) => props.theme.color.yellowDark};
  border: 0;
  border-radius: 6px;
  padding: 0.5rem;
  background: ${(props) => props.theme.color.yellowLight};
  line-height: 130%;
`
