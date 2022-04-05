// Cada reducer tiene su propio state

const initialState = {
  productos: [],
  loading: false,
  error: null
};

export default function(state = initialState, action) {
  switch(action.type) {
    default:
      return state;
  }
}