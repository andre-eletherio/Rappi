import styled from "styled-components"

const HeaderStyle = styled.section`
    width: 100%;
    height: 44px;
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    box-shadow: 0 0.5px 0 0 rgba(0, 0, 0, 0.25);
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    h1 {
        font-family: Roboto;
        font-size: 16px;
        letter-spacing: -0.39px;
        text-align: center;
        color: #000;
    }
`;

export function HeaderWord(props) {

    return (
        <HeaderStyle>
            <h1>{props.word}</h1>
        </HeaderStyle>
    )
}
