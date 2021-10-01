import React, { Fragment, useEffect, useState } from 'react'
import './Navigation.scss'
import { Link } from 'react-router-dom'
import * as api from '../../util/api'
const Navigation = () => {
    const [categoryState, setCategoryState] = useState([])
    useEffect(async () => {
        const res = await api.getCategory()
        setCategoryState(res)
    }, [])
    return (
        <Fragment>
            <div className="navigation">
                <div className="logo">VanNam</div>
                <div className="nav_ul">
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/blog">News</Link>
                            {categoryState && (
                                <ul className="child">
                                    {categoryState.map((item, idx) => {
                                        return (
                                            <Fragment key={idx}>
                                                <li>
                                                    <Link
                                                        to={`/blog/${item.id}`}
                                                    >
                                                        {item.name}
                                                    </Link>
                                                </li>
                                            </Fragment>
                                        )
                                    })}
                                </ul>
                            )}
                        </li>
                        <li>
                            <Link to="/about">About Us</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </Fragment>
    )
}

export default Navigation
