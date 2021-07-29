import React, { useState, useEffect } from "react";
import { useTypedSelectorHook } from "../hooks/useTypedSelectorHook";
import { useActions } from "../hooks/useActions";

const CocktailsList: React.FC = () => {

    const searchCocktail = useActions();
    const [cocktailName, setCocktailName] = useState("");
    const situation = useTypedSelectorHook((state) => state.cocktails);
    const { data, error, loading } = situation;

    useEffect(() => {
        console.log(data);
        console.log(situation);
        
    }, [situation, data])

    const onSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        searchCocktail(cocktailName);
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type="text" value={cocktailName} onChange={(e) => setCocktailName(e.target.value)} />
                <button type="submit">Search</button>
                {error && <h3>{error}</h3>}
                {loading && <h3>Loading...</h3>}
                {!data && <h3>NO SUCH COCKTAIL</h3>}
                {!loading && !error && data && data.map((x) => {return (
                <div>
                    <h3>{x.strDrink}</h3>
                    <img width="300px" height="300px" src={x.strDrinkThumb} alt=""/>
                    <p style={{wordWrap: "break-word", width:"300px"}}>{x.strInstructionsIT}</p>
                </div>
                )})}
            </form>
        </div>
    )
}

export default CocktailsList;