@echo off
echo ========================================
echo Portfolio Website - Installation Script
echo ========================================
echo.

echo [1/3] Installing Backend Dependencies...
cd backend
call npm install
if %errorlevel% neq 0 (
    echo ERROR: Backend installation failed!
    pause
    exit /b 1
)
echo Backend dependencies installed successfully!
echo.

echo [2/3] Installing Frontend Dependencies...
cd ..\frontend
call npm install
if %errorlevel% neq 0 (
    echo ERROR: Frontend installation failed!
    pause
    exit /b 1
)
echo Frontend dependencies installed successfully!
echo.

echo [3/3] Checking for .env file...
cd ..\backend
if not exist .env (
    echo WARNING: .env file not found!
    echo Please create .env file in backend folder with:
    echo PORT=5000
    echo MONGODB_URI=mongodb://localhost:27017/portfolio_db
    echo NODE_ENV=development
) else (
    echo .env file found!
)
echo.

echo ========================================
echo Installation Complete!
echo ========================================
echo.
echo Next Steps:
echo 1. Make sure MongoDB is running
echo 2. Start backend: cd backend ^&^& npm run dev
echo 3. Start frontend: cd frontend ^&^& npm start
echo.
pause

