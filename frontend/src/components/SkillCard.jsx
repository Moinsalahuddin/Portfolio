const SkillCard = ({ skill }) => {
  return (
    <div className="card text-center group hover:scale-105 transition-transform duration-300">
      <div className="text-4xl mb-4">{skill.icon || '💻'}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{skill.name}</h3>
      <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
        {skill.category}
      </span>
    </div>
  );
};

export default SkillCard;

