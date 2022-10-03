import styled from "styled-components"

const Section = styled.section`
    height: 42px;
    width: 90%;
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 20px;

    font-family: Roboto;
    font-size: 16px;
    letter-spacing: -0.39px;
    overflow-x: scroll;
    overflow-y: hidden;

    ::-webkit-scrollbar{
        height: 0;
    }

    .selected {
      color: #e86e5a;
    }
`;

export function Filter(props) {
  const options = ["Todas", "Carnes", "Árabe", "Hamburguer", "Petiscos", "Asiática", "Italiana", "Sorvetes", "Baiana", "Mexicana"]
  return (
    <Section>
      {options?.map((item, i) => <p className={item === props.filter ? "selected" : "ns"} onClick={() => props.setFilter(item)} key={i}>{item}</p>)}
    </Section>
  )
}
