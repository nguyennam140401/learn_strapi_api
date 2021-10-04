import React, { Fragment } from 'react'
import './BlogDetail.scss'
const BlogDetail = ({ data }) => {
    return (
        <Fragment>
            <div className="contain">
                {data && (
                    <>
                        <h2>{data.title}</h2>
                        <img
                            src={`http://localhost:1337${data.image[0].url}`}
                            alt="anh chi tiet"
                        />
                        <div className="contain_deat">{data.description}</div>
                    </>
                )}
            </div>
        </Fragment>
    )
}

export default BlogDetail
