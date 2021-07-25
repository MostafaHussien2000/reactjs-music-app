export const playAudioHandeler = (playPause, audioRef) => {
  if (playPause) {
    const playPromise = audioRef.current.play();
    if (playPromise !== undefined) {
      playPromise.then(() => {
        audioRef.current.play();
      });
    }
  }
};
