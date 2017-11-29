import * as actionTypes from "../constants/actionTypes";
const initial = {
  index: {},
  list: []
};
export default function users(state = initial, action) {
  const newstate = { ...state };
  switch (action.type) {
    case actionTypes.ADD_USER:
      newstate.index[action.user.id] = newstate.list.length;
      newstate.list.push({ ...action.user });
      return newstate;
    case actionTypes.DELETE_USER:
      newstate.list.splice(newstate.index[action.userId], 1);
      newstate.index = {};
      newstate.list.forEach((user, index) => (newstate.index[user.id] = index));
      return newstate;
    case actionTypes.CHANGE_USER:
      newstate.list[newstate.index[action.userId]][action.fieldType] =
        action.fieldValue;
      return newstate;
    case actionTypes.CHANGE_DATE_USER:
      newstate.list[newstate.index[action.userId]].date[action.dateType] =
        action.fieldValue;
      return newstate;
    default:
      return state;
  }
}
