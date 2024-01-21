import React, { useEffect, useState } from 'react'
import './Home.scss'
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
function Home() {
    const [products, setProducts] = useState([])
    const [def, setDef] = useState([])
    // const [search, setSearch] = useState([])

    const navigate = useNavigate();

    const handlDetail = (productsId) => {
        navigate(`/detail/${productsId}`)
    }

    useEffect(() => {
        axios.get("http://localhost:5050/products").then((res) => {
            setProducts(res.data);
            setDef(res.data)
        })

    }, [])
    const handleBaha = () => {
        const filter1 = [...products].sort((a, b) => b.price - a.price)
        setProducts(filter1)
    }
    const handleUcuz = () => {
        const filter2 = [...products].sort((a, b) => a.price - b.price)
        setProducts(filter2)
    }
    const defaultt = () => {
        setProducts(def)
    }
    return (
        <div className="mainHome">
            <Helmet>
                <title>Home</title>
            </Helmet>
            <div className="section1">
                <div className="title">
                    <div className="wel">
                        <h1>Welcome To EatWell</h1>
                    </div>
                    <div className="lore">
                        Come and eat well with our delicious & healthy foods.
                    </div>
                    <div className="butto">
                        <button className='wel'>Reservation</button>
                    </div>
                </div>
            </div>
            <div className="section2">
                <div className="left">
                    <div className="story">
                        OUR STORY
                    </div>
                    <div className="salam"><h1>WELCOME</h1></div>
                    <div className="desc">
                        <p>Far far away, behind the word mountains, far from the  <br />countries Vokalia and Consonantia, there live the blind texts. <br />
                            A small river named Duden flows by their place and supplies <br /> it with the necessary regelialia. It is a paradisematic country, <br /> in which roasted parts of sentences fly into your mouth. </p>
                        <div className="more">
                            <button>Learn More About Us</button>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <img src="https://preview.colorlib.com/theme/eatwell/images/about_img_1.jpg" alt="" />
                </div>
            </div>
            <div className="section3">
                <div className="basliq">
                    <div className="ou">OUR OFFERS</div>
                    <div className="our"><h1>Our Offer This Summer</h1></div>
                    <div className="lore">Far far away, behind the word mountains,<br /> far from the countries Vokalia and Consonantia, there live the blind texts.</div>
                </div>

                <div className="filterr">
                    <input type="text" placeholder='seacrh' />
                    <button onClick={handleBaha}>Expensive</button>
                    <button onClick={handleUcuz}>Cheap</button>
                    <button onClick={defaultt}>Default</button>
                </div>
                {/* onChange={(e) => { setSearch(e.target.value) }}  */}
                {/* .filter(elem => elem.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())) */}

                <div className="cardss">
                    {
                        products.map((elem, i) => (
                            <div className="kart" key={i}>
                                <div className="img">
                                    <img className='img' src={elem.img} alt="" />
                                </div>
                                <div className="alt">
                                    <div className="price">${elem.price}</div>
                                    <div className="name">{elem.name}</div>
                                    <div className="desc">{elem.title}</div>
                                </div>
                                <div className="delBut">
                                    <button onClick={() => {
                                        handlDetail(elem._id)
                                    }}>Detail</button>
                                </div>
                            </div>
                        ))
                    }



                </div>
            </div>
            <div className="section4">
                <div className="title4">
                    <div className="gal">
                        <h1>Gallery</h1>
                    </div>
                    <div className="lore4">
                        Far far away, behind the word mountains, far from the countries Vokalia
                    </div>
                </div>
                <div className="picture">
                    <div className="pic">
                        <img src="https://preview.colorlib.com/theme/eatwell/images/menu_3.jpg" alt="" />
                    </div>
                    <div className="pic">
                        <img src="https://preview.colorlib.com/theme/eatwell/images/menu_3.jpg" alt="" />
                    </div>
                    <div className="pic">
                        <img src="https://preview.colorlib.com/theme/eatwell/images/menu_3.jpg" alt="" />
                    </div>
                    <div className="pic">
                        <img src="https://preview.colorlib.com/theme/eatwell/images/menu_3.jpg" alt="" />
                    </div>
                    <div className="pic">
                        <img src="https://preview.colorlib.com/theme/eatwell/images/menu_3.jpg" alt="" />
                    </div>
                    <div className="pic">
                        <img src="https://preview.colorlib.com/theme/eatwell/images/menu_3.jpg" alt="" />
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Home