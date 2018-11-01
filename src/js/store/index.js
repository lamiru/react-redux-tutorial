import { createStore } from "redux";
import rootReducer from "../reducers/index";

console.log(rootReducer);
const store = createStore(rootReducer);

export default store;
