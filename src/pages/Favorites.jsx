import { useEffect } from "react";
import NovelCard from "../components/NovelCard";
import { Link } from "react-router-dom";

import novels from "../data/novels"

const FavoritesNovels = ({favorites,removeFromFavorites}) => {

    const favoriteNovels = novels.filter(novel => favorites.includes(novel.id))

        
    useEffect(() => {
        document.title = "Favorites";
        }, []);

    return (
    <div className="container">
        <h1><span>❤️</span> My Favorite Novels</h1>
    <div className="novels-container">
        
        {favoriteNovels.length > 0 
        ?  (favoriteNovels.map(novel => 
            <NovelCard key={novel.id} novel={novel}  isFavorite={favorites.includes(novel.id)} removeFromFavorites={removeFromFavorites}/>
            
                ))
    
        :   (
                <><p>You haven't added any favorite novels yet.</p><Link to="/">Browse Novels</Link></>
            )}
    </div>
    
    </div> 
    );
}

export default FavoritesNovels;