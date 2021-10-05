import React, { Fragment, useEffect, useState } from 'react'
import { getOneCategory } from '../../util/api'
import './Sidebar.scss'
import { Link } from 'react-router-dom'
const SideBar = ({ id }) => {
    const [postState, setPostState] = useState([])
    useEffect(async () => {
        try {
            const res = await getOneCategory(id)
            setPostState(res.posts)
            console.log(id, res.posts)
        } catch (error) {
            console.log(error)
        }
    }, [id])
    return (
        <Fragment>
            <div className="sidebar">
                <div className="h4">Bài viết cùng thể loại</div>
                <form>
                    <input
                        type="text"
                        placeholder="Tìm bài viết cùng thể loại"
                    />
                    <button>Tìm kiếm</button>
                </form>
                <ul>
                    {postState.length > 0
                        ? postState.slice(0, 4).map((item, idx) => {
                              return (
                                  <li>
                                      <Link to={`/blogDetail/${item.id}`}>
                                          <Fragment>
                                              <div className="img">
                                                  <img
                                                      src={`http://localhost:1337${item.image[0].url}`}
                                                      alt=""
                                                  />
                                              </div>
                                              <div className="sidebar_post_detail">
                                                  <p>{item.title}</p>
                                              </div>
                                          </Fragment>
                                      </Link>
                                  </li>
                              )
                          })
                        : 'Không có bài viết cùng loại'}
                </ul>
            </div>
        </Fragment>
    )
}

export default SideBar
