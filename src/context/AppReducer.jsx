export default (state, action) => {
  switch (action.type) {
    case "EXPEN": {
      const trans = state.transactions;
      const payload = action.payload;
      payload.id = trans.length + 1;
      state.transactions = [payload, ...trans];

      return { ...state };
    }
    default:
      return state;
  }
};
