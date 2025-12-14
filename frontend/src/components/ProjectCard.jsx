const ProjectCard = ({ project }) => {
  return (
    <div className="card group hover:scale-105 transition-transform duration-300">
      {project.imageUrl && (
        <div className="mb-4 rounded-lg overflow-hidden">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </div>
      )}
      <h3 className="text-2xl font-bold text-gray-900 mb-3">{project.title}</h3>
      <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {project.techStack.map((tech, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex space-x-4">
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-600 hover:text-primary-700 font-semibold flex items-center space-x-1"
          >
            <span>GitHub</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        )}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-600 hover:text-primary-700 font-semibold flex items-center space-x-1"
          >
            <span>Live Demo</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;

