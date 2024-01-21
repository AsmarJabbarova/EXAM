import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './Detail.scss'

function Detail() {
    const [detail, setDetail] = useState([])
    // const navigate = useNavigate();
    let { productsId } = useParams()
    useEffect(() => {
        axios.get(`http://localhost:5050/products/${productsId}`).then((res) => {
            setDetail(res.data)
        })
    }, [])

    return (

        <>
            {
                <div className="kart"  >
                    <div className="img">
                        <img className='img' src={detail.img} alt="" />
                    </div>
                    <div className="alt">
                        <div className="price">{detail.price}</div>
                        <div className="name">{detail.name}</div>
                        <div className="desc">{detail.title}</div>
                    </div>
                    <div className="delBut">
                    </div>
                </div>
            }
        </>


    )
}

export default Detail