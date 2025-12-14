import express from 'express';
import { uploadImage, deleteImage } from '../controllers/uploadController.js';
import { upload } from '../config/cloudinary.js';

const router = express.Router();

// Upload single image
router.post('/image', upload.single('image'), uploadImage);

// Delete image
router.delete('/image/:publicId', deleteImage);

export default router;

