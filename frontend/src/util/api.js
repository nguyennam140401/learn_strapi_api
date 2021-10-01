import axios from 'axios'
const uri = 'http://localhost:1337'
export const getCategory = async () => {
    const res = await axios.get(`${uri}/categories`)
    return res.data
}
export const getCarousel = async () => {
    const res = await axios.get(`${uri}/carousels`)
    return res.data
}

export const getPost = async () => {
    const res = await axios.get(`${uri}/posts`)
    return res.data
}
export const getOnePost = async (id) => {
    const res = await axios.get(`${uri}/posts/${id}`)
    return res.data
}
