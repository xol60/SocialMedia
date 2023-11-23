import React, { useEffect } from 'react'

import { getFollowing } from '../../services';
import { followUnfollowUser } from '../../store/actions'
import { useSelector, useDispatch } from 'react-redux';
import './FollowedCard.css'
const FollowedCard = () => {
    const [data, setData] = React.useState([])
    const dispatch = useDispatch()
    const { token, user } = useSelector((state) => state.auth)
    const fetchFollowing = async (token) => {
        const res = await getFollowing(token)
        const { data } = res
        setData(data)
    }
    useEffect(() => {
        fetchFollowing(token)
    }, [])
    const setStateChange = async (id, status) => {
        await dispatch(followUnfollowUser({ token, id, status }))

        await fetchFollowing(token)
    }

    return (
        <div className='FollowedCard'>
            <div className='title'>
                Who is following you?
            </div>
            <div className='followers'>

                {data.map((user) => (
                    <div className='follower'>
                        <img src={user.profilePicture} alt="" className='followerImage' />
                        <div className="name">
                            <span>{user.firstname + ' ' + user.lastname}</span>
                            <span>{user.username}</span>
                        </div>

                        {user.follower ? (
                            <button className='button unfollow' onClick={() => setStateChange(user._id, 'unfollow')}>
                                Unfollow
                            </button>
                        ) : (
                            <button className='button ' onClick={() => setStateChange(user._id, 'follow')}>
                                Follow
                            </button>
                        )}

                    </div>
                ))}

            </div>
        </div>
    )
}
export default FollowedCard