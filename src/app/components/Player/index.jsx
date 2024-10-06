'use client';

import ReactPlayer from 'react-player';

export default function VideoPlayer({
  url = '/videos/mountain_drone.mp4',
  playbackRate = 1,
  playing = true,
  controls = false,
  loop = true,
  muted = false,
  playsinline = true,
  ...props
}) {
  return (
    <div className="absolute inset-0 w-full h-[85vh] z-[-1] overflow-hidden">
      <ReactPlayer
        url={url}
        playbackRate={playbackRate}
        playing={playing}
        controls={controls}
        loop={loop}
        muted={muted}
        playsinline={playsinline}
        width="100%"
        height="100%"
        {...props}
      />
    </div>
  );
}
