import VideoComponent from '@/app/components/Player/video_ssr';
import MaxWidthWrapper from '@/app/components/Wrappers/max_width_wrapper';
import SkillCard from '@/app/components/Cards/skill_card';
import {
  MongodbIcon,
  NextJsIcon,
  ThreeJsIcon
} from '@/app/components/Icons/index';
import ProjectCard from './components/Cards/project_card';
import Link from 'next/link';

// List of all projects
// List of all projects
const projects = [
  {
    key: 'portfolio',
    title: 'Portfolio Website',
    description:
      'A personal portfolio website built using Next.js and Tailwind CSS.',
    image: '/images/setup.jpg',
    link: 'https://github.com/timwhite06/timothy-white-development',
    bgColor: 'bg-gray-100',
    icon: <NextJsIcon />
  },
  {
    key: 'downloader',
    title: 'YouTube mp4 & mp3 Downloader',
    description:
      'A command line application that allows users to download YouTube videos in mp4 and mp3 formats.',
    image: '/images/youtube_pexel.jpg',
    link: 'https://github.com/timwhite06/youtube-video-audio-downloader',
    bgColor: 'bg-gray-100',
    icon: 'fa-brands fa-python'
  },
  {
    key: 'white-obsidian',
    title: 'White Obsidian',
    description:
      'White Obsidian is my sole proprietorship business, offering web development and website services.',
    image: '/images/code.jpg', // Make sure to replace this with the actual image path
    link: 'https://whiteobsidian.com',
    bgColor: 'bg-gray-100',
    icon: <NextJsIcon /> // Replace with the appropriate icon if you have one
  }
];

export default function Home() {
  const cloudfrontDomain = process.env.CLOUDFRONT_DOMAIN;
  const fileName = 'stock-videos/combined_forest.mp4';

  // Construct the CloudFront URL
  const videoUrl = `https://${cloudfrontDomain}/${fileName}`;

  return (
    <div className="flex flex-col mt-[-80px]">
      {/* Video Background */}
      <div className="min-h-[85vh] flex items-center relative w-full">
        {/* Background Video */}
        <div className="video-container relative w-full h-full min-h-[85vh] flex justify-start items-center pointer-events-none">
          {/* Video Component */}
          {videoUrl ? (
            <VideoComponent src={videoUrl} type="video/mp4" />
          ) : (
            <p className="text-red-500">Error loading video</p>
          )}

          {/* Dark Overlay */}
          {/* Directly apply opacity to this element */}
          <div className="absolute inset-0 bg-black opacity-80 z-10 pointer-events-none" />

          {/* Content */}
          <div className="relative z-20 w-full h-full flex items-center justify-center px-0 sm:px-12">
            <div className="text-white z-30 w-full lg:max-w-[1000px] ml-8 md:ml-12">
              {/* Adjusted font sizes based on Montserrat recommendations */}
              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold">
                Timothy White
              </h1>
              <p className="mt-4 text-xl sm:text-3xl lg:text-4xl">
                A Personal Portfolio.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Page Content */}
      <MaxWidthWrapper>
        <div className="p-8 sm:p-20 bg-gray-100 text-black flex flex-col md:flex-row items-center">
          {/* Text Section */}
          <div className="w-full md:w-2/3 pr-0 md:pr-12">
            <h2 className="text-4xl sm:text-5xl font-bold mb-2">About Me</h2>
            {/* Subtitle */}
            <h3 className="text-2xl sm:text-3xl font-semibold text-gray-700 mb-6">
              Timothy White | Brighton, UK
            </h3>
            <p className="text-lg sm:text-xl mb-4 leading-relaxed">
              Hi, I’m Timothy White, a passionate full-stack developer with
              experience in building innovative web and desktop applications.
              With a strong background in AWS, React.js, Node.js, and Python, I
              specialize in creating full-stack solutions for drone calibration,
              automotive technology, and more. I’m also an instructor in the
              Army Cadets, helping young people develop their skills and
              confidence. Outside of work, you’ll often find me pursuing my love
              for bodybuilding and continuously working on personal development
              projects.
            </p>
            <p className="text-lg sm:text-xl leading-relaxed">
              I’m always eager to take on new challenges and explore
              cutting-edge technologies to solve real-world problems.
            </p>
          </div>

          {/* Circle Section */}
          <div className="w-full md:w-1/3 flex justify-center md:justify-end mt-8 md:mt-0">
            <div className="w-[500px] h-[500px] bg-black rounded-sm overflow-hidden flex items-center justify-center">
              {/* Placeholder for profile picture or decorative element */}
              <img
                src="/images/profile_picture.jpg"
                alt="Profile"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
        </div>
      </MaxWidthWrapper>

      <MaxWidthWrapper bgColor="bg-gray-300">
        <div className="container text-black px-0">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">Experience</h2>
          <p className="text-lg sm:text-xl mb-4 leading-relaxed">
            Over the past few years, I’ve worked on a variety of exciting
            projects, building full-stack solutions for advanced automotive
            technology and drone systems. Here are some highlights of my
            professional journey.
          </p>

          <div className="space-y-6">
            {/* Continental Engineering Services Experience */}
            <div className="relative bg-white p-6 rounded-md shadow-md">
              {/* Badge for Date */}
              <span className="badge absolute left-1/2 transform -translate-x-1/2 -top-4 bg-[#22d3ee] text-black font-bold px-6 py-3 rounded-full text-large mt-1 w-[65vw] sm:w-auto">
                August 2021 - Present
              </span>

              {/* Experience Details */}
              <h3 className="text-2xl sm:text-3xl font-bold mb-2 mt-4">
                Software Test Engineer - Continental Engineering Services
              </h3>
              <p className="text-md sm:text-lg text-gray-700 mb-2">
                Apprenticeship - Full Time
              </p>

              {/* First Paragraph */}
              <p className="text-lg sm:text-xl mb-4 leading-relaxed">
                Although my title is **Software Test Engineer**, my experience
                has been focused on building full-stack web applications,
                whether it&apos;s creating responsive websites or developing
                desktop applications using <strong>Electron.js</strong>.
                I&apos;ve had extensive experience delivering projects, in an{' '}
                <strong>agile</strong> environment, that combine both frontend
                and backend solutions.
              </p>

              {/* Second Paragraph */}
              <p className="text-lg sm:text-xl mb-4 leading-relaxed">
                At Continental Engineering Services, I have been deeply involved
                in developing full-stack 3D automotive simulations using modern
                technologies like <strong>React.js</strong>,{' '}
                <strong>Node.js</strong>, <strong>Three.js</strong>,{' '}
                <strong>Electron.js</strong>, and <strong>Python</strong>. These
                simulations help automotive engineers test and optimise vehicle
                components in a virtual environment, reducing physical testing
                and accelerating the design process.
              </p>

              {/* Third Paragraph */}
              <p className="text-lg sm:text-xl mb-4 leading-relaxed">
                Additionally, I&apos;ve worked on developing{' '}
                <strong>drone and camera calibration systems</strong> that
                ensure high-precision data collection for automotive calibration
                projects. These systems are used in the calibration of
                autonomous vehicle sensors, ensuring that cameras and drones
                accurately capture environmental data and vehicle movement.
              </p>
            </div>

            {/* You can add other job experience cards here */}
          </div>
        </div>
      </MaxWidthWrapper>

      <MaxWidthWrapper bgColor="bg-gray-200">
        <div className="container text-black px-0">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">Skills</h2>
          <p className="text-lg sm:text-xl mb-4 leading-relaxed">
            Here&apos;s a collection of my core programming skills, including
            frontend and backend technologies.
          </p>

          {/* Grid with better gap */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            <SkillCard
              title="React.js"
              experience="3"
              icon="fa-brands fa-react"
            >
              Proficient in developing dynamic, responsive web applications
              using React.js, focusing on performance and user experience.
            </SkillCard>

            <SkillCard
              title="Node.js"
              experience="3"
              icon="fa-brands fa-node-js"
            >
              Skilled in building server-side applications with Node.js,
              enabling efficient and scalable backend services.
            </SkillCard>

            <SkillCard title="Python" experience="3" icon="fa-brands fa-python">
              Experience in Python programming for various applications, from
              web development to automation and data analysis.
            </SkillCard>

            <SkillCard
              title="Electron.js"
              experience="3"
              icon="fa-brands fa-js-square"
            >
              Expertise in creating cross-platform desktop applications with
              Electron.js, integrating web technologies into desktop apps.
            </SkillCard>

            <SkillCard title="MongoDB" experience="2" icon={<MongodbIcon />}>
              Proficient in using MongoDB, a NoSQL database, for developing
              scalable and flexible database solutions.
            </SkillCard>

            <SkillCard title="AWS" experience="2" icon="fa-brands fa-aws">
              Familiar with Amazon Web Services (AWS), leveraging cloud
              infrastructure for hosting, storage, and deployment solutions.
            </SkillCard>

            <SkillCard title="Next.js" experience="3" icon={<NextJsIcon />}>
              Experienced in building server-side rendered applications and
              static websites with Next.js, focusing on performance and SEO.
            </SkillCard>

            <SkillCard title="Three.js" experience="3" icon={<ThreeJsIcon />}>
              Proficient in creating 3D graphics and animations using Three.js,
              enabling immersive and interactive web experiences.
            </SkillCard>

            {/* Center the last card */}
            <div className="md:col-span-2 xl:col-span-1 justify-self-center">
              <SkillCard title="PHP" experience="1" icon="fa-brands fa-php">
                Skilled in PHP for server-side scripting, enabling dynamic web
                content and robust backend solutions.
              </SkillCard>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>

      <MaxWidthWrapper bgColor="bg-gray-100">
        <div className="container text-black bg-gray-300 p-8 rounded-xl">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">UX Favourites</h2>
          <p className="text-lg sm:text-xl mb-4 leading-relaxed">
            Discover some of my top picks in UX design - the bits I use day to
            day.
          </p>

          {/* UX Favourites Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Favorite Font: Montserrat */}
            <div className="card shadow-lg bg-gray-200">
              <div className="card-body">
                <h2 className="card-title">Favourite Font</h2>
                <p className="text-lg">
                  <span className="badge badge-primary text-lg p-3 mr-1">
                    Montserrat
                  </span>
                  is my go-to font for clean, modern web designs. Its
                  versatility and readability make it perfect for both headings
                  and body text.
                </p>
              </div>
            </div>

            {/* Favorite Design Tool: Figma */}
            <div className="card shadow-lg bg-gray-200">
              <div className="card-body">
                <h2 className="card-title">Favourite Design Tool</h2>
                <p className="text-lg">
                  <span className="badge badge-secondary text-lg p-3 mr-1">
                    Figma
                  </span>
                  is my favorite design tool for prototyping and collaboration.
                  Its powerful features make it easy to create and iterate on
                  user interfaces.
                </p>
              </div>
            </div>

            {/* Random UX Favourite */}
            <div className="card shadow-lg bg-gray-200">
              <div className="card-body">
                <h2 className="card-title">Random Favourite</h2>
                <p className="text-lg">
                  <span className="badge badge-accent text-lg p-3 mr-1">
                    Dark Mode
                  </span>
                  is one of my favorite UX design features. It helps reduce eye
                  strain and makes interfaces look sleek and modern
                  <br />
                  Bit ironic, because I made this website in light mode!
                </p>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>

      {/* Portfolio / Projects Section */}
      <MaxWidthWrapper bgColor="bg-white">
        <div className="container text-black px-0">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">Projects</h2>
          <p className="text-lg sm:text-xl mb-4 leading-relaxed">
            Here are some of the key projects I&apos;ve worked on recently.
          </p>
          {/* List projects with links to GitHub, live demos, etc. */}

          {/* Project Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={project.key}
                className={`${
                  projects.length % 2 !== 0 && index === projects.length - 1
                    ? 'md:col-span-2'
                    : ''
                }`}
              >
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  link={project.link}
                  bgColor={project.bgColor}
                  icon={project.icon}
                />
              </div>
            ))}
          </div>
        </div>
      </MaxWidthWrapper>

      {/* Education & Certifications Section */}
      <MaxWidthWrapper bgColor="bg-gray-300">
        <div className="container text-black px-0">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Education & Certifications
          </h2>
          <p className="text-lg sm:text-xl mb-4 leading-relaxed">
            My academic background and relevant certifications.
          </p>

          {/* Education Details */}
          <div className="space-y-6">
            {/* University Degree */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl sm:text-3xl font-bold mb-2">
                BSc (Hons) Digital and Technology Solutions (Software
                Engineering)
              </h3>
              <p className="text-md sm:text-lg text-gray-700 mb-2">
                University of Chichester | September 2021 - Expected Graduation:
                July 2025
              </p>
              <p className="text-lg sm:text-xl mb-4">
                Currently pursuing a 2:1 in Software Engineering, I am in my
                final year of study, attending university 1 day a week while
                working on personal and professional development projects.
              </p>
              <p className="text-lg sm:text-xl font-semibold">
                Relevant Modules:
              </p>
              <ul className="list-disc list-inside text-lg sm:text-xl leading-relaxed">
                <li>Developing a Real System For a Customer</li>
                <li>Project Management</li>
                <li>Web User Experience</li>
                <li>Python</li>
                <li>Java</li>
                <li>PHP and Database</li>
              </ul>
            </div>

            {/* Certifications */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl sm:text-3xl font-bold mb-2">
                Relevant Certifications
              </h3>
              <ul className="list-disc list-inside text-lg sm:text-xl leading-relaxed">
                <li>First Aid At Work + Tourniquet (FAAW+T)</li>
              </ul>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>

      {/* Contact Section */}
      <MaxWidthWrapper bgColor="bg-gray-100">
        <div className="container text-black px-0">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">Contact</h2>
          <p className="text-lg sm:text-xl mb-4 leading-relaxed">
            Interested in working together or just want to say hi? Get in touch!
          </p>
          {/* Email Button */}
          <div className="flex justify-start">
            <Link
              href="mailto:timothywhitedevelopment@gmail.com"
              className="bg-white text-black px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:bg-gray-200 break-all whitespace-normal text-left"
            >
              timothywhitedevelopment@gmail.com
            </Link>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
