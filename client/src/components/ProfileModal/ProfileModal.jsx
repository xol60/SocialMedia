import { Modal, useMantineTheme } from "@mantine/core";
import './ProfileModal.css'
function ProfileModal({ modalOpened, setModalOpened }) {
    const theme = useMantineTheme();

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

                <div>
                    <input
                        type="text"
                        className="infoInput"
                        name="FirstName"
                        placeholder="First Name"
                    />

                    <input
                        type="text"
                        className="infoInput"
                        name="LastName"
                        placeholder="Last Name"
                    />
                </div>

                <div>
                    <input
                        type="text"
                        className="infoInput"
                        name="worksAT"
                        placeholder="Works at"
                    />
                </div>

                <div>
                    <input
                        type="text"
                        className="infoInput"
                        name="livesIN"
                        placeholder="LIves in"
                    />

                    <input
                        type="text"
                        className="infoInput"
                        name="Country"
                        placeholder="Country"
                    />
                </div>

                <div>
                    <input
                        type="text"
                        className="infoInput"
                        placeholder="RelationShip Status"
                    />
                </div>


                <div className="action-button">
                    <label className="button infoButton" htmlFor='profileImg'>Profile Image</label>
                    <input type="file" name='profileImg' id='profileImg' hidden />
                    <label className="button infoButton" htmlFor="coverImg" >Cover Image</label>
                    <input type="file" name="coverImg" id='coverImg' hidden />
                </div>

                <button className="button infoButton">Update</button>
            </div>
        </Modal>
    );
}

export default ProfileModal;