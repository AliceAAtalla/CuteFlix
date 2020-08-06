import React from "react";

const CarouselCute = ({ videos }) => (
  <div>
    {videos.map(({ src, alt, title, avatar, channelName, timer, link }) => (
      <ThumbCute
        src={src}
        alt={alt}
        title={title}
        avatar={avatar}
        channelName={channelName}
        timer={timer}
        link={link}
      />
    ))}
  </div>
);

export default CarouselCute;
