import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,

        },
        firstname: {
            type: String,
            required: true,
        },
        lastname: {
            type: String,
            required: true,
        },
        isAdmin: {
            type: Boolean,
            default: false,
        },
        profilePicture: {
            type: String,
            default: "https://firebasestorage.googleapis.com/v0/b/social-media-b3556.appspot.com/o/images%2Fj.jpg1f08f587-61b8-4537-9e69-4f40b734fda8?alt=media&token=917ef507-3e72-48a3-9bc3-cb21fac45305"

        },
        coverPicture: {
            type: String,
            default: "https://firebasestorage.googleapis.com/v0/b/social-media-b3556.appspot.com/o/images%2Fimage0.jpg10026719-ef71-49ff-994d-05e5e62789a9?alt=media&token=c50492b9-c283-4728-8274-fa36796d81cb"

        },
        about: {
            type: String,
            default: 'Nothing to write about myself'
        },
        livesIn: {
            type: String,
            default: 'Not in mars'
        },
        worksAt:
        {
            type: String,
            default: 'Universe?'
        }
        ,
        relationship: {
            type: String,
            default: 'With human?'
        },
        country: {
            type: String,
            default: 'Viet Nam'
        },
        followers: [],
        following: [],
    },
    { timestamps: true }
);

const UserModel = mongoose.model("Users", UserSchema);
export default UserModel;