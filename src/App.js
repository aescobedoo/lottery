 import "./App.css";
 import React, { useState, useEffect } from "react";
 import cards from "./cards";
 import Card from "./components/Card";
 import Button from "./components/Button";
 import Settings from "./components/Settings";
 import corre from "./resources/corre.mp3";

 const shuffleArray = (array) => {
   let shuffledArray = [...array]; // Create a copy of the array to avoid mutating the original
   for (let i = shuffledArray.length - 1; i > 0; i--) {
     const j = Math.floor(Math.random() * (i + 1));
     [shuffledArray[i], shuffledArray[j]] = [
       shuffledArray[j],
       shuffledArray[i],
     ];
   }
   return shuffledArray;
 };

 function App() {
   const [playingCards, setPlayingCards] = useState(shuffleArray(cards));
   const [card, setCard] = useState(0);
   const [play, setPlay] = useState(false);

   const shuffle = () => {
    setPlayingCards(shuffleArray(cards));
    setCard(0);
    playAudio(corre); // Play introductory audio
     setTimeout( () => {
      setPlay(true);
     }, 2000);
   };

   const nextCard = () => {
     setPlay(true);
     if (card >= cards.length - 2) {
       if (card >= cards.length - 1) {
         setPlay(false);
         return;
       }
       setCard((prev) => prev + 1);
     } else {
       setCard((prev) => prev + 1);
     }
   };

   const pause = () => {
     setPlay(false);
   };

   const playAudio = (audioFile) => {
     const audio = new Audio(audioFile);
     audio
       .play()
       .catch((error) => console.error(`Error playing audio: ${error}`));
   };

   useEffect(() => {
     if (!play) {
       return;
     }
     playAudio(playingCards[card].audio); // Play card audio
     const sec = seconds * 1000;
     const timeout = setTimeout(() => {
       nextCard();
     }, sec);

     return () => {
       clearTimeout(timeout);
     };
   }, [play, card]);

   const [seconds, setSeconds] = useState(1.5);
   const [menu, setMenu] = useState(false);
   const [toggled, setToggled] = useState(true); // Set initial state to true for checked by default

   const settings = (event) => {
     event.preventDefault();
     setMenu((prev) => !prev);
   };

   const handleToggle = () => {
     setToggled((prev) => !prev);
   };

   const handleSubmit = (event) => {
     event.preventDefault();
     let secs = event.target.querySelector("#inputText").value;
     let toggle = event.target.querySelector("#toggle").checked; // use .checked instead of .value
     setMenu(false);
     setToggled(toggle);
     try {
       secs = parseFloat(secs);
       if (!isNaN(secs)) {
         setSeconds(secs);
       } else {
         setSeconds(1.5);
       }
     } catch (error) {
       console.log(error);
     }
   };

   return (
     <div className="main">
       <div className="circle"></div>
       <Card card={playingCards[card]} />
       <div className="actions">
         <Button content={"barajar"} onClick={shuffle} />
         <Button
           content={"siguiente"}
           onClick={nextCard}
           disabled={card >= cards.length - 1}
         />
         <Button
           content={"pausar"}
           onClick={pause}
           disabled={card >= cards.length - 1 || !play}
         />
         <Button content={"configuración"} onClick={settings} />
       </div>
       {menu && (
         <Settings
           onSubmit={handleSubmit}
           closeMenu={settings}
           toggled={toggled} // Pass the state
           handleToggled={handleToggle} // Pass the updater function
         />
       )}
     </div>
   );
 }

 export default App;
