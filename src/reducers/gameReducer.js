import {
  GET_GAMES,
  ON_CHANGE,
  GET_BRANDS,
  ON_MENU_CLICK
} from "../actions/type";

const initialState = {
  games: [],
  items: [],
  brands: [],
  checkedbrands: [],
  searchtext: "",
  menuState: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_GAMES:
      return {
        ...state,
        games: action.payload,
        items: action.payload
      };
    case ON_CHANGE:
      return {
        ...state,
        items: action.payload.newState,
        searchtext: action.payload.searchText,
        checkedbrands: action.payload.checkedBrands
      };
    case GET_BRANDS:
      return {
        ...state,
        brands: action.payload,
        checkedbrands: action.payload
      };
    case ON_MENU_CLICK:
      return {
        ...state,
        menuState: action.payload
      };
    default:
      return state;
  }
}
