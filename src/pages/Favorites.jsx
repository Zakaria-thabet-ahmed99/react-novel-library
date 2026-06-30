import { useEffect } from "react";
import NovelCard from "../components/NovelCard";
import Description from "../components/Description";
import { Link } from "react-router-dom";
import Author from "../components//Author";
import Title from "../components//Title";
import Type from "../components//Type";

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

                // <div key={novel.id} className="novel-card"  >
                //     <Link to={`/novel/${novel.id}`} className="novel-link">
                // <img src={novel.image} alt={novel.title}/>

                // <div className="novel-content">
                //     <Title title={novel.title} />
                //     <Author author={novel.author} />
                //     <Type  type={novel.type} />
                //     <Description description={novel.description} />
                // </div>
                // </Link>
                // <button  onClick={() =>removeFromFavorites(novel.id)}>
                //     Remove From Favorites
                // </button>
                // </div>
                ))
    
        :   (
                <><p>You haven't added any favorite novels yet.</p><Link to="/">Browse Novels</Link></>
            )}
    </div>
    
    </div> 
    );
}

export default FavoritesNovels;