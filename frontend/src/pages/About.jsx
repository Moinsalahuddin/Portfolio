import SectionTitle from '../components/SectionTitle';

const About = () => {
  return (
    <div className="min-h-screen section-container">
      <SectionTitle 
        title="About Me" 
        subtitle="Get to know more about my background and expertise"
      />

      <div className="max-w-4xl mx-auto">
        <div className="card mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Professional Profile</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            I am a dedicated Software Developer with extensive experience in mobile and full-stack web development. 
            My expertise spans across multiple technologies and frameworks, allowing me to build robust and scalable 
            applications that meet modern business needs.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            I specialize in <strong>Flutter & Dart</strong> for mobile app development, creating cross-platform 
            applications that deliver native performance. On the web development front, I work with <strong>PHP & MySQL</strong> 
            and <strong>ASP.NET MVC & SQL Server</strong> to build enterprise-level applications.
          </p>
          <p className="text-gray-700 leading-relaxed">
            I have hands-on experience with <strong>Firebase</strong> services including Authentication, Firestore, 
            and Realtime Database, enabling me to build modern, cloud-based applications. My focus is always on 
            creating clean UI/UX designs and implementing scalable architecture patterns.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="card">
            <h3 className="text-xl font-bold text-gray-900 mb-4">What I Do</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">✓</span>
                <span>Mobile App Development (Flutter/Dart)</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">✓</span>
                <span>Full-Stack Web Development</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">✓</span>
                <span>Database Design & Management</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">✓</span>
                <span>API Development & Integration</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">✓</span>
                <span>UI/UX Design & Implementation</span>
              </li>
            </ul>
          </div>

          <div className="card">
            <h3 className="text-xl font-bold text-gray-900 mb-4">My Approach</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">✓</span>
                <span>Clean and maintainable code</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">✓</span>
                <span>Scalable architecture patterns</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">✓</span>
                <span>User-centered design</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">✓</span>
                <span>Best practices and standards</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">✓</span>
                <span>Continuous learning and improvement</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

