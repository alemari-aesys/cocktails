export {}

interface dataInt {
    strDrink: string,
    strDrinkThumb: string,
    strInstructionsIT: string
}

interface cocktailsState {
    data: dataInt[],
    loading: boolean,
    error: string | null
}

export interface searchCocktailAction {
    type: ActionType.SEARCH_COCKTAIL,
}

export interface searchCocktailSuccessAction {
    type: ActionType.SEARCH_COCKTAIL_SUCCESS,
    payload: dataInt[]
}

export interface searchCocktailErrorAction {
    type: ActionType.SEARCH_COCKTAIL_ERROR,
    payload: string
}

export enum ActionType {
    SEARCH_COCKTAIL = "search_cocktail",
    SEARCH_COCKTAIL_SUCCESS = "search_cocktail_success",
    SEARCH_COCKTAIL_ERROR = "search_cocktail_error"
}

export type Action =
    | searchCocktailAction
    | searchCocktailSuccessAction
    | searchCocktailErrorAction;

const initialState = {
    data: [],
    error: null,
    loading: false
}

export const cocktailsReducer = (state: cocktailsState = initialState, action: Action): cocktailsState => {
    switch (action.type) {
        case ActionType.SEARCH_COCKTAIL: 
            return {data: [], loading: true, error: null};
        case ActionType.SEARCH_COCKTAIL_SUCCESS:
            return {data: action.payload, loading: false, error: null}
        case ActionType.SEARCH_COCKTAIL_ERROR:
            return {data: [], loading: false, error: action.payload}
        default:
            return state;
    }
}