import { Provider } from "react-redux";
import { store } from "../state/store";
import CocktailsList from "./CocktailsList";

const App = () => {
    return (
        <Provider store={store}>
            <div>
                <h1>Search for a cocktail</h1>
                <CocktailsList />
            </div>
        </Provider>
    )
}

export default App;