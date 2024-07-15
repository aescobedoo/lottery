import "./App.css";
import React, {
  useState,
  useEffect,
  useCallback,
  useMemo,
  useRef,
} from "react";
import cards from "./cards";
import Card from "./components/Card";
import Button from "./components/Button";
import Settings from "./components/Settings";
import corre from "./resources/corre.mp3"; // Import the intro audio

// Utility function to shuffle an array
const shuffleArray = (array) => {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

function App() {
  const [playingCards, setPlayingCards] = useState(shuffleArray(cards));
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioFiles, setAudioFiles] = useState({});
  const [imageFiles, setImageFiles] = useState({});
  const [intervalSeconds, setIntervalSeconds] = useState(1.5);
  const [isSettingsMenuOpen, setIsSettingsMenuOpen] = useState(false);
  const [isAutoPlayEnabled, setIsAutoPlayEnabled] = useState(true);

  // Ref for audio element
  const audioElement = useRef(new Audio());

  useEffect(() => {
    const preloadAudioFiles = () => {
      const files = {};
      files["corre"] = corre;
      cards.forEach((card) => {
        files[card.audio] = card.audio;
      });
      setAudioFiles(files);
    };

    const preloadImageFiles = () => {
      const images = {};
      cards.forEach((card) => {
        const img = new Image();
        img.src = card.img;
        images[card.img] = img;
      });
      setImageFiles(images);
    };

    preloadAudioFiles();
    preloadImageFiles();
  }, []);

  const memoizedCards = useMemo(() => cards, []);

  const playAudio = useCallback(
    (audioFile) => {
      if (audioFiles[audioFile]) {
        console.log("Audio found");
        audioElement.current.src = audioFiles[audioFile];
        audioElement.current.currentTime = 0;
        audioElement.current
          .play()
          .catch((error) => console.error(`Error playing audio: ${error}`));
      } else {
        console.log("Error finding the audio");
      }
    },
    [audioFiles]
  );

  const shuffle = useCallback(() => {
    console.log("Using shuffle");
    console.log("Setting cards");
    setPlayingCards(shuffleArray(memoizedCards));
    setCurrentCardIndex(0);
    // Ensure the audio context is created on user interaction
    playAudio("corre");
    setTimeout(() => {
      setIsPlaying(true);
      
    }, 2000);
  }, [memoizedCards, playAudio]);

  const nextCard = useCallback(() => {
    setIsPlaying(true);
    if (currentCardIndex < cards.length - 1) {
      setCurrentCardIndex((prevIndex) => prevIndex + 1);
    } else {
      setIsPlaying(false);
    }
  }, [currentCardIndex]);

  const pause = useCallback(() => {
    setIsPlaying(false);
    audioElement.current.pause();
  }, []);

  useEffect(() => {
    if (!isPlaying) return;

    playAudio(playingCards[currentCardIndex].audio);

    if (isAutoPlayEnabled) {
      const timeout = setTimeout(() => {
        nextCard();
      }, intervalSeconds * 1000);

      return () => clearTimeout(timeout);
    }
  }, [
    isPlaying,
    currentCardIndex,
    playingCards,
    playAudio,
    isAutoPlayEnabled,
    intervalSeconds,
    nextCard,
  ]);

  const toggleSettingsMenu = (event) => {
    event.preventDefault();
    setIsSettingsMenuOpen((prevState) => !prevState);
  };

  const handleAutoPlayToggle = () => {
    setIsAutoPlayEnabled((prevState) => !prevState);
  };

  const handleSettingsSubmit = (event) => {
    event.preventDefault();
    const secs = parseFloat(event.target.querySelector("#inputText").value);
    const toggle = event.target.querySelector("#toggle").checked;
    setIntervalSeconds(!isNaN(secs) ? secs : 1.5);
    setIsAutoPlayEnabled(toggle);
    setIsSettingsMenuOpen(false);
  };

  return (
    <div className="main">
      <div className="circle"></div>
      <Card
        card={playingCards[currentCardIndex]}
        image={imageFiles[playingCards[currentCardIndex].img]?.src}
      />
      <div className="actions">
        <Button content={"barajar"} onClick={shuffle} />
        <Button
          content={"siguiente"}
          onClick={nextCard}
          disabled={currentCardIndex >= cards.length - 1}
        />
        <Button
          content={"pausar"}
          onClick={pause}
          disabled={currentCardIndex >= cards.length - 1 || !isPlaying}
        />
        <Button content={"configuración"} onClick={toggleSettingsMenu} />
      </div>
      {isSettingsMenuOpen && (
        <Settings
          onSubmit={handleSettingsSubmit}
          closeMenu={toggleSettingsMenu}
          toggled={isAutoPlayEnabled}
          handleToggled={handleAutoPlayToggle}
        />
      )}
    </div>
  );
}

export default App;
