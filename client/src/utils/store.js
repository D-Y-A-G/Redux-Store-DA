import { createStore } from "@reduxjs/toolkit";
import reducers from "./reducers";

const store = createStore(reducers);

export default store;

//same as export default createStore(reducers)
