import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { userMiddleware } from "./user/userMiddleware";
import { userReducer } from "./user/userReducers";

const rootReducers = combineReducers({
    user: userReducer
})

const store = createStore(rootReducers, composeWithDevTools(
    applyMiddleware( 
        userMiddleware,
    )
));

export default store;