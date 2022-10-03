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

    img {
        margin-top: 24px;
    }

    .entrar {
        margin-top: 28px;
    }

    form {
        margin-top: 20px;
        width: 90%;
        display: flex;
        flex-direction: column;
        gap: 16px;
        position: relative;

        input {
            width: 100%;
            height: 56px;
            padding: 19px 48px 19px 16px;
            border-radius: 4px;
            border: solid 1px #b8b8b8;

            ::placeholder {
                font-family: Roboto;
                font-size: 16px;
                letter-spacing: -0.39px;
                color: #d0d0d0;
            }
        }

        label {
            font-family: Roboto;
            font-size: 12px;
            letter-spacing: -0.29px;
            color: #b8b8b8;
            width: 80px;
            height: 20px;
            background-color: #fff;
            text-align: start;
            padding: 0 4px;
            display: flex;
            position: absolute;
            left: 12px;
        }

        .name {
                top: -6px;
            }

        .email {
                top: 66px;
        }

        .cpf {
            top: 137px;
        }

        .password {
            top: 209px;
        }

        .confirm {
            top: 280px;
        }

        button {
            width: 100%;
            height: 42px;
            padding: 12px 16px;
            border-radius: 2px;
            background-color: #e86e5a;
            border: none;
            font-family: Roboto;
            font-size: 16px;
            letter-spacing: -0.39px;
            text-align: center;
        }
    }
`;