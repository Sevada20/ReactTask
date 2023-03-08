export const categoriesReducer = (state, action) => {
  switch (action.type) {
    case "SET_CATEGORIES":
      return {
        ...state,
        categories: [...action.payload],
      };
    case "SET_PHOTOS":
      return {
        ...state,
        photoCats: [...action.photosCats],
      };
    case "ADD_PHOTOS":
      return {
        ...state,
        photoCats: [...state.photoCats, ...action.photosCats],
      };
    default:
      return state;
  }
};
