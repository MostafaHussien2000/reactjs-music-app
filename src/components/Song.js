function Song({ currentSong }) {
  return (
    <div className="song-container">
      <div className="cover-wrapper">
        <img src={currentSong.cover} alt={currentSong.name} />
      </div>
      <h2> {currentSong.name} </h2>
      <h4> {currentSong.artist} </h4>
    </div>
  );
}

export default Song;
