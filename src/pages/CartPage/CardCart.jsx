import styled from "styled-components"
import trash from '../../styles/img/trash.svg'

const Card = styled.section`
    width: 90%;
    min-height: 11vh;
    display: grid;
    grid-template-columns: 25% 50% 25%;
    /* padding: 3%; */
    border-bottom: 1px solid #b8b8b86f;


    .img {
      width: 90%;
      border-radius: 20px;
      align-self: center;
    }

    .price {
      font-weight: 900;
    }

    .trash {
      display: flex;
      width: 100%;
      justify-content: space-between;
      align-items: center;
      img {
        width: 25%;
      }
    }

    .amount {
      display: flex;
      gap: 20px;
      align-items: center;
      justify-content: flex-end;

      .a {
      font-size: 16px;
      font-weight: 600;
    }

      p {
        font-weight: 900;
        font-size: 125%;
      }

      img {
        width: 20px;
      }
    }
`;

export function CardCart({ item, changeAmount }) {
  return (
    <Card>
      {/* <div className="img" style={{backgroundImage: `url(${item.photoUrl})`, backgroundPosition: "center", backgroundSize: "contain", backgroundRepeat: "no-repeat"}}></div> */}
      <img className="img" src={item.photoUrl} alt="" />
      <div className="info">
        <p>{item.name}</p>
        <p className="price">R${item.price.toFixed(2)}</p>
      </div>
      {/* <div className="trash"> */}
        <div className="amount">
          {item.amount > 1 ? <p onClick={()=> changeAmount(item.id, "sub")}>-</p> : <img onClick={()=> changeAmount(item.id, "sub")} src={trash} alt="" />}
          <p className="a">{item.amount}</p>
          <p onClick={()=> changeAmount(item.id, "sum")}>+</p>
        {/* <img src={trash} alt="" /> */}
        </div>
      {/* </div> */}
    </Card>
  )
}
