import Image from 'next/image';

export default function LandingImage() {
  return (
    <div className="relative min-h-screen flex items-center justify-start">
      {/* Background Image */}
      <Image
        src="/images/NATURE.jpg"
        alt="City background"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        quality={100}
        className="z-[-1]"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-[-1]" />

      <main className="p-8 sm:p-20 text-white z-10">
        <h1 className="text-5xl sm:text-7xl font-bold">Timothy White</h1>
        <p className="mt-4 text-2xl sm:text-4xl">A Personal Portfolio.</p>
      </main>
    </div>
  );
}
