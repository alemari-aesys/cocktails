import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { searchCocktail } from "../state/action-creators";

export const useActions = () => {
    const dispatch = useDispatch();

    return bindActionCreators(searchCocktail, dispatch);
}