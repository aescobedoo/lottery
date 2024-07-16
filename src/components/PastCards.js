import React from "react";

export default function PastCard({ card, image, priority }) {
  return (
    <div className={`pastLotteryCard`} id={`prio-${priority}`}>
      <img src={image} alt={card.title} /> {/* Use the preloaded image */}
    </div>
  );
}
