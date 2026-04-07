import { useEffect, useRef, useState } from "react";

export default function FloatingMusicPlayer({ play }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (!audioRef.current) return;
    if (play) {
      audioRef.current.play();
      setIsPlaying(true);
    }
  }, [play]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };
  return (
    <>
      <audio ref={audioRef} src={'/assets/music/music.m4a'} loop />
      <div className={`floating-music-player ${isPlaying ? "rotating" : ""}`} onClick={togglePlay}>
        <img src="/assets/svg/player.png" alt="Logo" className="music-logo" />
      </div>

    </>
  )
}
