import React, { Fragment, useEffect, useState } from 'react'
import BlogItem from '../BlogItem/BlogItem'
import './ListBlog.scss'
import * as api from '../../util/api'
const ListBlog = () => {
    const [postState, setPostState] = useState([])
    useEffect(async () => {
        try {
            const res = await api.getPost()
            console.log(res)
            setPostState(res)
        } catch (error) {
            console.log(error)
        }
    }, [])
    return (
        <Fragment>
            <div className="listBlog">
                {postState.map((item, idx) => {
                    return <BlogItem key={idx} data={item}></BlogItem>
                })}
            </div>
        </Fragment>
    )
}

export default ListBlog
