import { useState, useEffect } from 'react';
import SectionTitle from '../components/SectionTitle';
import ProjectCard from '../components/ProjectCard';
import { getProjects } from '../services/api';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await getProjects();
      setProjects(response.data);
    } catch (error) {
      console.error('Error fetching projects:', error);
      // Fallback to default projects if API fails
      setProjects(getDefaultProjects());
    } finally {
      setLoading(false);
    }
  };

  const getDefaultProjects = () => {
    return [
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
  };

  if (loading) {
    return (
      <div className="min-h-screen section-container">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
          <p className="mt-4 text-gray-600">Loading projects...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen section-container">
      <SectionTitle 
        title="My Projects" 
        subtitle="A collection of projects I've worked on, showcasing my skills and expertise"
      />

      {projects.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-600 text-lg">No projects found. Check back later!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Projects;

