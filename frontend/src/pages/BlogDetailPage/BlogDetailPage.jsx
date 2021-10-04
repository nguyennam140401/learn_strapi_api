import React, { Fragment, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import * as api from '../../util/api'
import Navigation from '../../components/Navigation/Navigation'
import './BlogDetailPage.scss'
import BlogDetail from '../../components/BlogDetail/BlogDetail'
import SideBar from '../../components/SideBar/SideBar'
const BlogDetailPage = () => {
    const { id } = useParams()
    const [postState, setPostState] = useState(null)
    useEffect(async () => {
        try {
            const res = await api.getOnePost(id)
            setPostState(res)
            console.log(res)
        } catch (error) {
            console.log(error)
        }
    }, [id])
    return (
        <Fragment>
            <div className="post_detail">
                <Navigation></Navigation>
                <div className="detail">
                    <BlogDetail data={postState}></BlogDetail>
                    <SideBar id={postState.category.id}></SideBar>
                </div>
            </div>
        </Fragment>
    )
}

export default BlogDetailPage
