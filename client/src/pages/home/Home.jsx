import React from 'react'
import './Home.css'
import ProfileSide from '../../components/Profile/ProfileSide'
import PostSide from '../../components/PostSide/PostSide'
import RightSide from '../../components/RightSide/RightSide'
const Homepage = () => {
    return (
        <div className='Home'>
            <ProfileSide />
            <PostSide />
            <RightSide />
        </div>
    )
}
export default Homepage