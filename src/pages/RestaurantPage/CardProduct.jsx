import styled from "styled-components"

const Card = styled.section`
    width: 100%;
    height: auto;
    border-bottom: 1px solid #b8b8b8;
    display: grid;
    grid-template-columns: 70% 30%;

    div {
        padding: 10px;
        display: flex;
        flex-direction: column;
        gap: 8px;

        .name {
            font-size: 18px;
        }

        .description {
            font-family: Roboto;
            font-size: 15px;
            letter-spacing: -0.34px;
            color: #b8b8b8;
        }

        .price {
            font-size: 15px;
            font-weight: 900;
            margin-top: 10px;
            margin-bottom: 10px;
        }
    }

    section {
        border-radius: 20px;
        margin-bottom: 10px;
    }
`;

export function CardProduct({ item, setProduct, setShow }) {

    const seeDetails = (item) => {
        setShow(true)
        setProduct(item)
    }

    return (
        <Card onClick={()=>seeDetails(item)}>
            <div>
                <p className="name">{item.name}</p>
                <p className="description">{item.description}</p>
                <p className="price">R${item.price.toFixed(2)}</p>
            </div>
            <section style={{ backgroundImage: `url(${item.photoUrl})`, backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat" }} />
        </Card>
    )
}
