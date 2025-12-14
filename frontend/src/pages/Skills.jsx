import { useState, useEffect } from 'react';
import SectionTitle from '../components/SectionTitle';
import SkillCard from '../components/SkillCard';
import { getSkills } from '../services/api';

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    fetchSkills();
  }, []);

  const fetchSkills = async () => {
    try {
      const response = await getSkills();
      setSkills(response.data);
    } catch (error) {
      console.error('Error fetching skills:', error);
      // Fallback to default skills if API fails
      setSkills(getDefaultSkills());
    } finally {
      setLoading(false);
    }
  };

  const getDefaultSkills = () => {
    return [
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
  };

  const categories = ['All', 'Programming', 'Frameworks', 'Databases', 'Tools'];
  const filteredSkills = selectedCategory === 'All' 
    ? skills 
    : skills.filter(skill => skill.category === selectedCategory);

  const groupedSkills = filteredSkills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {});

  if (loading) {
    return (
      <div className="min-h-screen section-container">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
          <p className="mt-4 text-gray-600">Loading skills...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen section-container">
      <SectionTitle 
        title="Skills & Technologies" 
        subtitle="Technologies and tools I use to bring ideas to life"
      />

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-2 rounded-full font-semibold transition-colors ${
              selectedCategory === category
                ? 'bg-primary-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      {selectedCategory === 'All' ? (
        Object.keys(groupedSkills).map((category) => (
          <div key={category} className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">{category}</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {groupedSkills[category].map((skill, index) => (
                <SkillCard key={index} skill={skill} />
              ))}
            </div>
          </div>
        ))
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredSkills.map((skill, index) => (
            <SkillCard key={index} skill={skill} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Skills;

