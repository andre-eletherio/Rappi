import styled from "styled-components"
import { useForm } from "../hooks/useForm";
import axios from 'axios'
import { BASE_URL } from "../constants/BASE_URL";

const Screen = styled.section`
    width: 100%;
    height: 100vh;
    background-color: #0000009f;
    position: sticky;
    bottom: 0;
    grid-template-rows: 20% 80%;
`;

const Div = styled.section`
    width: 100%;
    height: 20%;
    /* background-color: green; */
`;

const Main = styled.section`
    width: 100%;
    height: 70%;
    background-color: #fff;
    position: absolute;
    bottom: 0;
    border-top-left-radius: 40px;
    border-top-right-radius: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
        text-align: center;
        width: 90%;
        font-size: 160%;
        margin-top: 20px;
        margin-bottom: 20px;
        padding-bottom: 20px;
        border-bottom: 1px solid #00000090;
    }

    .inputs {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 8px;
        width: 100%;
        input {
            background-color: #d0d0d059;
            border: none;
            /* height: 42px; */
            padding: 16px 8px 16px 16px;
            border-radius: 20px;
            width: 90%;

            font-family: Roboto;
            font-size: 16px;
            letter-spacing: -0.39px;

            :focus {
                outline-width: 0;
            } 
        }
    }

    button {
            width: 60%;
            height: 52px;
            border-radius: 20px;
            background-color: #ff5c4b;
            border: none;
            margin-top: 14px;
            font-family: Roboto;
            font-size: 24px;
            letter-spacing: -0.39px;
            text-align: center;
            color: #fff;
            font-weight: 900;
            box-shadow: 0 3px 6px #00000061;
        }
`;

export function EditAddress({setShowAddress}) {
    
    const {form, onChange, clear} = useForm({"street": '', "number": '', "neighbourhood": '', "city": '', "state": '', "complement": ''})

    const updateForm = (e) => {
        e.preventDefault()
        axios.put(
            BASE_URL + "/address", form, {
                headers: {
                    auth: localStorage.getItem("token")
                }
            }
        ).then((res)=>{
            clear()
            alert("Endereço atualizado")
        }).catch((err)=>console.log(err))
    }

    return (
        <Screen>
            <Div onClick={()=>setShowAddress(false)}></Div>
            <Main>
                <h1>Editar Endereço</h1>
                <form className="inputs" onSubmit={updateForm}>
                    <input required type="text" value={form.street} onChange={onChange} name="street" placeholder="Rua / Av." />
                    <input required type="text" value={form.number} onChange={onChange} name="number" placeholder="Número" />
                    <input required type="text" value={form.complement} onChange={onChange} name="complement" placeholder="Complemento" />
                    <input required type="text" value={form.neighbourhood} onChange={onChange} name="neighbourhood" placeholder="Bairro" />
                    <input required type="text" value={form.city} onChange={onChange} name="city" placeholder="Cidade" />
                    <input required type="text" value={form.state} onChange={onChange} name="state" placeholder="Estado" />
                    <button type="submit">Salvar</button>
                </form>
            </Main>
        </Screen>
    )
}
