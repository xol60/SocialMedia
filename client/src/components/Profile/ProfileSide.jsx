import React from 'react'
import './ProfileSide.css'
import LogoSearch from '../Logo/LogoSearch'
import ProfileCard from '../ProfileCard/ProfileCard'
import FollowedCard from '../FollowedCard/FollowedCard'
const ProfileSide = () => {
    return (
        <div className="ProfileSide">
            <LogoSearch />
            <ProfileCard />
            <FollowedCard />
        </div>
    )
}
export default ProfileSide