import styled from "styled-components"
import right from '../../styles/img/right.png'
import left from '../../styles/img/left.png'
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {BASE_URL} from '.././../constants/BASE_URL'
import {useForm} from '../../hooks/useForm'
import {goToFeedPage, goToHome} from '../../routes/Coordinate'

const Screen = styled.section`
    width: 100%;
    height: 100vh;
    background-color: #ff5c4b;
    display: flex;
    flex-direction: column;
    align-items: center;

    .title {
        font-size: 40px;
        font-weight: 900;
        top: 50px;
        color: #fff;
    }

    .img {
        width: 60px;
        height: 60px;
        background-color: #fff;
        border: none;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        bottom: 20%;
        right: 5%;
        .img2 {
            width: 50%;
        }
    }

    .inputEmail {
        border: none;
        font-size: 26px;
        width: 100%;
        margin-top: 140px;
        font-weight: 900;
        color: #fff;
        background-color: transparent;
        padding-left: 5%;

        ::placeholder{
            color: #fff;
        }
        
        :focus {
            outline-width: 0;
        }
    }

    .two {
        border: none;
        font-size: 26px;
        width: 90%;
        margin-top: 40px;
        font-weight: 900;
        color: #fff;
        background-color: transparent;
        padding-left: 5%;

        ::placeholder{
            color: #fff;
        }
        
        :focus {
            outline-width: 0;
        }
    }
`;

const Header = styled.section`
    width: 100%;
    height: 60px;
    /* background-color: green; */
    position: relative;

    img {
        width: 20px;
        position: absolute;
        left: 5%;
        top: 10px;
    }
`;

export function MakeLogin() {
    const navigate = useNavigate()
    
    const login = (e) => {
        e.preventDefault()
        axios.post(
      BASE_URL + "/login", form
    ).then((res) => {
        localStorage.setItem("token", res.data.token)
        goToFeedPage(navigate)
    })
}

const { form, onChange, clear } = useForm({ "email": '', "password": '' })
  
    return (
        <Screen>
            <Header onClick={() => goToHome(navigate)}><img src={left} alt="" /></Header>
            <h1 className="title">Fazer Login</h1>
            <form onSubmit={login}>
                <input required className="inputEmail" onChange={onChange} type="email" name="email" placeholder="Seu e-mail" autoComplete="off" autoFocus />
                <input required className="two" type="password" onChange={onChange} name="password" placeholder="Sua senha" />
                <button className="img" type="submit"><img className="img2" src={right} /></button>
            </form>
        </Screen>
    )
}
