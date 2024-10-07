export default function VideoComponent({ src, type }) {
  return (
    <video
      src={src}
      type={type}
      autoPlay
      muted
      loop
      playsInline
      controls={false}
      preload="auto" // Ensures the video is preloaded
      className="absolute inset-0 w-full h-full object-cover z-[-1]"
    >
      Your browser does not support the video tag.
    </video>
  );
}
