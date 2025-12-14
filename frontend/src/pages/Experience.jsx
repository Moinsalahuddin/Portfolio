import SectionTitle from '../components/SectionTitle';

const Experience = () => {
  const experiences = [
    {
      title: 'Mobile App Developer',
      type: 'Freelance / Personal Projects',
      period: '2025 - Present',
      status: 'Current',
      description: 'Developing mobile applications using Flutter and Dart, focusing on creating user-friendly and performant cross-platform solutions.',
      achievements: [
        'Built Hospital Organization App (Tabib) using Flutter and Firebase',
        'Developed City Guide App with Google Maps integration',
        'Implemented Firebase Authentication, Firestore, and Realtime Database',
        'Created responsive and intuitive user interfaces'
      ],
      technologies: ['Flutter', 'Dart', 'Firebase', 'Google Maps API']
    },
  ];

  return (
    <div className="min-h-screen section-container">
      <SectionTitle 
        title="Experience" 
        subtitle="My professional journey and projects"
      />

      <div className="max-w-4xl mx-auto">
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary-200"></div>

          {experiences.map((exp, index) => (
            <div key={index} className="relative mb-12">
              {/* Timeline Dot */}
              <div className="absolute left-6 w-4 h-4 bg-primary-600 rounded-full -translate-y-1 z-10"></div>

              {/* Content Card */}
              <div className="ml-16">
                <div className="card">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-1">{exp.title}</h3>
                      <p className="text-xl text-primary-600 font-semibold mb-2">{exp.type}</p>
                    </div>
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-semibold">
                      {exp.status}
                    </span>
                  </div>

                  <p className="text-gray-600 mb-4 font-medium">{exp.period}</p>
                  <p className="text-gray-700 mb-4">{exp.description}</p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Achievements:</h4>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx}>{achievement}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="card mt-8 bg-primary-50">
          <h3 className="text-xl font-bold text-gray-900 mb-3">Freelance & Personal Projects</h3>
          <p className="text-gray-700">
            I have been actively working on various freelance and personal projects, gaining hands-on experience 
            in mobile app development, web development, and database management. These projects have helped me 
            develop strong problem-solving skills and a deep understanding of modern development practices.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experience;

