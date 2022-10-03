import styled from "styled-components";

export const Screen = styled.section`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    background-color: #e86e5a;

    font-family: Roboto;
    font-size: 16px;
    letter-spacing: -0.39px;
    text-align: center;
    background-image: linear-gradient(to bottom right, #ff5c4b, #ff7364);

    .img1 {
        margin-top: 88px;
        width: 50%;
    }

    h1 {
        width: 70%;
        text-align: left;
        font-size: 300%;
        font-weight: 900;
        color: #fff;
        position: absolute;
        left: 5%;
        top: 270px;
    }

    .buttons {
        display: flex;
        flex-direction: column;
        width: 100%;
        position: relative;
        top: 360px;
        align-items: center;
        gap: 20px;
    }

    button {
        width: 90%;
        height: 60px;
        background-color: #fff;
        border: none;
        border-radius: 30px;

        font-size: 25px;
        color: #ff5c4b;
        font-weight: 900;
    }
`;