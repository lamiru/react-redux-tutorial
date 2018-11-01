import { ADD_ARTICLE } from "../constants/action-types";
import uuidv1 from "uuid";
const initialState = {
  articles: [
    { title: "testzzz", id: uuidv1() },
    { title: "testzz1s", id: uuidv1() },
  ]
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ARTICLE:
      return { ...state, articles: [...state.articles, action.payload] };
    default:
      return state;
  }
};
export default rootReducer;
