import React from 'react'
import './Profile.css'
import ProfileLeft from '../../components/ProfileLeft/ProfileLeft'
import ProfileCenter from '../../components/ProfileCenter/ProfileCenter'
import RightSide from '../../components/RightSide/RightSide'
const Profile = () => {
    return (
        <div div className='Profile'>
            <ProfileLeft />
            <ProfileCenter />
            <RightSide />
        </div>
    )
}
export default Profile