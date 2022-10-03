import styled from "styled-components";

export const Screen = styled.section `
    width: 100%;
    height: 100vh;
    /* background-color: green; */
`;

export const Header = styled.section`
    width: 100%;
    height: 60px;
    /* background-color: blue; */
    display: flex;
    align-items: center;
    justify-content: center;

    font-family: Roboto;
    font-size: 20px;
    letter-spacing: -0.39px;
    position: relative;

    border-bottom: 1px solid #8f8f8f43;

    img {
        width: 6%;
    }

    .back {
        position: absolute;
        left: 5%;
    }

    .clean {
        position: absolute;
        right: 5%;
        color: gray;
        font-size: 80%;
        font-weight: 600;
    }
`;

export const Main = styled.main`
    width: 100%;
    min-height: calc(100vh - 80px);
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;

    .empty {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        height: 100%;
        height: calc(100vh - 176px);
        justify-content: center;
    }

    .list {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 130px;
        gap: 10px;
    }
`;

export const Footer = styled.section`
    width: 100%;
    height: 120px;
    background-color: #fff;
    position: fixed;
    bottom: 0;
    padding: 0 5%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 0 1em #0000005e;

    .price {
        display: flex;
        flex-direction: column;
        display: inline-block;
        text-align: left;
        font-size: 100%;

        .number {
            font-weight: 900;
            font-size: 180%;
        }
    }

    button {
        border: none;
        height: 50px;
        width: 180px;
        border-radius: 30px;

        font-size: 120%;
        font-weight: 600;
        letter-spacing: normal;
        color: #fff;
        background-color: #11ef7c;
        box-shadow: 0 2px 6px #11ef7c9b;
    }
`;