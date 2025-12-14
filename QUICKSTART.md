# Quick Start Guide

## 🚀 Get Started in 5 Minutes

### Prerequisites Check
- ✅ Node.js installed (v16+)
- ✅ MongoDB installed and running (or MongoDB Atlas account)

### Step 1: Backend Setup (2 minutes)

```bash
# Navigate to backend
cd backend

# Install dependencies
npm install

# Create .env file (copy from .env.example)
# Windows: copy .env.example .env
# Mac/Linux: cp .env.example .env

# Edit .env and set your MongoDB URI
# For local: mongodb://localhost:27017/portfolio_db
# For Atlas: mongodb+srv://user:pass@cluster.mongodb.net/portfolio_db

# Start the server
npm run dev
```

✅ Backend running on `http://localhost:5000`

### Step 2: Seed Database (Optional - 1 minute)

```bash
# In backend directory
npm run seed
```

This will populate your database with sample skills and projects.

### Step 3: Frontend Setup (2 minutes)

```bash
# Open new terminal, navigate to frontend
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

✅ Frontend running on `http://localhost:3000`

### Step 4: Open in Browser

Visit `http://localhost:3000` and explore your portfolio!

---

## 🐛 Common Issues

### MongoDB Connection Failed
- **Solution**: Make sure MongoDB is running
  - Windows: Check Services → MongoDB
  - Mac: `brew services start mongodb-community`
  - Linux: `sudo systemctl start mongod`

### Port Already in Use
- **Solution**: Change PORT in backend/.env file

### API Not Connecting
- **Solution**: 
  1. Verify backend is running on port 5000
  2. Check browser console for CORS errors
  3. Verify VITE_API_URL in frontend/.env (if set)

---

## 📝 Next Steps

1. **Customize Content**: Update pages with your information
2. **Add Projects**: Use the API or seed script to add more projects
3. **Deploy**: Follow README.md for Vercel deployment instructions

---

## 🎯 Test Your Setup

### Test Backend API
```bash
# Health check
curl http://localhost:5000/api/health

# Get projects
curl http://localhost:5000/api/projects

# Get skills
curl http://localhost:5000/api/skills
```

### Test Frontend
- Navigate to all pages
- Submit contact form
- Check browser console for errors

---

**Need Help?** Check the main README.md for detailed documentation.

