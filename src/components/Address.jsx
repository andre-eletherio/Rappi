import axios from "axios"
import { useEffect, useState } from "react"
import styled from "styled-components";
import { BASE_URL } from "../constants/BASE_URL"
import arrow from '../styles/img/arrow.png'

const Div = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 80%;
`;

const Img = styled.img`
    width: 3%;
    position: relative;
    top: 3px;
    left: 6px;
`;

export function Address({setShowAddress}) {
    const [profile, setProfile] = useState([])

    useEffect(() => {
        getAddress()
    })

    const getAddress = () => {
        axios.get(
            BASE_URL + "/profile/address", {
            headers: {
                auth: localStorage.getItem("token")
            }
        }
        ).then((res) => setProfile(res.data.address))
    }

    return (
        <Div onClick={()=>setShowAddress(true)}>
            <h1>{profile.city}</h1>
            <Img src={arrow} alt="" />
        </Div>
    )
}
