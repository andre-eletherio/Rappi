import { useParams } from 'react-router-dom'

export function ProductPage() {

    const param = useParams()
    return (
        <div>
            <p>{param.name}</p>
            <p>{param.description}</p>
            <p>{param.price}</p>
        </div>
    )
}
