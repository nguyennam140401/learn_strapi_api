import React, { Fragment, useState, useEffect } from 'react'
import Navigation from '../../components/Navigation/Navigation'
import { getOneCategory } from '../../util/api'
import { useParams } from 'react-router'
import ListBlog from '../../components/ListBlog/ListBlog'
const CategoryBlogPage = () => {
    const { id } = useParams()
    const [postState, setPostState] = useState([])
    useEffect(async () => {
        try {
            const res = await getOneCategory(id)
            setPostState(res.posts)
        } catch (error) {
            console.log(error)
        }
    }, [id])
    return (
        <Fragment>
            <Navigation></Navigation>
            <ListBlog data={postState}></ListBlog>
        </Fragment>
    )
}

export default CategoryBlogPage