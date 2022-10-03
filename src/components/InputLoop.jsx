import styled from "styled-components"
import loop from '../styles/img/loop.svg'

const Input = styled.input`
    width: 80%;
    padding: 16px 8px 16px 56.3px;
    border-radius: 20px;
    border: none;
    background-color: #d0d0d059;

    background-image: url(${loop});
    background-repeat: no-repeat;
    background-position: 17px;

    font-family: Roboto;
    font-size: 16px;
    letter-spacing: -0.39px;
    position: relative;
    top: 0px;
    :focus {
    outline-width: 0;
} 
`;

export function InputLoop(props) {

  const onChange = (e) => {
    props.setSearch(e.target.value)
  }
  return (
    <Input type="text" placeholder="Restaurante" onChange={onChange} />
  )
}
