
import multer from "multer";
import path from "path";
import fs from 'fs'
const uploadMultiple = multer({
    storage: multer.memoryStorage(),
    limits: { fileSize: 10000000 },
}).array("image", 12);

const upload = multer({
    storage: multer.memoryStorage(),
    limits: { fileSize: 10000000 },
}).single("image");


export { uploadMultiple, upload };