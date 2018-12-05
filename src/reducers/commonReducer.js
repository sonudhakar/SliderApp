import { combineReducers } from "redux";
import SlideReducer from "../reducers/slideReducer";
import ContactReducer from "../reducers/contactReducer";

export default combineReducers({
  SlideReducer,
  ContactReducer
});
