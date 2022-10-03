import styled from "styled-components"
import right from '../styles/img/right.png'
import left from '../styles/img/left.png'

const Screen = styled.section`
    width: 100%;
    height: 100vh;
    background-color: #ff5c4b;
    display: flex;
    flex-direction: column;
    align-items: center;

    .title {
        font-size: 30px;
        font-weight: 900;
        position: absolute;
        width: 90%;
        top: 50px;
        left: 5%;
        color: #fff;
    }

    .input {
        border: none;
        font-size: 47px;
        width: 100%;
        text-align: center;
        margin-top: 140px;
        font-weight: 900;
        background-color: #ff5c4b;
        color: #fff;

        ::placeholder {
            color: #fff;
        }
        
        :focus {
            outline-width: 0;
        }
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
        font-size: 22px;
        width: 90%;
        margin-top: 160px;
        font-weight: 900;
        color: #fff;
        background-color: transparent;

        ::placeholder{
            color: #fff;
        }
        
        :focus {
            outline-width: 0;
        }
    }

    .two {
        border: none;
        font-size: 22px;
        width: 90%;
        margin-top: 40px;
        font-weight: 900;
        color: #fff;
        background-color: transparent;

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

export function Name({ form, onChange, setChoose, goToEmail }) {
    return (
        <Screen>
            <Header onClick={() => setChoose("hello")}><img src={left} alt="" /></Header>
            <h1 className="title">Olá!<br />Qual é o seu nome?</h1>
            <form onSubmit={goToEmail}>
                <input required className="input" onChange={onChange} type="text" name="name" placeholder="Seu nome" autoFocus autoCapitalize="on" autoComplete="off" />
                <button className="img" type="submit"><img className="img2" src={right} alt="" /></button>
            </form>
        </Screen>
    )
}

export function Email({ form, onChange, setChoose, signUp }) {
    return (
        <Screen>
            <Header onClick={() => setChoose("name")}><img src={left} alt="" /></Header>
            <h1 className="title">Adicione seu e-mail<br />Crie uma senha</h1>
            <form onSubmit={signUp}>
                <input required className="inputEmail" onChange={onChange} type="email" name="email" placeholder="Seu e-mail" autoComplete="off" autoFocus />
                <input required className="two" type="password" onChange={onChange} name="password" placeholder="Sua senha" />
                <button className="img"><img className="img2" src={right} /></button>
            </form>
        </Screen>
    )
}
