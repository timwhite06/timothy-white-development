// MaxWidthWrapper Component
import MaxWidthWrapper from '@/app/components/Wrappers/max_width_wrapper';
import AttemptGsap from '@/app/components/Animations/attempt';

const Page = () => {
  return (
    <div className="flex flex-col mt-[-80px]">
      {/* Video Background Section */}
      <div className="min-h-[50vh] flex items-center relative w-full">
        {/* Background Video Container */}
        <div className="video-container relative w-full h-full min-h-[50vh] flex justify-start items-center pointer-events-none">
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black opacity-80 z-10 pointer-events-none" />

          {/* Content */}
          <div className="relative z-20 w-full h-full flex items-center justify-center px-0 sm:px-12">
            <div className="text-white z-30 w-full lg:max-w-[1000px] ml-8 md:ml-12">
              {/* Title Section */}
              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold">
                Timothy White
              </h1>
              <p className="mt-4 text-xl sm:text-3xl lg:text-4xl">
                A Skill Showcase.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <MaxWidthWrapper bgColor="bg-gray-200">
        <div className="container text-black px-0">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">Animations</h2>
          <p className="text-lg sm:text-xl mb-4 leading-relaxed">
            Here&apos;s a collection of my core programming skills, including
            frontend and backend technologies.
          </p>
          <AttemptGsap />
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Page;
