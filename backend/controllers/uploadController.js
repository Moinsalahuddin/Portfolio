import { uploadToCloudinary } from '../config/cloudinary.js';

// Upload image to Cloudinary
export const uploadImage = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }

    // Upload buffer to Cloudinary
    const result = await uploadToCloudinary(req.file.buffer);
    
    res.status(200).json({
      message: 'Image uploaded successfully',
      imageUrl: result.secure_url,
      publicId: result.public_id,
    });
  } catch (error) {
    console.error('Upload error:', error);
    res.status(500).json({ message: 'Error uploading image', error: error.message });
  }
};

// Delete image from Cloudinary
export const deleteImage = async (req, res) => {
  try {
    const { publicId } = req.params;
    
    if (!publicId) {
      return res.status(400).json({ message: 'Public ID is required' });
    }

    // Extract public_id from full URL if needed
    const public_id = publicId.includes('/') 
      ? publicId.split('/').slice(-2).join('/').replace(/\.[^/.]+$/, '')
      : publicId;

    const result = await cloudinary.uploader.destroy(public_id);
    
    if (result.result === 'ok') {
      res.status(200).json({ message: 'Image deleted successfully', result });
    } else {
      res.status(404).json({ message: 'Image not found', result });
    }
  } catch (error) {
    console.error('Delete error:', error);
    res.status(500).json({ message: 'Error deleting image', error: error.message });
  }
};

