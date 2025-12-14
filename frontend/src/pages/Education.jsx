import SectionTitle from '../components/SectionTitle';

const Education = () => {
  const education = [
    {
      degree: 'Diploma in Software Engineering',
      institution: 'Aptech Pakistan',
      period: 'Present',
      status: 'Ongoing',
      description: 'Pursuing advanced software engineering concepts and practices.',
      icon: '🎓'
    },
    {
      degree: 'Intermediate (Computer Science)',
      institution: 'Adamjee Govt. Science College',
      period: '2023–2025',
      status: 'Completed',
      description: 'Completed intermediate education with focus on computer science fundamentals.',
      icon: '📚'
    },
    {
      degree: 'Matriculation (Computer Science)',
      institution: 'Jamiatul Qurra Academy',
      period: 'Completed',
      status: 'Completed',
      description: 'Foundation in computer science and basic programming concepts.',
      icon: '📖'
    },
  ];

  return (
    <div className="min-h-screen section-container">
      <SectionTitle 
        title="Education" 
        subtitle="My academic journey and qualifications"
      />

      <div className="max-w-4xl mx-auto">
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary-200 transform md:-translate-x-1/2"></div>

          {education.map((edu, index) => (
            <div key={index} className="relative mb-12">
              {/* Timeline Dot */}
              <div className="absolute left-6 md:left-1/2 w-4 h-4 bg-primary-600 rounded-full transform md:-translate-x-1/2 -translate-y-1 z-10"></div>

              {/* Content Card */}
              <div className={`ml-16 md:ml-0 ${index % 2 === 0 ? 'md:mr-1/2 md:pr-8' : 'md:ml-1/2 md:pl-8'}`}>
                <div className="card">
                  <div className="flex items-start space-x-4">
                    <div className="text-4xl">{edu.icon}</div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-2xl font-bold text-gray-900">{edu.degree}</h3>
                        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                          edu.status === 'Ongoing' 
                            ? 'bg-yellow-100 text-yellow-800' 
                            : 'bg-green-100 text-green-800'
                        }`}>
                          {edu.status}
                        </span>
                      </div>
                      <p className="text-xl text-primary-600 font-semibold mb-2">{edu.institution}</p>
                      <p className="text-gray-600 mb-3">{edu.period}</p>
                      <p className="text-gray-700">{edu.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;

