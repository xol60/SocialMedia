import React from "react";
import LogoSearch from "../Logo/LogoSearch";
import InfoCard from "../InfoCard/InfoCard";
import FollowedCard from "../FollowedCard/FollowedCard";
const ProfileLeft = () => {
    return (
        <div className="ProfileLeft">
            <LogoSearch />
            <InfoCard />
            <FollowedCard />
        </div>
    )
}
export default ProfileLeft