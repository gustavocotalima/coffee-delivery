import styled from 'styled-components'

export const QtyInputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0rem;
  background: ${(props) => props.theme.color.button};
  border: 0;
  border-radius: 6px;
  padding: 0.5rem;

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    /* display: none; <- Crashes Chrome on hover */
    -webkit-appearance: none;
    margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
  }

  input[type='number'] {
    -moz-appearance: textfield; /* Firefox */
  }

  input {
    max-width: 1.25rem;
    width: 100%;
    border: 0;
    padding: 0;
    color: ${(props) => props.theme.color.title};
    background: transparent;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: ${(props) => props.theme.text.textRegularM};
    text-align: center;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${(props) => props.theme.color.purple};
    background: transparent;
    border: 0;
    padding: 0rem;
  }
`
