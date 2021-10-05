import React, { Fragment } from 'react'
import BlogItem from '../BlogItem/BlogItem'
import './ListBlog.scss'

const ListBlog = ({ data }) => {
    return (
        <Fragment>
            <div className="listBlog">
                {data.map((item, idx) => {
                    return <BlogItem key={idx} data={item}></BlogItem>
                })}
            </div>
        </Fragment>
    )
}

export default ListBlog
