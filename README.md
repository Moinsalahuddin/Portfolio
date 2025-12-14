# Portfolio Website - Moin Uddin

A complete professional portfolio website built with React (Vite) and Node.js (Express), featuring a modern UI, RESTful API, and MongoDB integration.

## 🚀 Tech Stack

### Frontend
- **React 18** with Vite
- **React Router DOM** for navigation
- **Tailwind CSS** for styling
- **Axios** for API calls

### Backend
- **Node.js** with Express.js
- **MongoDB** with Mongoose
- **RESTful API** architecture
- **dotenv** for environment variables

## 📁 Project Structure

```
PortForil/
├── frontend/              # React frontend application
│   ├── src/
│   │   ├── components/    # Reusable components
│   │   ├── pages/         # Page components
│   │   ├── routes/        # Routing configuration
│   │   ├── services/      # API service layer
│   │   └── styles/        # Global styles
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
│
└── backend/               # Node.js backend API
    ├── config/           # Database configuration
    ├── controllers/      # Route controllers
    ├── models/           # MongoDB models
    ├── routes/           # API routes
    ├── server.js         # Entry point
    └── package.json
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or MongoDB Atlas)
- npm or yarn

### Step 1: Clone the Repository
```bash
git clone <repository-url>
cd PortForil
```

### Step 2: Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the `backend/` directory:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/portfolio_db
NODE_ENV=development
```

**For MongoDB Atlas (Cloud):**
```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/portfolio_db?retryWrites=true&w=majority
```

4. Start MongoDB (if using local MongoDB):
   - **Windows**: Make sure MongoDB service is running
   - **Mac/Linux**: `sudo systemctl start mongod` or `brew services start mongodb-community`

5. Run the backend server:
```bash
# Development mode (with nodemon)
npm run dev

# Production mode
npm start
```

The backend server will run on `http://localhost:5000`

### Step 3: Frontend Setup

1. Open a new terminal and navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the `frontend/` directory (optional, for production):
```env
VITE_API_URL=http://localhost:5000/api
```

4. Start the development server:
```bash
npm run dev
```

The frontend will run on `http://localhost:3000`

### Step 4: Seed Initial Data (Optional)

You can seed the database with initial data using MongoDB Compass, MongoDB Shell, or a script. Here's an example using MongoDB Shell:

```javascript
// Connect to MongoDB
use portfolio_db

// Insert Skills
db.skills.insertMany([
  { name: 'JavaScript', category: 'Programming', icon: '⚡' },
  { name: 'PHP', category: 'Programming', icon: '🐘' },
  { name: 'Dart', category: 'Programming', icon: '🎯' },
  { name: 'C#', category: 'Programming', icon: '🔷' },
  { name: 'Laravel', category: 'Frameworks', icon: '🔴' },
  { name: 'Flutter', category: 'Frameworks', icon: '📱' },
  { name: 'ASP.NET MVC', category: 'Frameworks', icon: '🌐' },
  { name: 'Bootstrap', category: 'Frameworks', icon: '🎨' },
  { name: 'MySQL', category: 'Databases', icon: '🗄️' },
  { name: 'SQL Server', category: 'Databases', icon: '💾' },
  { name: 'MongoDB', category: 'Databases', icon: '🍃' },
  { name: 'Git', category: 'Tools', icon: '📦' },
  { name: 'Visual Studio', category: 'Tools', icon: '💻' },
  { name: 'VS Code', category: 'Tools', icon: '🔧' }
])

// Insert Projects
db.projects.insertMany([
  {
    title: 'Hospital Organization App – Tabib',
    description: 'A comprehensive hospital management mobile application built with Flutter and Firebase.',
    techStack: ['Flutter', 'Dart', 'Firebase', 'Firestore'],
    githubUrl: 'https://github.com/Moinsalahuddin',
    featured: true
  },
  {
    title: 'City Guide App',
    description: 'A location-based mobile application with integrated Google Maps.',
    techStack: ['Flutter', 'Dart', 'Google Maps API', 'Firebase'],
    githubUrl: 'https://github.com/Moinsalahuddin',
    featured: true
  },
  {
    title: 'Saloon Management System',
    description: 'A complete salon management system built with PHP and MySQL.',
    techStack: ['PHP', 'MySQL', 'Bootstrap', 'JavaScript'],
    githubUrl: 'https://github.com/Moinsalahuddin',
    featured: false
  },
  {
    title: 'Musical Website',
    description: 'A responsive music website with modern UI/UX design.',
    techStack: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    githubUrl: 'https://github.com/Moinsalahuddin',
    featured: false
  },
  {
    title: 'Online Auction System',
    description: 'An enterprise-level online auction platform built with ASP.NET MVC.',
    techStack: ['ASP.NET MVC', 'C#', 'SQL Server', 'Bootstrap'],
    githubUrl: 'https://github.com/Moinsalahuddin',
    featured: true
  }
])
```

## 📝 API Endpoints

### Skills
- `GET /api/skills` - Get all skills
- `GET /api/skills/category/:category` - Get skills by category
- `POST /api/skills` - Create a new skill

### Projects
- `GET /api/projects` - Get all projects
- `GET /api/projects/featured` - Get featured projects
- `GET /api/projects/:id` - Get project by ID
- `POST /api/projects` - Create a new project
- `PUT /api/projects/:id` - Update a project
- `DELETE /api/projects/:id` - Delete a project

### Contact
- `GET /api/contact` - Get all messages
- `POST /api/contact` - Send a message
- `GET /api/contact/:id` - Get message by ID
- `PUT /api/contact/:id/read` - Mark message as read

### Health Check
- `GET /api/health` - Check API status

## 🚀 Deployment

### Frontend Deployment (Vercel)

1. **Build the frontend:**
```bash
cd frontend
npm run build
```

2. **Deploy to Vercel:**
   - Install Vercel CLI: `npm i -g vercel`
   - Login: `vercel login`
   - Deploy: `vercel`
   - Or use Vercel Dashboard:
     - Go to [vercel.com](https://vercel.com)
     - Import your repository
     - Set root directory to `frontend`
     - Add environment variable: `VITE_API_URL` = your backend API URL
     - Deploy

3. **Environment Variables in Vercel:**
   - Go to Project Settings → Environment Variables
   - Add: `VITE_API_URL` = `https://your-backend-api.vercel.app/api`

### Backend Deployment (Vercel)

1. **Create `vercel.json` in backend directory:**
```json
{
  "version": 2,
  "builds": [
    {
      "src": "server.js",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "server.js"
    }
  ],
  "env": {
    "MONGODB_URI": "@mongodb_uri",
    "NODE_ENV": "production"
  }
}
```

2. **Deploy to Vercel:**
   - Install Vercel CLI: `npm i -g vercel`
   - Navigate to backend: `cd backend`
   - Deploy: `vercel`
   - Or use Vercel Dashboard:
     - Import repository
     - Set root directory to `backend`
     - Add environment variables:
       - `MONGODB_URI` = your MongoDB connection string
       - `NODE_ENV` = `production`
     - Deploy

3. **Update Frontend API URL:**
   - After backend deployment, update `VITE_API_URL` in frontend Vercel settings to point to your deployed backend URL

### Alternative: MongoDB Atlas Setup

1. Create a MongoDB Atlas account
2. Create a new cluster
3. Get connection string
4. Add your IP to whitelist
5. Create a database user
6. Update `MONGODB_URI` in backend `.env` or Vercel environment variables

## 🧪 Testing

### Test Backend API
```bash
# Health check
curl http://localhost:5000/api/health

# Get all projects
curl http://localhost:5000/api/projects

# Get all skills
curl http://localhost:5000/api/skills
```

### Test Frontend
- Open `http://localhost:3000` in your browser
- Navigate through all pages
- Test contact form submission
- Verify API integration

## 📱 Features

- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Modern UI with Tailwind CSS
- ✅ Dynamic project listing from MongoDB
- ✅ Skills categorization
- ✅ Contact form with backend storage
- ✅ Smooth navigation with React Router
- ✅ RESTful API architecture
- ✅ Error handling and loading states

## 🐛 Troubleshooting

### Backend Issues

**MongoDB Connection Error:**
- Ensure MongoDB is running
- Check `MONGODB_URI` in `.env` file
- Verify MongoDB connection string format

**Port Already in Use:**
- Change `PORT` in `.env` file
- Or kill the process using the port

### Frontend Issues

**API Connection Error:**
- Verify backend is running
- Check `VITE_API_URL` in `.env`
- Ensure CORS is enabled in backend

**Build Errors:**
- Delete `node_modules` and `package-lock.json`
- Run `npm install` again
- Clear Vite cache: `rm -rf node_modules/.vite`

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Moin Uddin**
- Email: Moinsalahuddin334@gmail.com
- Phone: +92 314 2131398
- GitHub: [@Moinsalahuddin](https://github.com/Moinsalahuddin)
- Location: Lasbela Football Ground, Karachi, Pakistan

## 🙏 Acknowledgments

- React Team
- Vite Team
- Tailwind CSS
- MongoDB
- Express.js

---

**Note:** Make sure to update the MongoDB connection string and API URLs according to your deployment environment.

"# Portfolio" 
