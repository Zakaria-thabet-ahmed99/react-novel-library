import novels from "../data/novels";
const CategoryFilter = ({setSelectedType , selectedType}) => {


    const categories = [
        "All",
        ...new Set(novels.map((novel) => novel.type))
        ];


        const countsType = novels.reduce((acc, item) => {
            acc[item.type] = (acc[item.type] || 0) + 1;
            return acc;
        }, {});

    return ( <div className="category-filter  ">
    
    <select 
        value={selectedType}
        onChange={(e) => setSelectedType(e.target.value)}
        >
        {
            categories.map((category) => (
                
            <option
                key={category}
                value={category}
            >
            {category} {category === "All"
    ? ` (${novels.length})`
    : ` (${countsType[category]})`}
            
            </option>
        ))
        }
        </select> 
        </div>
        );
}

export default CategoryFilter;