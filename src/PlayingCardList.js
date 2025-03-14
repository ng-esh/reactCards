import React from "react";
import { v1 as uuid } from "uuid";
import { useAxios } from "./hooks.js"; // ✅ Using useAxios
import PlayingCard from "./PlayingCard";
import "./PlayingCardList.css";

/** Renders a list of playing cards.
 * Can also add a new card at random. */
function CardTable() {
  const [cards, addCard, clearCards] = useAxios("https://deckofcardsapi.com/api/deck/", false);

  return (
    <div className="PlayingCardList">
      <h3>Pick a card, any card!</h3>
      <div>
        <button onClick={addCard}>Add a playing card!</button>
        <button onClick={clearCards}>Clear all playing cards</button> {/* ✅ Clear button */}
      </div>
      <div className="PlayingCardList-card-area">
        {cards.map(cardData => (
          <PlayingCard key={uuid()} front={cardData.cards[0].image} />
        ))}
      </div>
    </div>
  );
}

export default CardTable