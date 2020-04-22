import { GET_GAMES, ON_CHANGE, GET_BRANDS, ON_MENU_CLICK } from "./type";
import axios from "axios";

export const getGames = () => async dispatch => {
  const res = await axios.get(
    "https://raw.githubusercontent.com/Barada-Prasanna-Jethy/__data__/master/gamelist.json"
  );

  dispatch({
    type: GET_GAMES,
    payload: res.data
  });
  return res;
};
export const onMenuClick = state => async dispatch => {
  dispatch({
    type: ON_MENU_CLICK,
    payload: state
  });
};
export const onChange = obj => async dispatch => {
  dispatch({
    type: ON_CHANGE,
    payload: obj
  });
};
export const getBrands = brands => async dispatch => {
  dispatch({
    type: GET_BRANDS,
    payload: brands
  });
};
