# Setup Instructions - Fix Installation Issues

## 🔧 Problem: Dependencies Not Installed

You need to install dependencies in both `backend/` and `frontend/` directories.

## ✅ Solution: Install Dependencies

### Option 1: Using Command Prompt (Recommended for Windows)

Open **Command Prompt** (not PowerShell) and run:

#### Step 1: Install Backend Dependencies
```cmd
cd C:\Users\TECH FEVER\Desktop\PortForil\backend
npm install
```

#### Step 2: Install Frontend Dependencies
```cmd
cd C:\Users\TECH FEVER\Desktop\PortForil\frontend
npm install
```

### Option 2: Fix PowerShell Execution Policy (If you prefer PowerShell)

1. Open PowerShell as **Administrator**
2. Run this command to allow scripts:
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```
3. Then run the npm install commands in regular PowerShell

### Option 3: Use Git Bash or WSL

If you have Git Bash or WSL installed, you can use:
```bash
cd backend && npm install
cd ../frontend && npm install
```

---

## 🚀 After Installation, Start the Servers

### Start Backend (Terminal 1)
```cmd
cd C:\Users\TECH FEVER\Desktop\PortForil\backend
npm run dev
```

### Start Frontend (Terminal 2 - New Window)
```cmd
cd C:\Users\TECH FEVER\Desktop\PortForil\frontend
npm start
```
or
```cmd
npm run dev
```

---

## 📝 Quick Checklist

- [ ] Install backend dependencies: `cd backend && npm install`
- [ ] Install frontend dependencies: `cd frontend && npm install`
- [ ] Create `.env` file in `backend/` folder (copy from `.env.example`)
- [ ] Make sure MongoDB is running
- [ ] Start backend: `npm run dev` (in backend folder)
- [ ] Start frontend: `npm start` (in frontend folder)

---

## 🐛 If You Still Get Errors

### Error: "nodemon is not recognized"
- **Solution**: Make sure you ran `npm install` in the backend folder

### Error: "Cannot find package 'express'"
- **Solution**: Run `npm install` in the backend folder

### Error: "Missing script: start" (Frontend)
- **Solution**: Use `npm run dev` or `npm start` (I've added the start script)

### Error: PowerShell execution policy
- **Solution**: Use Command Prompt instead, or fix PowerShell policy (see Option 2 above)

---

## 💡 Pro Tip

You can also use VS Code's integrated terminal:
1. Open VS Code in the project folder
2. Open terminal (Ctrl + `)
3. Split terminal (Ctrl + Shift + 5)
4. Run backend in one, frontend in the other

