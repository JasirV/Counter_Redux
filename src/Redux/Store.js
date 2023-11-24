import { createStore } from "redux";
import counterReducer from "./Counter/CounderReducer";

const store =createStore(counterReducer)
export default store;