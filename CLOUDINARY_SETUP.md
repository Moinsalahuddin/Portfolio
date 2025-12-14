# ✅ Cloudinary & MongoDB Setup Complete!

## 🎉 What I've Done

1. ✅ **Created `.env` setup file** - `backend/create-env.bat` to automatically create your `.env` file
2. ✅ **Added Cloudinary support** - Image upload functionality for project images
3. ✅ **Updated MongoDB URI** - Your MongoDB Atlas connection string is configured
4. ✅ **Added upload API endpoints** - New routes for image management

## 📝 Step 1: Create .env File

Run this in the `backend` folder:
```cmd
cd backend
create-env.bat
```

Or manually create `backend/.env` with:
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

## 📦 Step 2: Install New Dependencies

```cmd
cd backend
npm install
```

This will install:
- `cloudinary` - For image storage and management
- `multer` - For handling file uploads

## 🖼️ New Image Upload API

### Upload Image
**POST** `/api/upload/image`
- Content-Type: `multipart/form-data`
- Field name: `image`
- Max file size: 5MB
- Allowed formats: jpg, jpeg, png, gif, webp

**Response:**
```json
{
  "message": "Image uploaded successfully",
  "imageUrl": "https://res.cloudinary.com/...",
  "publicId": "portfolio/projects/xyz123"
}
```

### Delete Image
**DELETE** `/api/upload/image/:publicId`

## 🚀 Next Steps

1. ✅ Create `.env` file (run `create-env.bat`)
2. ✅ Install dependencies: `npm install` (in backend folder)
3. ✅ Start backend: `npm run dev`
4. ✅ Start frontend: `npm start` (in frontend folder)

## 📌 Usage Example

### Upload Image (using Postman or similar):
```
POST http://localhost:5000/api/upload/image
Content-Type: multipart/form-data
Body: form-data
  - Key: image
  - Value: [select file]
```

### Use in Project:
When creating/updating a project, you can now include the `imageUrl` from the upload response:

```json
{
  "title": "My Project",
  "description": "Project description",
  "techStack": ["React", "Node.js"],
  "imageUrl": "https://res.cloudinary.com/drjfg1fzu/...",
  "githubUrl": "https://github.com/...",
  "featured": true
}
```

## ✅ Your MongoDB Atlas is Ready!

Your MongoDB connection string is configured:
- **Database**: `luxuryh203`
- **Cluster**: `cluster0.wtqcaao.mongodb.net`
- **Status**: Ready to use! 🎉

---

**Note**: Make sure your MongoDB Atlas IP whitelist includes your current IP address, or use `0.0.0.0/0` for development (not recommended for production).

