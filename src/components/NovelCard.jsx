import { Link } from "react-router-dom";

import Description from "./Description";
import Author from "./Author";
import Title from "./Title";
import Type from "./Type";

const NovelCard = ({ novel,addToFavorites,removeFromFavorites,isFavorite }) => {

  return (
    <div  >
    <div className="novel-card">
    {isFavorite && (
  <span className="favorite-badge">
    ❤️
  </span>
)}
    <Link to={`/novel/${novel.id}`} className="novel-link">
      
        <img src={novel.image} alt={novel.title}/>
        <div className="novel-content">
        <Title title={novel.title} />
        <Author author={novel.author} />
        <Type type={novel.type} />
        <Description description={novel.description} />
        </div>
  
    </Link>
    <button onClick={() =>
      (isFavorite)? 
      removeFromFavorites(novel.id):
      addToFavorites(novel.id)} >
      
      {(isFavorite) ? "Remove From Favorites":"Add To Favorites"}
      </button>

    </div>

    </div>

  )
};
export default NovelCard;