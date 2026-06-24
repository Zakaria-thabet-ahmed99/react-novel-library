import { useState, useEffect } from "react";

const useFavorites = () => {
  const [favorites, setFavorites] = useState(() =>
    JSON.parse(localStorage.getItem("favorites")) || []
  );

  useEffect(() => {
    localStorage.setItem(
      "favorites",
      JSON.stringify(favorites)
    );
  }, [favorites]);

  const addToFavorites = (novelId) => {
    setFavorites((prevFavorites) => {
      if (prevFavorites.includes(novelId)) {
        return prevFavorites;
      }

      return [...prevFavorites, novelId];
    });
  };

  const removeFromFavorites = (novelId) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter(
        (id) => id !== novelId
      )
    );
  };

  return {
    favorites,
    addToFavorites,
    removeFromFavorites,
  };
};

export default useFavorites;