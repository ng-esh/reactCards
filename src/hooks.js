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
export function useAxios(baseUrl) {
    const [data, setData] = useState([]);
  
    /** Fetch data from API and add to state */
    const addData = async (endpoint = "") => {
      const response = await axios.get(`${baseUrl}${endpoint}`);
      setData(data => [...data, { ...response.data }]);
    };
  
    return [data, addData];
  }

