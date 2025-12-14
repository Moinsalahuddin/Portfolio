import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Skill from '../models/Skill.js';
import Project from '../models/Project.js';
import connectDB from '../config/db.js';

dotenv.config();

const seedData = async () => {
  try {
    // Connect to database
    await connectDB();

    // Clear existing data
    await Skill.deleteMany({});
    await Project.deleteMany({});

    // Seed Skills
    const skills = [
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
      { name: 'VS Code', category: 'Tools', icon: '🔧' },
    ];

    const insertedSkills = await Skill.insertMany(skills);
    console.log(`✅ Inserted ${insertedSkills.length} skills`);

    // Seed Projects
    const projects = [
      {
        title: 'Hospital Organization App – Tabib',
        description: 'A comprehensive hospital management mobile application built with Flutter and Firebase. Features include patient management, appointment scheduling, and real-time data synchronization.',
        techStack: ['Flutter', 'Dart', 'Firebase', 'Firestore'],
        githubUrl: 'https://github.com/Moinsalahuddin',
        featured: true
      },
      {
        title: 'City Guide App',
        description: 'A location-based mobile application that helps users explore cities with integrated Google Maps. Provides information about nearby places, restaurants, and attractions.',
        techStack: ['Flutter', 'Dart', 'Google Maps API', 'Firebase'],
        githubUrl: 'https://github.com/Moinsalahuddin',
        featured: true
      },
      {
        title: 'Saloon Management System',
        description: 'A complete salon management system built with PHP and MySQL. Features include appointment booking, customer management, staff scheduling, and billing.',
        techStack: ['PHP', 'MySQL', 'Bootstrap', 'JavaScript'],
        githubUrl: 'https://github.com/Moinsalahuddin',
        featured: false
      },
      {
        title: 'Musical Website',
        description: 'A responsive music website with modern UI/UX design. Features include music player, playlist management, and user-friendly interface built with vanilla JavaScript.',
        techStack: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
        githubUrl: 'https://github.com/Moinsalahuddin',
        featured: false
      },
      {
        title: 'Online Auction System',
        description: 'An enterprise-level online auction platform built with ASP.NET MVC and SQL Server. Features include user authentication, bidding system, payment integration, and admin dashboard.',
        techStack: ['ASP.NET MVC', 'C#', 'SQL Server', 'Bootstrap'],
        githubUrl: 'https://github.com/Moinsalahuddin',
        featured: true
      },
    ];

    const insertedProjects = await Project.insertMany(projects);
    console.log(`✅ Inserted ${insertedProjects.length} projects`);

    console.log('✅ Database seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding database:', error);
    process.exit(1);
  }
};

seedData();

