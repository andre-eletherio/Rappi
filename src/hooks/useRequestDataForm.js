import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from '../constants/BASE_URL'

export function useRequestDataForm(url, form) {
    const [data, setData] = useState()
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState()

    useEffect(() => {
        setIsLoading(true)
        axios.get(
            BASE_URL + url, form
        ).then((res) => {
            setIsLoading(false)
            setData(res.data)
        }).catch((err) => {
            setIsLoading(false)
            setError(err.response)
        })
    }, [])

    return { data, isLoading, error };
}
