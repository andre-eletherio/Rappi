import styled from "styled-components";

export const Screen = styled.section`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;

    .main {
        width: 100%;
        min-height: calc(100vh - 108px);
        align-items: center;
        display: flex;
        flex-direction: column;
        gap: 14px;
        margin-bottom: 18px;
        margin-top: 10px;
        /* margin-top: 300px; */
    }

    .inp {
        width: 100%;
        height: 114px;
        background-color: #fff;
        display: flex;
        flex-direction: column;
        /* justify-content: center; */
        align-items: center;
        position: fixed;
        position: sticky;
        top: 0;
        padding-top: 8px;
        gap: 3px;
    }
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

    .img {
        position: absolute;
        right: 5%;
        font-weight: bold;
    }
    `;