
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import NovelDetails from "./pages/NovelDetails";
import FavoritesNovels from "./pages/Favorites";
import useFavorites from "./hooks/useFavorites";
import NotFound from "./pages/NotFound";
import MainLayout from"./layouts/MainLayout";



function App() {
  
  const {favorites,removeFromFavorites,addToFavorites} = useFavorites()

  return (<>  

      <Routes>
        <Route element={<MainLayout  favorites={favorites}/>}>
        <Route path="*" element={<NotFound />} />

        <Route
          path="/"
          element={<Home favorites={favorites} addToFavorites={addToFavorites} removeFromFavorites={removeFromFavorites}/>}
        />
        <Route
          path="/novel/:id"
          element={<NovelDetails favorites={favorites} addToFavorites={addToFavorites} removeFromFavorites={removeFromFavorites} />}
        />
        <Route
          path="/favorites"
          element={<FavoritesNovels favorites={favorites} removeFromFavorites={removeFromFavorites}/>}
        />
        </Route>
      </Routes>

      </>
  );
}

export default App;
