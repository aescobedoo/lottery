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
import PastCard from "./components/PastCards"; // Import PastCard component
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
  // Initialize loading cards to memory and assign random order of cards
  const memoCards = useMemo(() => cards, []);
  const [playingCards, setPlayingCards] = useState(shuffleArray(memoCards));

  // Manage loading files tp memory to reduce probability of error when loading the audios/images
  const [audioFiles, setAudioFiles] = useState({});
  const [imageFiles, setImageFiles] = useState({});

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

  const memoAudios = useMemo(() => audioFiles, [audioFiles]);
  const memoImages = useMemo(() => imageFiles, [imageFiles]);

  const playAudio = useCallback(
    (audioFile) => {
      if (memoAudios[audioFile]) {
        audioElement.current.src = memoAudios[audioFile];
        audioElement.current.currentTime = 0;
        audioElement.current
          .play()
          .catch((error) => console.error(`Error playing audio: ${error}`));
      }
    },
    [memoAudios]
  );

  //Manage desired settings
  const [intervalSeconds, setIntervalSeconds] = useState(4);
  const [isSettingsMenuOpen, setIsSettingsMenuOpen] = useState(false);
  const [isAutoPlayEnabled, setIsAutoPlayEnabled] = useState(true);

  const handleSettingsSubmit = (event) => {
    event.preventDefault();
    const secs = parseFloat(event.target.querySelector("#inputText").value);
    const toggle = event.target.querySelector("#toggle").checked;
    setIntervalSeconds(!isNaN(secs) ? secs : 4);
    setIsAutoPlayEnabled(toggle);
    setIsSettingsMenuOpen(false);
  };

  const toggleSettingsMenu = (event) => {
    event.preventDefault();
    setIsSettingsMenuOpen((prevState) => !prevState);
  };

  const handleAutoPlayToggle = () => {
    setIsAutoPlayEnabled((prevState) => !prevState);
  };

  // Manage game state and restart
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const shuffle = useCallback(() => {
    setPlayingCards(shuffleArray(memoCards));
    setCurrentCardIndex(0);
    playAudio("corre");
    setTimeout(() => {
      setIsPlaying(true);
    }, 2200);
  }, [memoCards, playAudio]);

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
    playAudio,
    playingCards,
    intervalSeconds,
    isAutoPlayEnabled,
    nextCard,
  ]);

  // Determine previous cards and assign priority
  const previousCards = useMemo(() => {
    const startIndex = Math.max(currentCardIndex - 3, 0);
    const prevCards = playingCards.slice(startIndex, currentCardIndex);
    const priorities = ["2", "1", "0"];
    return prevCards.map((card, index) => ({
      ...card,
      priority: priorities[prevCards.length - 1 - index] || "2",
    }));
  }, [currentCardIndex, playingCards]);

  return (
    <div className="main">
      <div className="past">
        {previousCards.map((card, index) => (
          <PastCard
            key={index}
            card={card}
            image={memoImages[card.img]?.src}
            priority={card.priority}
          />
        ))}
      </div>
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
