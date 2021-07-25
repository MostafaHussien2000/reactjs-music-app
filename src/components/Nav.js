import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

function Nav({ isLibraryOpen, setIsLibraryOpen, currentSong }) {
  const toggleLibrary = () => {
    setIsLibraryOpen(!isLibraryOpen);
  };

  return (
    <div id="nav">
      <h1 style={{ color: `${currentSong.colors[1]}` }}>chillHop</h1>
      <FontAwesomeIcon
        style={{ color: `${currentSong.colors[1]}` }}
        size="2x"
        icon={faMusic}
        onClick={toggleLibrary}
      />
    </div>
  );
}

export default Nav;
