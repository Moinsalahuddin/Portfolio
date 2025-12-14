# Environment Variables Setup

## ✅ Your Credentials Have Been Configured

I've created a batch file to automatically create your `.env` file with your MongoDB and Cloudinary credentials.

## 🚀 Quick Setup

### Option 1: Use the Batch File (Easiest)
1. Navigate to the `backend` folder
2. Double-click `create-env.bat`
3. This will create the `.env` file automatically

### Option 2: Manual Setup
Create a file named `.env` in the `backend/` folder with this content:

```env
PORT=5000
MONGODB_URI=mongodb+srv://luxuryhotel:luxuryhotel@cluster0.wtqcaao.mongodb.net/luxuryh203?retryWrites=true&w=majority
NODE_ENV=development

# Cloudinary Configuration
CLOUDINARY_CLOUD_NAME=drjfg1fzu
CLOUDINARY_API_KEY=725743976961511
CLOUDINARY_API_SECRET=pqLwR6aFUnb5FtCbl8x7vDEDxr4
CLOUDINARY_URL=cloudinary://725743976961511:pqLwR6aFUnb5FtCbl8x7vDEDxr4@drjfg1fzu
```

## 📦 New Dependencies Added

I've added Cloudinary support for image uploads. After creating the `.env` file, run:

```cmd
cd backend
npm install
```

This will install:
- `cloudinary` - For image storage
- `multer` - For file uploads
- `multer-storage-cloudinary` - Cloudinary storage adapter

## 🖼️ Image Upload API

New endpoint available:
- **POST** `/api/upload/image` - Upload project images
- **DELETE** `/api/upload/image/:publicId` - Delete images

## ✅ Next Steps

1. ✅ Create `.env` file (use `create-env.bat` or manual)
2. ✅ Install new dependencies: `npm install` (in backend folder)
3. ✅ Start backend: `npm run dev`
4. ✅ Start frontend: `npm start` (in frontend folder)

Your MongoDB Atlas connection is ready! 🎉

