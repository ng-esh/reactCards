// hooks.js
import { useState } from "react";
import axios from "axios";

/** Custom hook for toggling a flip state. */
export function useFlip() {
  const [isFacingUp, setIsFacingUp] = useState(true);

  const flipCard = () => {
    setIsFacingUp(isUp => !isUp);
  };

  return [isFacingUp, flipCard];
}
/** Custom hook for handling API requests using axios */
export function useAxios(baseUrl, useFullUrl = false) {
    const [data, setData] = useState([]);
    const [deckId, setDeckId] = useState(null);
  
    /** Fetch data from API and add to state */
    const addData = async (endpoint = "") => {
      try {
        let url = useFullUrl ? baseUrl : `${baseUrl}${endpoint}`;
  
        // Special case for Deck of Cards API
        if (baseUrl.includes("deckofcardsapi")) {
          let deckURL = baseUrl + "new/shuffle/";
          let drawURL = baseUrl + `${deckId}/draw/?count=1`;
  
          if (!deckId) {
            const deckResponse = await axios.get(deckURL);
            setDeckId(deckResponse.data.deck_id);
            drawURL = baseUrl + `${deckResponse.data.deck_id}/draw/?count=1`;
          }
  
          url = drawURL;
        }
  
        if (!url) {
          console.error("Invalid API URL.");
          alert("Error: No valid API request was made.");
          return;
        }
  
        const response = await axios.get(url);
        setData(data => [...data, { ...response.data }]);
      } catch (error) {
        console.error("API Request Failed:", error);
        alert("Error fetching data. Please try again later.");
      }
    };
  
    /** Reset function to clear all stored data */
    const clearData = () => {
      setData([]);
      setDeckId(null);
    };
  
    return [data, addData, clearData];
  }