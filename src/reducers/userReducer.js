export default (state, action) => {
  if (action.type === "SET_USER") {
    return { ...state, ...action.payload };
  }
  if (action.type === "DELETE_USER") {
    return null;
  }
  return state;
};
