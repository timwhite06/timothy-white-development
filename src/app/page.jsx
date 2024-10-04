export default function Home() {
  return (
    <div className="flex flex-col mt-[-80px]">
      {/* Video Background */}
      <div className="min-h-[85vh] flex items-center relative w-full">
        {/* Background Video */}
        <div className="video-container relative w-full h-full min-h-[85vh] flex justify-start items-center">
          <video
            autoPlay
            muted
            loop
            playsInline
            controls={false}
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover z-[-1]">
            <source src={'/videos/mountain_drone.mp4'} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black opacity-50 z-[-1]" />

          {/* Content */}
          <div className="relative w-full  border h-full flex items-center justify-center px-0 sm:px-12">
            <div className="text-white z-10 border border-red-500 w-full lg:max-w-[1000px] ml-8 md:ml-12">
              <h1 className="text-5xl sm:text-7xl font-bold">Timothy White</h1>
              <p className="mt-4 text-2xl sm:text-4xl">A Personal Portfolio.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Page Content */}
      <section className="p-8 sm:p-20 bg-gray-100 text-black">
        Coming soon...
      </section>
    </div>
  );
}
