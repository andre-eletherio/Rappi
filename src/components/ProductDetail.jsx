import { useState } from "react";
import styled from "styled-components"

const Screen = styled.section`
    width: 100%;
    height: 100vh;
    background-color: #00000056;
    position: sticky;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Card = styled.section`
    width: 90%;
    height: 30vh;
    background-color: #fff;
    border-radius: 30px;
    box-shadow: 0 0 1em #00000068;
    display: grid;
    grid-template-rows: 40% 1fr 30%;
    position: relative;

    .img {
        width: 100%;
        height: 100%;
        border-top-left-radius: 30px;
        border-top-right-radius: 30px;
    }

    .middle {
        display: grid;
        grid-template-columns: 65% 35%;
        text-align: center;
        padding: 0 3%;
        align-items: center;
    }

    .name {
        font-size: 26px;
        font-weight: 600;
    }

    .price {
        font-size: 26px;
        font-weight: 600;
    }

    .bottom {
        width: 100%;
        height: 30%;
        box-shadow: 0 0 20px #00000033;
        position: absolute;
        bottom: 0;
        border-bottom-left-radius: 30px;
        border-bottom-right-radius: 30px;

        display: grid;
        grid-template-columns: 1fr 1fr;

        .number, .button {
            width: 90%;
            height: 60%;
            border-radius: 30px;
            align-self: center;
            justify-self: center;
            box-shadow: 0 12px 1em #00000054;
        }

        .number {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0 14%;
            font-weight: 900;
            font-size: 20px;

            .m {
                font-size: 32px;
            }

            .n {
                font-size: 24px;
            }
        }

        .button {
            border: none;
            font-size: 18px;
            font-weight: 900;
            color: #fff;
            background-color: #11ef7c;
        }
    }
`;

export function ProductDetail({ product, setShow }) {
    const [qnt, setQnt] = useState(1)

    const addToCart = (product) => {
        let list = localStorage.getItem("cart") === '' ? [] : JSON.parse(localStorage.getItem("cart"))
        const exists = list.findIndex(opa => opa.name === product.name )
        exists === -1 ? list.push({...product, amount: qnt}) : list[exists].amount = list[exists].amount + qnt
        localStorage.setItem("cart", JSON.stringify(list))
        setShow(false)
    }

    const opa = (e) => {
        e.stopPropagation();
    }

    return (
        <Screen onClick={() => setShow(false)}>
            <Card onClick={opa}>
                <div className="img" style={{ backgroundImage: `url(${product.photoUrl})`, backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}></div>
                <div className="middle">
                    <p className="name">{product.name}</p>
                    <p className="price">R${product.price.toFixed(2)}</p>
                </div>
                <div className="bottom">
                    <div className="number">
                        <p className="m" onClick={qnt > 1 ? ()=> setQnt(qnt - 1) : ()=>setQnt(1)}>-</p>
                        <p>{qnt}</p>
                        <p className="n" onClick={()=> setQnt(qnt + 1)}>+</p>
                    </div>
                    <button className="button" onClick={()=>addToCart(product)}>Adicionar R${(product.price * qnt).toFixed(2)}</button>
                </div>
            </Card>
        </Screen>
    )
}
