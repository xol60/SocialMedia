


import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { getStorage, ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { auth } from '../config/firebase-config.js'
import { v4 } from 'uuid'
import dotenv from 'dotenv'
dotenv.config()


async function uploadImage({ file, quantity }) {
    const storage = getStorage();

    await signInWithEmailAndPassword(auth, process.env.FIREBASE_USER, process.env.FIREBASE_AUTH)

    if (quantity === 'single') {

        const fileName = 'images/' + file.originalname + v4()

        const storageRef = ref(storage, fileName)
        const metadata = {
            contentType: file.minetype,
        }
        const snapshot = await uploadBytesResumable(storageRef, file.buffer, metadata);
        //by using uploadBytesResumable we can control the progress of uploading like pause, resume, cancel

        // Grab the public url
        const downloadURL = await getDownloadURL(snapshot.ref);
        return downloadURL
    }

    if (quantity === 'multiple') {
        for (let i = 0; i < file.images.length; i++) {
            const dateTime = Date.now();
            const fileName = `images/${dateTime}`
            const storageRef = ref(storageFB, fileName)
            const metadata = {
                contentType: file.images[i].mimetype,
            }

            const saveImage = await Image.create({ imageUrl: fileName });
            file.item.imageId.push({ _id: saveImage._id });
            await file.item.save();

            await uploadBytesResumable(storageRef, file.images[i].buffer, metadata);

        }
        return
    }

}
export default uploadImage