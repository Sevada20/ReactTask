const ADD_CATEGORIES = "ADD_CATEGORIES";
const ADD_ONE_CATEGORIE = "ADD_ONE_CATEGORIE";

const initialState = {
  categories: [],
  categorie: [],
};
function categoriesReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_CATEGORIES:
      return {
        ...state,
        categories: action.categories,
      };
    case ADD_ONE_CATEGORIE:
      return {
        ...state,
        categorie: [...action.categorie],
      };
    case "MORE":
      return {
        ...state,
        categorie: [...state.categorie, ...action.moreCategorie],
      };
    default:
      return state;
  }
}

export const addCategoriesActionCreator = (categories) => ({
  type: ADD_CATEGORIES,
  categories,
});

export const addOneCategorieActionCreator = (categorie) => ({
  type: ADD_ONE_CATEGORIE,
  categorie,
});
export const moreActionCreator = (moreCategorie) => ({
  type: "MORE",
  moreCategorie,
});

export default categoriesReducer;
