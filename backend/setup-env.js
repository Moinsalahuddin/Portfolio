import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const envContent = `PORT=5000
MONGODB_URI=mongodb+srv://luxuryhotel:luxuryhotel@cluster0.wtqcaao.mongodb.net/luxuryh203?retryWrites=true&w=majority
NODE_ENV=development

# Cloudinary Configuration
CLOUDINARY_CLOUD_NAME=drjfg1fzu
CLOUDINARY_API_KEY=725743976961511
CLOUDINARY_API_SECRET=pqLwR6aFUnb5FtCbl8x7vDEDxr4
CLOUDINARY_URL=cloudinary://725743976961511:pqLwR6aFUnb5FtCbl8x7vDEDxr4@drjfg1fzu
`;

const envPath = path.join(__dirname, '.env');

try {
  // Check if .env already exists
  if (fs.existsSync(envPath)) {
    console.log('⚠️  .env file already exists!');
    console.log('Do you want to overwrite it? (This script will create it anyway)');
  }
  
  // Write .env file
  fs.writeFileSync(envPath, envContent, 'utf8');
  console.log('✅ .env file created successfully!');
  console.log('📁 Location:', envPath);
  console.log('\n📝 Contents:');
  console.log(envContent);
} catch (error) {
  console.error('❌ Error creating .env file:', error.message);
  process.exit(1);
}

