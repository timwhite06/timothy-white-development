import PropTypes from 'prop-types';

const SkillCard = ({ title, icon, experience, children }) => {
  const isSvg = typeof icon === 'object';

  return (
    <div className="card card-compact bg-gray-100 w-full shadow-xl min-h-[250px] sm:min-h-[350px]">
      <div className="card-body">
        <div className="flex justify-between items-center">
          <h2 className="card-title text-2xl">{title}</h2>
          <div
            className="badge text-lg p-3 mt-[-5px] border-none text-black"
            style={{ background: '#22d3ee' }}
          >
            {experience}+ years
          </div>
        </div>

        <p className="text-lg">{children}</p>
        {isSvg ? (
          <div className="h-12 w-12 flex justify-center items-center">
            {icon}
          </div>
        ) : (
          <i className={`${icon} text-5xl`}></i>
        )}
      </div>
    </div>
  );
};

SkillCard.propTypes = {
  title: PropTypes.string.isRequired,
  experience: PropTypes.string.isRequired,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  children: PropTypes.node.isRequired
};

export default SkillCard;