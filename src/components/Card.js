import React from "react";

export default function Card({ card, image }) {
  return (
    <div className="cardContainer">
      <div className="lotteryCard">
        <img src={image} alt={card.title} /> {/* Use the preloaded image */}
      </div>
      <h3>{`# ${card.number}`}</h3>
      <h2>{card.title}</h2>
    </div>
  );
}
