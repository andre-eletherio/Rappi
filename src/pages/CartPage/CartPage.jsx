import { useNavigate } from "react-router-dom";
import { Header, Screen, Main, Footer } from "./style";
import basket from '../../styles/img/basket.png'
import { useEffect, useState } from "react";
import { CardCart } from "./CardCart";
import goBack from '../../styles/img/goBack.svg'
import {goToFeedPage} from '../../routes/Coordinate'

export function CartPage() {
  const [items, setItems] = useState([])
  const [subTotal, setSubTotal] = useState(0)
  const [reload, setReaload] = useState(false)

  const navigate = useNavigate()

  useEffect(()=> {
    getTotal()
  })

  useEffect(() => {
    setItems(localStorage.getItem("cart") === '' ? [] : JSON.parse(localStorage.getItem("cart")))
    getTotal()
  }, [reload])

  const changeAmount = (itemId, action) => {
    const list = items;
    const exists = items.findIndex(opa => opa.id === itemId)
    action === "sum" ? list[exists].amount += 1 : list[exists].amount -= 1;
    list[exists].amount === 0 && list.splice(exists, 1)
    localStorage.setItem("cart", JSON.stringify(list))
    setReaload(!reload)
  }

  const listItems = items !== null && items.map((item, i) => <CardCart key={i} item={item} changeAmount={changeAmount} />)

  const getTotal = () => {
    let sum = 0;
    for (let i = 0; i < items.length; i++) {
      items[i].amount > 1 ? sum += items[i].price * items[i].amount : sum += items[i].price
    }
    setSubTotal(sum)
  }

  const clear = () => {
    localStorage.setItem("cart", [])
    setReaload(!reload)
  }

  const buy = () => {
    localStorage.setItem("cart", [])
    alert("Pedido em andamento!")
    goToFeedPage(navigate)
  }

  return (
    <Screen>
      <Header>
        <img className="back" src={goBack} onClick={() => navigate(-1)}/>
        <p>Sua cesta</p>
        <p className="clean" onClick={clear}>Esvaziar</p>
      </Header>
      <Main>
        {items.length === 0 ?
          <div className="empty">
            <img src={basket} alt="" />
            <p>Sua cesta está vazia</p>
          </div> :
          <div className="list">
            {listItems}
          </div>
        }
      </Main>
      <Footer onClick={getTotal}>
        <div className="price">
          <p>SubTotal</p>
          <p className="number">R${subTotal.toFixed(2)}</p>
        </div>
        <button onClick={buy}>Confirmar</button>
      </Footer>
    </Screen>
  )
}
