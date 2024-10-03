import './styles.css';
const Glassmorphism = ({ children, backgroundColor, customStyles }) => {
  return (
    <div className={`glassmorphism ${backgroundColor} ${customStyles}`}>
      {children}
    </div>
  );
};

export default Glassmorphism;
