export default (state, action) => {
  if (action.type === "SET_USER") {
    return { ...state, ...action.payload };
  }
  return state;
};
