import React, { Fragment, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import * as api from '../../util/api'
import Navigation from '../../components/Navigation/Navigation'
const BlogDetail = () => {
    const { id } = useParams()
    const [postState, setPostState] = useState(null)
    useEffect(async () => {
        try {
            const res = await api.getOnePost(id)
            setPostState(res)
            console.log(postState)
        } catch (error) {
            console.log(error)
        }
    }, [id])
    return (
        <Fragment>
            <div className="post_detail">
                <Navigation></Navigation>
                <div className="contain">
                    {postState && (
                        <>
                            <h2>{postState.title}</h2>
                            <img
                                src={`http://localhost:1337${postState.image[0].url}`}
                                alt="anh chi tiet"
                            />
                            <div className="contain_deat">
                                {postState.description}
                            </div>
                        </>
                    )}
                </div>
            </div>
        </Fragment>
    )
}

export default BlogDetail
