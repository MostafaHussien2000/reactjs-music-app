import "./styles/main.scss";

import { useState, useRef } from "react";

import Song from "./components/Song";
import Player from "./components/Player";
import Library from "./components/Library";
import Nav from "./components/Nav";

import songsData from "./util";

function App() {
  //---------
  const [playPause, setPlayPause] = useState(false);

  const audioHandler = (p) => {
    p ? audioRef.current.pause() : audioRef.current.play();
  };

  const playPauseHandler = () => {
    setPlayPause(!playPause);
    audioHandler(playPause);
  };
  //---------
  // State
  const [songTiming, setSongTiming] = useState({
    current: 0,
    duration: 0,
    animationPercentage: 0,
  });

  const audioRef = useRef(null);

  const timeUpdateHandeler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;

    // Caculate Percentage for the animation

    const animationPercentage = Math.round(
      (Math.round(current) / Math.round(duration)) * 100
    );

    ///
    setSongTiming({ ...songTiming, current, duration, animationPercentage });
  };

  const [songs, setSongs] = useState(songsData());

  const [currentSong, setCurrentSong] = useState(songs[0]);

  //

  const [isLibraryOpen, setIsLibraryOpen] = useState(false);

  //

  const setActive = (targetSong) => {
    const newSongs = songs.map((s) => {
      if (s.id === targetSong.id) {
        return {
          ...s,
          active: true,
        };
      } else {
        return {
          ...s,
          active: false,
        };
      }
    });

    setSongs(newSongs);
  };

  const songEndHandeler = async () => {
    const currentSongIndex = songs.findIndex(
      (song) => song.id === currentSong.id
    );
    await setCurrentSong(songs[(currentSongIndex + 1) % songs.length]);
    setActive(songs[(currentSongIndex + 1) % songs.length]);

    if (playPause) audioRef.current.play();
  };

  return (
    <div
      style={{
        background: `${currentSong.colors[1]}`,
        transition: "background 0.3s ease, padding 0.3s ease",
        minHeight: "100vh",
        padding: `${!isLibraryOpen ? "0px" : "30px"}`,
      }}
      className="App"
    >
      <main
        style={{
          position: "relative",
          right: "0px",
          transition: "width 0.3s ease, margin 0.5s ease, height 0.3s ease",
          background: `#fff`,
          height: `${!isLibraryOpen ? "100vh" : "auto"}`,
          width: `${!isLibraryOpen ? "auto" : "60%"}`,
          marginLeft: `${!isLibraryOpen ? "0px" : "40%"}`,
          borderRadius: `${!isLibraryOpen ? "0px" : "50px"}`,
        }}
      >
        <Nav
          currentSong={currentSong}
          isLibraryOpen={isLibraryOpen}
          setIsLibraryOpen={setIsLibraryOpen}
        />
        <Song currentSong={currentSong} />
        <Player
          audioRef={audioRef}
          songTiming={songTiming}
          currentSong={currentSong}
          setSongTiming={setSongTiming}
          playPauseHandler={playPauseHandler}
          playPause={playPause}
          songs={songs}
          setCurrentSong={setCurrentSong}
          setSongs={setSongs}
          setPlayPause={setPlayPause}
          setActive={setActive}
        />
      </main>
      <Library
        audioRef={audioRef}
        setCurrentSong={setCurrentSong}
        songs={songs}
        setPlayPause={setPlayPause}
        playPause={playPause}
        setSongs={setSongs}
        currentSong={currentSong}
        setIsLibraryOpen={setIsLibraryOpen}
        isLibraryOpen={isLibraryOpen}
      />
      <audio
        onTimeUpdate={timeUpdateHandeler}
        onLoadedMetadata={timeUpdateHandeler}
        ref={audioRef}
        src={currentSong.audio}
        onEnded={songEndHandeler}
      ></audio>
    </div>
  );
}

export default App;
