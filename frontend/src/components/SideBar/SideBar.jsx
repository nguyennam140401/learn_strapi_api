import React, { Fragment, useEffect, useState } from 'react'
import { getOneCategory } from '../../util/api'
const SideBar = ({ id }) => {
    const [postState, setPostState] = useState([])
    useEffect(async () => {
        try {
            const res = await getOneCategory(id)
            setPostState(res)
        } catch (error) {
            console.log(error)
        }
    }, [id])
    return (
        <Fragment>
            <div className="sidebar">
                <div className="h4">Bài viết cùng thể loại</div>
                <ul></ul>
            </div>
        </Fragment>
    )
}

export default SideBar
