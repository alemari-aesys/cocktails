import { combineReducers } from "redux";
import { cocktailsReducer } from "./cocktailsReducer";

const reducers = combineReducers({
    cocktails: cocktailsReducer
})

export default reducers;
export type RootState = ReturnType<typeof reducers>;