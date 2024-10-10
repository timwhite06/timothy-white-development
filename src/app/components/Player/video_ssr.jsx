export default function VideoComponent({ src, type, captionsSrc }) {
  return (
    <video
      src={src}
      type={type}
      autoPlay
      muted
      loop
      playsInline
      controls={false}
      preload="metadata" // Preloads only metadata for performance
      className="absolute inset-0 w-full h-full object-cover z-[-1]"
      aria-label="Video player landing page video" // Added accessibility label
    >
      Your browser does not support the video tag.
    </video>
  );
}
