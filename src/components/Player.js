import { playAudioHandeler } from "../repeatedFunctions";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";

function Player({
  playPauseHandler,
  setSongTiming,
  songTiming,
  audioRef,
  currentSong,
  playPause,
  songs,
  setCurrentSong,
  setSongs,
  setActive,
}) {
  //useEffect

  // Handelers

  // Time Handeler

  const timeFormater = (t) => {
    return Math.floor(t / 60) + ":" + ("0" + Math.floor(t % 60)).slice(-2);
  };

  const dragInputHandeler = (e) => {
    setSongTiming({ ...songTiming, current: e.target.value });
    audioRef.current.currentTime = e.target.value;
  };

  const skipCurrentSong = (dr) => {
    const currentSongIndex = songs.findIndex(
      (song) => song.id === currentSong.id
    );
    if (dr === "f") {
      setCurrentSong(songs[(currentSongIndex + 1) % songs.length]);
      setActive(songs[(currentSongIndex + 1) % songs.length]);
    } else if (dr === "b") {
      if ((currentSongIndex - 1) % songs.length === -1) {
        setCurrentSong(songs[songs.length - 1]);
        setActive(songs[songs.length - 1]);
      } else {
        setCurrentSong(songs[(currentSongIndex - 1) % songs.length]);
        setActive(songs[(currentSongIndex - 1) % songs.length]);
      }
    }
    playAudioHandeler(playPause, audioRef);
  };

  // Animate the track
  const trackStyles = {
    transform: `translateX(calc(-${100 - songTiming.animationPercentage}%))`,
    background: `linear-gradient(90deg, ${currentSong.colors[1]} 0%, ${currentSong.colors[0]} 100%)`,
  };

  return (
    <div className="player-container">
      <div className="time-control">
        <span className="start-time">{timeFormater(songTiming.current)}</span>
        {/*--------- Input ---------*/}
        <div className="timeline-track">
          <input
            type="range"
            min={0}
            max={songTiming.duration || 0}
            value={songTiming.current}
            onChange={dragInputHandeler}
          />
          <div style={trackStyles} className="colored-track"></div>
        </div>
        {/*-------------------------*/}
        <span className="end-time">{timeFormater(songTiming.duration)}</span>
      </div>
      <div className="play-control">
        <FontAwesomeIcon
          onClick={() => skipCurrentSong("b")}
          size="2x"
          icon={faAngleLeft}
          style={{ color: `${currentSong.colors[1]}7f` }}
        />
        <FontAwesomeIcon
          size="2x"
          onClick={playPauseHandler}
          icon={playPause ? faPause : faPlay}
          style={{ color: `${currentSong.colors[1]}` }}
        />
        <FontAwesomeIcon
          onClick={() => skipCurrentSong("f")}
          size="2x"
          icon={faAngleRight}
          style={{ color: `${currentSong.colors[1]}7f` }}
        />
      </div>
    </div>
  );
}

export default Player;
