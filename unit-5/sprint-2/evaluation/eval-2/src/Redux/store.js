import { reducer as authReducer } from "./AuthReducer/reducer";
import { reducer as productReducer } from "./ProductReducer/reducer";
import { reducer as cartReducer } from "./CartReducer/reducer";
import { applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import { combineReducers, legacy_createStore } from "redux";
// import { authReducer } from "./AuthReducer/reducer";
// import { cartReducer } from "./CartReducer/reducer";
// import { productReducer } from "./ProductReducer/reducer";

const rootReducer = combineReducers({
  authReducer : authReducer,
  productReducer : productReducer,
  cartReducer : cartReducer 
});

export const store = legacy_createStore(rootReducer,(applyMiddleware(thunk)));

// NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks
if (window.Cypress) {
  window.store = store;
}
