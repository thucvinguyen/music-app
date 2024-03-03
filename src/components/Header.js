import React from "react";
import useMusicPlayer from "../hooks/useMusicPlayer";

function Header() {
  const { currentTrackName } = useMusicPlayer();
  return (
    <div className="header">
      {/* eslint-disable-next-line */}
      <marquee>{currentTrackName}</marquee>
    </div>
  );
}

export default Header;
