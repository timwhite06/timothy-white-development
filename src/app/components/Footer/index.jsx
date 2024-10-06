const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="flex flex-col w-full">
      <footer className="bg-white text-black py-4 mt-auto">
        <div className="container mx-auto text-center">
          <p>&copy; {currentYear} Timothy White. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-2">
            <a
              href="https://www.instagram.com/timwhite06/?hl=en"
              className="hover:text-gray-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
            <a
              href="https://github.com/timwhite06"
              className="hover:text-gray-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
