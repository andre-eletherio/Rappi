import { Screen } from "./Style";
import bigodon from '../../styles/img/bigodon.png'
import { useNavigate } from 'react-router-dom'
import { goToAddress, goToLogin } from "../../routes/Coordinate";
import { useForm } from "../../hooks/useForm";
import axios from "axios";
import { BASE_URL } from "../../constants/BASE_URL"
import { Name, Email } from "../../components/Questions";
import { useState } from "react";

export function LoginPage() {
  const [choose, setChoose] = useState('hello')
  const [random, setRandom] = useState(Math.floor(Math.random() * (100000000 - 0 + 1) + 0))

  const navigate = useNavigate()

  const login = (e) => {
    axios.post(
      BASE_URL + "/login", form
    ).then((res) => {
      localStorage.setItem("token", res.data.token)
      goToAddress(navigate)
    }).catch((err) => alert(err.response.data.message))
  }

  const signUp = (e) => {
    e.preventDefault()
    axios.post(
      BASE_URL + "/signup", form
    ).then((res)=> {
      localStorage.setItem("token", res.data.token)
      goToAddress(navigate)
    }).catch((err)=>alert(err.response.data.message))
  }

  const goToEmail = (e) => {
    e.preventDefault()
    setChoose('email')
    setRandom(Math.floor(Math.random() * (100000000 - 0 + 1) + 0))
  }

  const { form, onChange, clear } = useForm({ "name": '', "email": '', "cpf": random, "password": '' })

  return (
    <Screen>
      {choose === 'hello' &&
        <Screen>
          <img className="img1" src={bigodon} alt="" />
          <h1>Bem vindo ao Rappi</h1>
          <div className="buttons">
            <button onClick={()=>goToLogin(navigate)}>Entrar</button>
            <button onClick={()=>setChoose('name')}>Criar Conta</button>
          </div>
        </Screen>
      }
      {choose === 'name' &&
        <Name form={form} onChange={onChange} setChoose={setChoose} goToEmail={goToEmail} />
      }
      {choose === 'email' &&
        <Email form={form} onChange={onChange} setChoose={setChoose} signUp={signUp}/>}
    </Screen>
  )
}
