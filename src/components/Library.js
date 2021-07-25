import SongInLibrary from "./SongInLibrary";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

function Library({
  setPlayPause,
  playPause,
  audioRef,
  songs,
  setCurrentSong,
  currentSong,
  setSongs,
  isLibraryOpen,
  setIsLibraryOpen,
}) {
  return (
    <div
      style={{ background: `${currentSong.colors[1]}` }}
      className={`library-container ${isLibraryOpen ? "opened" : ""}`}
    >
      <div className="heading">
        <h1>Library</h1>
        <FontAwesomeIcon
          size="2x"
          icon={faTimes}
          onClick={() => setIsLibraryOpen(!isLibraryOpen)}
        />
      </div>
      <div className="songs-list">
        {songs.map((song) => (
          <SongInLibrary
            songs={songs}
            song={song}
            setCurrentSong={setCurrentSong}
            songInfo={song}
            key={song.id}
            id={song.id}
            audioRef={audioRef}
            playPause={playPause}
            setPlayPause={setPlayPause}
            setSongs={setSongs}
          />
        ))}
      </div>
    </div>
  );
}

export default Library;
