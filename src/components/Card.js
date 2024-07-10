import React from 'react';

export default function Card({card}) {
  return (
    <div className="cardContainer">
      <div className="lotteryCard">
        <img src={card.img} alt={card.title} />
      </div>
      <h3>{`# ${card.number}`}</h3>
      <h2>{card.title}</h2>
    </div>
  );
}