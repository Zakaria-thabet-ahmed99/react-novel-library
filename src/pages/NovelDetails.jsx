import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import novels from "../data/novels";

const NovelDetails = ({
  favorites,
  removeFromFavorites,
  addToFavorites,
}) => {
  const { id } = useParams();

  const novel = novels.find((novel) => novel.id === Number(id));

  useEffect(() => {
    if (novel) {
      document.title = novel.title;
    }
  }, [novel]);

  if (!novel) {
    return (
      <div className="container">
        <h1>Novel Not Found</h1>
      </div>
    );
  }

  const isFavorite = favorites.includes(novel.id);

  return (
    <div className="container">
      <div className="novel-details">
        <div className="novel-image">
          <img src={novel.image} alt={novel.title} />
        </div>

        <div className="novel-content">
          <h1>{novel.title}</h1>

          <p>
        <strong>ID:</strong> {novel.id}
          </p>

          <p>
            <strong>Author:</strong> {novel.author}
          </p>

          <p>
            <strong>Category:</strong> {novel.type}
          </p>

          <p className="description">
            {novel.description}
          </p>

          <button
            className="favorite-btn"
            onClick={() =>
              isFavorite
                ? removeFromFavorites(novel.id)
                : addToFavorites(novel.id)
            }
          >
            {isFavorite
              ? "Remove From Favorites"
              : "Add To Favorites"}
          </button>

          <Link className="back-btn" to="/">
            ← Back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NovelDetails;