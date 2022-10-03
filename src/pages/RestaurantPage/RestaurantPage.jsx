import { useParams } from "react-router-dom"
import axios from 'axios'
import { BASE_URL } from "../../constants/BASE_URL"
import { useEffect, useState } from "react"
import { Screen, Img, Details, Main } from "./style"
import { getImg } from '../../hooks/getImg'
import { useNavigate } from 'react-router-dom'
import { CardProduct } from "./CardProduct"
import clock from '../../styles/img/clock.svg'
import bike from '../../styles/img/bike.png'
import bk from '../../styles/img/bk.png'
import { ProductDetail } from "../../components/ProductDetail"

export function RestaurantPage() {
  const [restaurant, setRestaurant] = useState([])
  const [product ,setProduct] = useState([])
  const [show, setShow] = useState(false)

  const navigate = useNavigate()

  useEffect(() => {
    getDetails()
  }, [])

  const params = useParams()

  const getDetails = () => {
    axios.get(
      BASE_URL + "/restaurants/" + params.id, {
      headers: {
        auth: localStorage.getItem("token")
      }
    }
    ).then((res) => setRestaurant(res.data.restaurant))
  }

  const sty = getImg(restaurant.name, restaurant.logoUrl)

  const list = restaurant && restaurant?.products?.map((item, i)=><CardProduct key={i} item={item} setProduct={setProduct} setShow={setShow}/>)

  return (
    <Screen>
      <Img style={{ backgroundImage: `url(${sty.img})`, backgroundPosition: "center", backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundColor: sty?.color }} alt="">
        <div>
          <img className="back" src={bk} onClick={() => navigate(-1)}/>
        </div>
      </Img>
      <Details>
        <h1>{restaurant.name}</h1>
        <section className="card">
          <div>
            <p>Entrega <img src={clock} /></p>
            <p className="bold">{restaurant.deliveryTime} min</p>
          </div>
          <div>
            <p>Frete <img src={bike} alt="" /></p>
            <p className="bold">R${restaurant.shipping},00</p>
          </div>
        </section>
      </Details>
      <Main>
          {list}
      </Main>
      {show && <ProductDetail product={product} setShow={setShow}/>}
    </Screen>
  )
}
