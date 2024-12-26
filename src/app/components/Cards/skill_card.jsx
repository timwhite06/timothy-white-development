import PropTypes from 'prop-types';
import Link from 'next/link';

const SkillCard = ({
  title,
  icon,
  experienceStartYear,
  experienceEndYear,
  children,
  link
}) => {
  const isSvg = typeof icon === 'object';

  // Calculate years of experience
  const currentYear = new Date().getFullYear();
  const endYear = experienceEndYear || currentYear; // Use current year if no end year is provided
  const yearsOfExperience = endYear - experienceStartYear;

  return (
    <Link href={link} target="_blank" rel="noopener noreferrer">
      <div className="card card-compact bg-gray-100 w-full min-h-[250px] sm:min-h-[350px] transition-transform transform hover:scale-105 hover:shadow-[0_4px_14px_rgba(34,211,238,0.4)]">
        <div className="card-body">
          <div className="flex justify-between items-center">
            <h2 className="card-title text-2xl">{title}</h2>
            <div
              className="badge text-lg p-3 mt-[-5px] border-none text-black"
              style={{ background: '#22d3ee' }}
            >
              {yearsOfExperience}+ years
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
    </Link>
  );
};

SkillCard.propTypes = {
  title: PropTypes.string.isRequired,
  experienceStartYear: PropTypes.number.isRequired, // Starting year of experience
  experienceEndYear: PropTypes.number, // Optional ending year of experience
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  children: PropTypes.node.isRequired,
  link: PropTypes.string.isRequired
};

export default SkillCard;
