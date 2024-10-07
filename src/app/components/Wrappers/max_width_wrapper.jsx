import PropTypes from 'prop-types';

const MaxWidthWrapper = ({ bgColor, children }) => {
  return (
    <section className={`p-8 sm:p-20 ${bgColor}`}>
      <div className="max-w-5xl xl:max-w-7xl mx-auto">{children}</div>
    </section>
  );
};

MaxWidthWrapper.propTypes = {
  bgColor: PropTypes.string,
  children: PropTypes.node.isRequired
};

MaxWidthWrapper.defaultProps = {
  bgColor: 'bg-white' // Default background color
};

export default MaxWidthWrapper;
