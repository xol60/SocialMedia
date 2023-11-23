import { Modal, useMantineTheme } from "@mantine/core";
import './ProfileModal.css'
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateUser } from "../../store/actions";
function ProfileModal({ modalOpened, setModalOpened }) {
    const theme = useMantineTheme();
    const { user, token } = useSelector(state => state.auth)
    const dispatch = useDispatch()
    const [data, setData] = useState({ ...user })
    const [preview, setPreview] = useState({
        profilePicture: user.profilePicture,
        coverPicture: user.coverPicture
    })
    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
        console.log(data)
    }
    const handleImageChange = (e) => {
        setPreview({
            ...preview,
            [e.target.name]: URL.createObjectURL(e.target.files[0])
        })
        setData({
            ...data,
            [e.target.name]: e.target.files[0]
        })
    }
    const handleSubmit = async () => {
        const form = new FormData()
        form.append('firstname', data.firstname)
        form.append('lastname', data.lastname)
        form.append('livesIn', data.livesIn)
        form.append('worksAt', data.worksAt)
        form.append('country', data.country)
        form.append('relationship', data.relationship)
        form.append('about', data.about)
        form.append('image', data.profilePicture)
        form.append('image', data.coverPicture)
        await dispatch(updateUser({ token, data: form }))
    }
    return (
        <Modal
            overlayColor={
                theme.colorScheme === "dark"
                    ? theme.colors.dark[9]
                    : theme.colors.gray[2]
            }
            overlayOpacity={0.55}
            overlayBlur={3}
            size="55%"
            opened={modalOpened}
            onClose={() => setModalOpened(false)}
        >
            <div className="infoForm">
                <div className="title">Your info</div>
                <div className="ProfileImages">
                    <img src={preview.coverPicture} />
                    <img src={preview.profilePicture} />
                </div>
                <div>
                    <input
                        type="text"
                        className="infoInput"
                        name="firstname"
                        placeholder="First Name"
                        onChange={handleChange}
                    />

                    <input
                        type="text"
                        className="infoInput"
                        name="lastname"
                        placeholder="Last Name"
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <input
                        type="text"
                        className="infoInput"
                        name="worksAt"
                        placeholder="Works at"
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <input
                        type="text"
                        className="infoInput"
                        name="livesIn"
                        placeholder="Lives in"
                        onChange={handleChange}
                    />

                    <input
                        type="text"
                        className="infoInput"
                        name="country"
                        placeholder="Country"
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <input
                        type="text"
                        className="infoInput"
                        placeholder="RelationShip Status"
                        name="relationship"
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <input
                        type="text"
                        className="infoInput"
                        placeholder="About"
                        name="about"
                        onChange={handleChange}
                    />
                </div>
                <div className="action-button">
                    <label className="button infoButton" htmlFor='profileImg'>Profile Image</label>
                    <input type="file" name='profilePicture' id='profileImg' hidden onChange={handleImageChange} />
                    <label className="button infoButton" htmlFor="coverImg" >Cover Image</label>
                    <input type="file" name="coverPicture" id='coverImg' hidden onChange={handleImageChange} />
                </div>

                <button className="button infoButton" onClick={handleSubmit}>Update</button>
            </div>
        </Modal>
    );
}

export default ProfileModal;