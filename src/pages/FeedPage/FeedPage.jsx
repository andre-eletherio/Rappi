import { HeaderWord } from "../../components/HeaderWord";
import { InputLoop } from "../../components/InputLoop";
import { Screen, Header } from "./style";
import axios from 'axios'
import { BASE_URL } from "../../constants/BASE_URL";
import { useEffect, useState } from "react";
import { CardRestaurant } from "./CardRestaurant";
import { Filter } from "./Filter";
import { useNavigate } from "react-router-dom";
import basket from '../../styles/img/basket.png'
import { Address } from "../../components/Address";
import { EditAddress } from "../../components/EditAddress";
import { goToCart } from "../../routes/Coordinate";

export function FeedPage() {
  const [restaurants, setRestaurants] = useState([])
  const [filter, setFilter] = useState('Todas')
  const [search, setSearch] = useState("")
  const [showAddress, setShowAddress] = useState(false)

  const navigate = useNavigate()

  useEffect(() => {
    getRestaurants()
    localStorage.getItem("cart") === null && localStorage.setItem("cart", [])
  }, [])

  const getRestaurants = () => {
    axios.get(
      BASE_URL + "/restaurants", {
      headers: {
        auth: localStorage.getItem("token")
      }
    }
    ).then((res) => setRestaurants(res.data.restaurants))
  }

  const restaurantsList = restaurants.filter((res) => {
    return filter === '' || filter === "Todas" ? res : res?.category === filter
  }).filter((res)=>search === '' ? res : res.name.toLowerCase().includes(search.toLowerCase())).map((res, i) => <CardRestaurant key={i} restaurant={res} />)

  return (
    <Screen>
      <Header>
        <Address setShowAddress={setShowAddress}/>
        <img className="img" src={basket} alt="" onClick={()=>goToCart(navigate)} />
      </Header>
      <div className="inp">
        <InputLoop setSearch={setSearch} />
        <Filter setFilter={setFilter} filter={filter} />
      </div>
      <div className="main">
        {restaurantsList}
      </div>
      {showAddress && <EditAddress setShowAddress={setShowAddress}/>}
    </Screen>
  )
}
