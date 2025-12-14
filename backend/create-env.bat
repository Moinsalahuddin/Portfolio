@echo off
echo Creating .env file with your credentials...
(
echo PORT=5000
echo MONGODB_URI=mongodb+srv://luxuryhotel:luxuryhotel@cluster0.wtqcaao.mongodb.net/luxuryh203?retryWrites=true^&w=majority
echo NODE_ENV=development
echo.
echo # Cloudinary Configuration
echo CLOUDINARY_CLOUD_NAME=drjfg1fzu
echo CLOUDINARY_API_KEY=725743976961511
echo CLOUDINARY_API_SECRET=pqLwR6aFUnb5FtCbl8x7vDEDxr4
echo CLOUDINARY_URL=cloudinary://725743976961511:pqLwR6aFUnb5FtCbl8x7vDEDxr4@drjfg1fzu
) > .env
echo .env file created successfully!
pause

