import { createStore } from "redux";
import routeReducer from "./reducer";

const store = createStore(routeReducer);
export default store;
