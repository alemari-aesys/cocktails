import axios from "axios";
import { ActionType } from "../reducers/cocktailsReducer";
import { Action } from "../reducers/cocktailsReducer";
import { Dispatch } from "redux";


export const searchCocktail = (name: string) => {
    
    return async (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.SEARCH_COCKTAIL
        })

        try {            
            const res = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`)
            
            dispatch({
                type: ActionType.SEARCH_COCKTAIL_SUCCESS,
                payload: res.data.drinks
            })
        } catch (error) {
            dispatch({
                type: ActionType.SEARCH_COCKTAIL_ERROR,
                payload: error.message
            })
        }
    }
} 