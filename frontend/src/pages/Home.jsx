import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-container bg-gradient-to-br from-primary-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Hi, I'm <span className="text-primary-600">Moin Uddin</span>
          </h1>
          <p className="text-2xl md:text-3xl text-gray-700 mb-4">
            Software Developer
          </p>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Dedicated Software Developer experienced in mobile and full-stack web development, 
            with strong skills in Flutter & Dart, PHP & MySQL, ASP.NET MVC & SQL Server, 
            and modern front-end technologies.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary">
              Get In Touch
            </Link>
            <Link to="/projects" className="btn-secondary">
              View Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="section-container bg-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-600 mb-2">5+</div>
            <div className="text-gray-600">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-600 mb-2">4+</div>
            <div className="text-gray-600">Technologies</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-600 mb-2">2+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
        </div>
      </section>

      {/* Skills Preview */}
      <section className="section-container bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-8">Technologies I Work With</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {['Flutter', 'PHP', 'ASP.NET', 'JavaScript', 'MySQL', 'MongoDB', 'Firebase', 'Laravel'].map((tech) => (
            <div key={tech} className="card text-center">
              <div className="text-3xl mb-2">💻</div>
              <div className="font-semibold text-gray-900">{tech}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;

