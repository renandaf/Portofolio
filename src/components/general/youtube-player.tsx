import React from "react";
import ReactPlayer from "react-player";

type YouTubePlayerProps = {
  url: string;
  height?: string;
  width?: string;
};

const YouTubePlayer = ({
  url,
  ...props
}: YouTubePlayerProps) => {
  return (
   <div className="relative w-full overflow-hidden rounded-xl aspect-video">
      <ReactPlayer
        src={url}
        muted
        playing
        loop
        width="100%"
        height="100%"
        autoPlay
      />
    </div>
  );
};

export default YouTubePlayer;
