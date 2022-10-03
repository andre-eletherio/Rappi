import styled from "styled-components";

export const Screen = styled.section`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;

    font-family: Roboto;
    font-size: 16px;
    letter-spacing: -0.39px;
    text-align: center;
    background-color: #ff5c4b;
    padding-top: 60px;

    .title {
        font-size: 30px;
        font-weight: 900;
        /* position: absolute; */
        text-align: left;
        width: 90%;
        top: 50px;
        left: 5%;
        color: #fff;
    }

    form {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 20px;
        margin-top: 40px;
        align-items: center;

        button {
            width: 50%;
            height: 50px;
            background-color: #fff;
            border: none;
            border-radius: 30px;
            box-shadow: 0 3px 10px black;
            color: #ff5c4b;
            font-weight: 900;
            font-size: 20px;
            margin-top: 30px;
        }
    }

    input {
    border: none;
    width: 90%;
    text-align: left;
    font-size: 24px;
    font-weight: 900;
    background-color: transparent;
    color: #fff;
    border-bottom: 1px solid #ffffff31;

    ::placeholder {
        color: #f3f3f38b;
    }
    
    :focus {
        outline-width: 0;
    }
    }
`;

export const Header = styled.section`
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