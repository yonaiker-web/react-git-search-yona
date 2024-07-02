import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
  const [currentGifs, setCurrentGifs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getImg = async () => {
    const newImg = await getGifs(category);
    setCurrentGifs(newImg);
    setIsLoading(false);
  };

  useEffect(() => {
    getImg();
  }, []);

  return { images: currentGifs, isLoading };
};
