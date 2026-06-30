import { useState,useEffect  } from "react";

import NovelCard from "../components/NovelCard";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";

import novels from "../data/novels";

const Home = ({favorites,removeFromFavorites,addToFavorites}) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedType, setSelectedType] = useState("All");
    const [sortOption, setSortOption] = useState("default");

    const filteredNovels = novels.filter((novel) => {
        const matchesSearch  = novel.title.toLowerCase().includes(searchTerm.toLowerCase());
    
        const matchesType = selectedType === "All" || novel.type === selectedType;
        return matchesSearch  && matchesType;
        });
        
        const sortedNovels = [...filteredNovels];
        if (sortOption === "title-asc") {
            sortedNovels.sort((a, b) =>
                a.title.localeCompare(b.title)
            );
        }
        
        if (sortOption === "title-desc") {
            sortedNovels.sort((a, b) =>
                b.title.localeCompare(a.title)
            );
        }

        useEffect(() => {
            document.title = "Novel Library";
        }, []);

    return ( <div className="container">
        
        <section className="hero">

            <p>
            Discover your next favorite novel from our curated collection.
            </p>
        </section>
        <section className="stats">
            <div className="stat-card">
                <h3>{novels.length}</h3>
                <p>Total Novels</p>
            </div>

            <div className="stat-card">
                <h3>
                {new Set(novels.map(novel => novel.type)).size}
                </h3>
                <p>Categories</p>
            </div>

            <div className="stat-card">
                <h3>{favorites.length}</h3>
                <p>Favorites</p>
            </div>
</section>

        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm}  />
        <CategoryFilter selectedType={selectedType} setSelectedType={setSelectedType}/>

        <div className="category-filter  ">
        <select
        value={sortOption}
        onChange={(e) => setSortOption(e.target.value)}
        >
        <option value="default">
            Default
        </option>

        <option value="title-asc">
            Title A-Z
        </option>

        <option value="title-desc">
            Title Z-A
        </option>
        </select>
        </div>
        <div className="novels-container">
        {filteredNovels.length > 0 ? (
            sortedNovels.map((novel) => (
            <NovelCard key={novel.id} novel={novel}  isFavorite={favorites.includes(novel.id)} addToFavorites={addToFavorites} removeFromFavorites={removeFromFavorites}/>
                ))
        ) : (
                <p>No novels found</p>
        )}
        </div>
        </div>  
    );
}

export default Home;