import React from 'react'
import './Posts.css'
import { PostsData } from '../../Data/PostData'
import Post from '../Post/Post'
const Posts = () => {
    return (
        <div className="Posts">
            {PostsData.map((post) => {
                return <Post data={post} />
            })}
        </div>
    )
}

export default Posts