import React from "react";
import { v1 as uuid } from "uuid";
import { useAxios } from "./hooks"; // ✅ Using useAxios
import PlayingCard from "./PlayingCard";
import "./PlayingCardList.css";

/** Renders a list of playing cards.
 * Can also add a new card at random. */
function CardTable() { // ✅ Keeping the function name the same
  const [cards, addCard] = useAxios("https://deckofcardsapi.com/api/deck/new/draw/");

  /** Add a new card to the list with a unique ID */
  const handleAddCard = async () => {
    await addCard();
  };

  return (
    <div className="PlayingCardList">
      <h3>Pick a card, any card!</h3>
      <div>
        <button onClick={handleAddCard}>Add a playing card!</button>
      </div>
      <div className="PlayingCardList-card-area">
        {cards.map(cardData => (
          <PlayingCard key={uuid()} front={cardData.cards[0].image} />
        ))}
      </div>
    </div>
  );
}

export default CardTable; // ✅ Keeping the same export name
