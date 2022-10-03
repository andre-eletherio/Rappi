import { Screen, Header } from "./Style";
import { useForm } from "../../hooks/useForm";
import { useNavigate } from "react-router-dom";
import { goToFeedPage, goToHome } from "../../routes/Coordinate";
import axios from "axios";
import {BASE_URL} from '../../constants/BASE_URL'
import left from '../../styles/img/left.png'

export function AddressPage() {

  const navigate = useNavigate()

  const {form, onChange, clear} = useForm({"street": '', "number": Infinity, "neighbourhood": '', "city": '', "state": '', "complement": ''})

  const addAddress = (e) => {
    e.preventDefault()
    axios.put(
      BASE_URL + "/address", form, {
        headers: {
          auth: localStorage.getItem("token")
        }
      }
    ).then((res)=>{
      localStorage.setItem("token", res.data.token)
      goToFeedPage(navigate)
    })
  }

  return (
    <Screen>
      {/* <Header onClick={() => goToHome(navigate)}><img src={left} alt="" /></Header> */}
      <h1 className="title">Adicione seu endereço</h1>
      <form onSubmit={addAddress}>
        <input required autoComplete="off" value={form.street} onChange={onChange} type="text" name="street" placeholder="Rua / Av."/>
        <input required autoComplete="off" value={form.number} onChange={onChange} type="number" name="number" placeholder="Número" />
        <input required autoComplete="off" value={form.complement} onChange={onChange} type="text" name="complement" placeholder="Apto. / Bloco" />
        <input required autoComplete="off" value={form.neighbourhood} onChange={onChange} type="text" name="neighbourhood" placeholder="Bairro" />
        <input required autoComplete="off" value={form.city} onChange={onChange} type="text" name="city" placeholder="Cidade" />
        <input required autoComplete="off" value={form.state} onChange={onChange} type="text" name="state" placeholder="Estado" />
        <button>Salvar</button>
      </form>
    </Screen>
  )
}
