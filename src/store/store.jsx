import { createStore } from "redux";
import reducer from "./reducer/reducer";

let initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: ""
};

let store = createStore(reducer);

store.subscribe(() => {
  console.log(store.getState());
});

export default store;
