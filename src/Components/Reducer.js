const reducer = (state, action) => {
  switch (action.type) {
    case "name":
      return { ...state, name: action.payload };
    case "email":
      return { ...state, email: action.payload };
    case "phoneno":
      return { ...state, phoneno: action.payload };
    case "message":
      return { ...state, message: action.payload };
    default:
      return state;
  }
};

export default reducer;
