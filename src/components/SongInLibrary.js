import { playAudioHandeler } from "../repeatedFunctions";

function SongInLibrary({
  setPlayPause,
  playPause,
  audioRef,
  song,
  songs,
  songInfo,
  setCurrentSong,
  setSongs,
  id,
}) {
  const setCurrentSongHandeler = () => {
    const newSongs = songs.map((s) => {
      if (s.id === id) {
        setCurrentSong(s);
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

    playAudioHandeler(playPause, audioRef);
  };
  return (
    <div
      onClick={setCurrentSongHandeler}
      className={`library-song ${song.active ? "selected" : ""}`}
    >
      <div className="song-cover">
        <img src={songInfo.cover} alt="" />
      </div>
      <div className="song-info">
        <h3>{songInfo.name}</h3>
        <h4>{songInfo.artist}</h4>
      </div>
    </div>
  );
}

export default SongInLibrary;
