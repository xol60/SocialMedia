import React, { useState } from 'react'
import './Post.css'
import Comment from '../../img/comment.png'
import Share from '../../img/share.png'
import Heart from '../../img/like.png'
import NotLike from '../../img/notlike.png'
import { useDispatch, useSelector } from 'react-redux'
import { likeDislikePost } from '../../store/actions'
const Post = ({ data, token, id }) => {

    const [isLiked, setIsLiked] = useState(data.likes.includes(id))
    const [len, setLen] = useState(data.likes.length)
    const dispatch = useDispatch()
    const statusChange = async () => {
        await dispatch(likeDislikePost({
            token,
            idPost: data._id,
            idUser: id,
            status: isLiked ? 'dislike' : 'like'
        }))
        isLiked ? setLen(len - 1) : setLen(len + 1)
        setIsLiked(!isLiked)
    }
    return (
        <div className='Post'>
            <img src={data.image} alt="" />


            <div className="PostStatus">
                <img src={isLiked ? Heart : NotLike} alt="" onClick={statusChange} />
                <img src={Comment} alt="" />
                <img src={Share} alt="" />
            </div>


            <span style={{ color: "var(--gray)", fontSize: '12px' }}>{len} likes</span>

            <div className="detail">

                <span> {data.desc}</span>
            </div>
        </div>
    )
}
export default Post