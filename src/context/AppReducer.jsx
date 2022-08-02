export default (state, action) => {
  console.log(state);
  switch (action.type) {
    case "EXPEN": {
      const trans = state.transactions;
      const payload = action.payload;
      payload.id = trans.length + 1;
      state.transactions = [payload, ...trans];

      console.log(state.transactions);
      return { ...state };
    }
    default:
      return state;
  }
};
