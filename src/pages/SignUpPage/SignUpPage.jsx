import { Screen } from "./Style";
import logo from '../../styles/img/logo.svg'
import { Header } from "../../components/Header";
import {useNavigate} from 'react-router-dom'
import {goToAddress} from '../../routes/Coordinate'
import { useForm } from "../../hooks/useForm";
import axios from "axios";
import {BASE_URL} from '../../constants/BASE_URL'

export function SignUpPage() {

  const navigate = useNavigate()

  const {form, onChange, clear} = useForm({"name": '', "email": '', "cpf": '', "password": ''})

  const signUp = (e) => {
    e.preventDefault()
    axios.post(
      BASE_URL + "/signup", form
    ).then((res)=> {
      localStorage.setItem("token", res.data.token)
      goToAddress(navigate)
    }).catch((err)=>alert(err.response.data.message))
  }

  return (
    <Screen>
      <Header/>
      <img src={logo} alt="" />
      <p className="entrar">Cadastrar</p>
      <form onSubmit={signUp}>
        <label className="name">Nome*</label>
        <input required value={form.name} onChange={onChange} type="text" name="name" placeholder="Nome e sobrenome"/>
        <label className="email">E-mail*</label>
        <input required value={form.email} onChange={onChange} type="email" name="email" placeholder="email@email.com" />
        <label className="cpf">CPF*</label>
        <input required value={form.cpf} onChange={onChange} type="text" name="cpf" placeholder="000.000.000-00" />
        <label className="password">Senha*</label>
        <input required value={form.password} onChange={onChange} type="password" name="password" placeholder="Mínimo 6 caracteres" />
        <label className="confirm">Confirmar*</label>
        <input type="password" name="confirm" placeholder="Confirme a senha anterior" />
        <button>Criar</button>
      </form>
    </Screen>
  )
}
