'use client';

export default function VideoComponent({ src, type }) {
  return (
    <video
      autoPlay
      muted
      loop
      playsInline
      controls={false}
      preload="auto"
      className="absolute inset-0 w-full h-full object-cover z-[-1]"
    >
      <source src={src} type={type} />
      Your browser does not support the video tag.
    </video>
  );
}
