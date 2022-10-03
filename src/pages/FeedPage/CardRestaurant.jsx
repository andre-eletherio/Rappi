import { useNavigate } from "react-router-dom";
import styled from "styled-components"
import { getImg } from "../../hooks/getImg";
import {goToRestaurant} from "../../routes/Coordinate"

const Card = styled.section`
    width: 88%;
    height: 28vh;
    border-bottom: solid 1px #b8b8b8;
    display: grid;
    grid-template-rows: 1fr 68px;

    .one {
        border-radius: 20px;
    }

    .two {
        /* background-color: gray; */
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 16px;
    }

    p {
        font-family: Roboto;
        font-size: 16px;
        letter-spacing: -0.39px;
    }

    .name {
        font-weight: 700;
    }

    .bot {
        color: #b8b8b8;
        display: flex;
        justify-content: space-between;
    }
`;


export function CardRestaurant({restaurant}) {

    const navigate = useNavigate()
    const sty = getImg(restaurant.name, restaurant.logoUrl)

    return (
        <Card onClick={()=>goToRestaurant(navigate, restaurant.id)}>
            <div className="one" style={{backgroundImage: `url(${sty?.img})`, backgroundPosition: "center", backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundColor: sty?.color}}></div>
            <div className="two">
                <p className="name">{restaurant?.name}</p>
                <div className="bot">
                        <p className="time">{restaurant?.deliveryTime} min</p>
                    <p className="tax">Frete R${restaurant?.shipping},00</p>
                </div>
            </div>
        </Card>
    )
}
