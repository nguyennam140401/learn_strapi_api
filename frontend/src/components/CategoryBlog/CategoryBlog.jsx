import React, { Fragment } from 'react'
import './CategoryBlog.scss'
const CategoryBlog = ({ data }) => {
    return (
        <Fragment>
            <div className="category_blog">
                <h2>{data.name}</h2>
                {}
            </div>
        </Fragment>
    )
}

export default CategoryBlog
