import styled from "styled-components"
import back from '../styles/img/back.svg'
import {useNavigate} from 'react-router-dom'

const HeaderStyle = styled.section`
    width: 100%;
    height: 44px;
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    box-shadow: 0 0.5px 0 0 rgba(0, 0, 0, 0.25);
    display: flex;
    align-items: center;
    position: relative;

    img {
        position: absolute;
        left: 16px;
        bottom: 10px;
    }
`;

export function Header() {

    const navigate = useNavigate()

    return (
        <HeaderStyle>
            <img src={back} alt="Voltar" onClick={()=>navigate(-1)} />
        </HeaderStyle>
    )
}
