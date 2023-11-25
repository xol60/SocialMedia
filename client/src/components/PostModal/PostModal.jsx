import { Modal, useMantineTheme } from "@mantine/core";
function ProfileModal({ modalOpened, setModalOpened }) {
    const theme = useMantineTheme();
    return (
        <Modal>
            <button className="button infoButton" onClick={handleSubmit}>Update</button>

        </Modal >
    );
}

export default ProfileModal;