import React, { Fragment } from 'react'

import Carousel from 'react-bootstrap/Carousel'
import { useState } from 'react'
import { useEffect } from 'react'
import * as api from '../../util/api'
import CategoryBlog from '../../components/CategoryBlog/CategoryBlog'
import Featured from '../../components/Featured/Featured'
import Footer from '../../components/Footer/Footer'

const Home = () => {
    const [carouselState, setCarouselState] = useState([])
    const [categoryState, setCategoryState] = useState([])
    useEffect(async () => {
        try {
            const res = await api.getCarousel()
            const res2 = await api.getCategory()
            setCarouselState(res)
            setCategoryState(res2)
        } catch (error) {
            console.log(error)
        }
    }, [])
    return (
        <Fragment>
            <Carousel>
                {carouselState.map((item, idx) => {
                    return (
                        <Carousel.Item key={idx}>
                            <img
                                className="d-block w-100"
                                src={`http://localhost:1337${item.img[0].url}`}
                                alt="First slide"
                                height="500px"
                            />
                            <Carousel.Caption>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    )
                })}
            </Carousel>
            <Featured></Featured>
            {categoryState.map((item, idx) => {
                return <CategoryBlog key={idx} data={item}></CategoryBlog>
            })}
            <Footer></Footer>
        </Fragment>
    )
}

export default Home
