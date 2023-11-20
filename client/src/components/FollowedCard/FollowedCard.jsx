import React from 'react'
import img1 from "../../img/img1.png";
import img2 from "../../img/img2.png";
import img3 from "../../img/img3.png";
import img4 from "../../img/img4.jpg";
import './FollowedCard.css'
const FollowedCard = () => {
    return (
        <div className='FollowedCard'>
            <div className='title'>
                Who is following you?
            </div>
            <div className='followers'>
                <div className='follower'>
                    <img src={img1} alt="" className='followerImage' />
                    <div className="name">
                        <span>Henry Known</span>
                        <span>@4444444</span>
                    </div>
                    <button className='button fc-button'>
                        Follow
                    </button>
                </div>
                <div className='follower'>
                    <img src={img1} alt="" className='followerImage' />
                    <div className="name">
                        <span>Henry Known</span>
                        <span>@4444444</span>
                    </div>
                    <button className='button fc-button'>
                        Follow
                    </button>
                </div>
                <div className='follower'>
                    <img src={img1} alt="" className='followerImage' />
                    <div className="name">
                        <span>Henry Known</span>
                        <span>@4444444</span>
                    </div>
                    <button className='button fc-button'>
                        Follow
                    </button>
                </div>
            </div>
        </div>
    )
}
export default FollowedCard