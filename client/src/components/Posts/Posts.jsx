import React, { useEffect } from 'react'
import './Posts.css'
import { useSelector, useDispatch } from 'react-redux'
import Post from '../Post/Post'
import { getPostsTimeline } from '../../store/actions'
const Posts = () => {
    const posts = useSelector(state => state.post.posts)
    const { token, user } = useSelector(state => state.auth)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getPostsTimeline(token))
    }, [])

    return (
        <div className="Posts">
            {posts.map((post) => {
                return <Post data={post} token={token} id={user._id} />
            })}
        </div>
    )
}

export default Posts