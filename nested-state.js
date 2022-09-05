const redux = require("redux");
const produce = require("immer").produce;

const createStore = redux.createStore;
const initialState = {
  name: "Vishwas",
  address: {
    street: "123 main st",
    city: "Boston",
    state: "MA",
  },
};

const STREET_UPDATED = "STREET_UPDATED";

const updatedStreet = (street) => {
  return {
    type: STREET_UPDATED,
    payload: street,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case STREET_UPDATED:
      //   return {
      //     ...state,
      //     address: {
      //       ...state.address,
      //       street: action.payload,
      //     },
      //   };
      return produce(state, (draft) => {
        draft.address.street = action.payload;
      });
    default:
      return state;
  }
};

const store = createStore(reducer);
console.log("initialState", store.getState());

const unsubscribe = store.subscribe(() => {
  console.log("updated state", store.getState());
});
store.dispatch(updatedStreet("456 main st"));
unsubscribe();
