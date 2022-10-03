import styled from "styled-components";

export const Screen = styled.section`
    width: 100%;
    min-height: 100vh;
    font-family: Roboto;
    font-size: 16px;
    letter-spacing: -0.39px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Img = styled.div`
    width: 100%;
    height: 24vh;

    div {
        width: 100%;
        display: flex;
        justify-content: space-between;
    }

    .back {
        width: 42px;
        position: absolute;
        left: 5%;
        top: 2%;
    }
`;

export const Details = styled.section`
    width: 90%;
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-top: 8px;

    h1 {
        font-weight: 900;
        font-size: 25px;
        font-weight: bold;
        margin-top: 10px;
    }

    .card {
        display: flex;
        width: 100%;
        justify-content: space-between;
        border: 1px solid #b8b8b889;
        padding: 8px 13%;
        border-radius: 20px;
        margin-top: 10px;
        color: #b8b8b8;
        font-size: 15px;

        img {
            width: 18px;
            margin-left: 10px;
        }

        p {
            display: flex;
        }

        .bold {
            color: #000;
            font-weight: bold;
        }
    }

    div {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

export const Main = styled.section`
    width: 90%;
    height: auto;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
`;