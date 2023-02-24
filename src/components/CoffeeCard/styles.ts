import styled from 'styled-components'

export const CoffeeCardContainer = styled.div`
  max-width: 16rem;
  width: 100%;
  border: 0;

  border-radius: 6px 36px 6px 36px;
  padding: 0 1.25rem 1.25rem;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: ${(props) => props.theme.color.card};

  h1 {
    color: ${(props) => props.theme.color.title};
    font-family: 'Baloo 2', sans-serif;
    font-weight: 700;
    font-size: 1.25rem;
    text-align: center;
    line-height: 100%;
  }

  p {
    color: ${(props) => props.theme.color.label};
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 0.875rem;
    text-align: center;
    margin: 0.5rem 0 1.5rem;
  }

  img {
    margin-top: -1.25rem;
    object-fit: cover;
    max-width: 7.5rem;
    width: 100%;
  }
`
export const CoffeeImage = styled.img`
  width: 290px;
  height: 160px;
  margin-top: -1.25rem;
  object-fit: cover;
  border-radius: 5px;
`

export const TagList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  margin: 0.75rem 0 1rem;
`

export const Tag = styled.a`
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.color.yellowDark};
  background: ${(props) => props.theme.color.yellowLight};
  border: 0;
  border-radius: 999px;
  padding: 0.25rem 0.5rem;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: ${(props) => props.theme.text.componentsTag};
  text-align: center;
`
export const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  a {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: ${(props) => props.theme.text.textRegularS};
    color: ${(props) => props.theme.color.text};
    span {
      font-family: 'Baloo 2', sans-serif;
      font-weight: 700;
      font-size: ${(props) => props.theme.text.titleM};
    }
  }
`

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
`

export const SubmitButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: ${(props) => props.theme.color.white};
  background: ${(props) => props.theme.color.purpleDark};
  border: 0;
  border-radius: 6px;
  padding: 0.5rem;
`
