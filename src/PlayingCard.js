import React from "react";
import {useFlip} from "./hooks.js";
import backOfCard from "./back.png";
import "./PlayingCard.css";

/** Renders a single playing card with flip functionality. */
function PlayingCard({ front, back = backOfCard }) {
  const [isFacingUp, flipCard] = useFlip(); // Using useFlip hook

  return (
    <img
      src={isFacingUp ? front : back}
      alt="playing card"
      onClick={flipCard}
      className="PlayingCard Card"
    />
  );
}

export default PlayingCard;
