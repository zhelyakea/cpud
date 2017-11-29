import * as actionTypes from "../constants/actionTypes";

export const addUser = user => ({
  type: actionTypes.ADD_USER,
  user
});
export const deleteUser = userId => ({
  type: actionTypes.DELETE_USER,
  userId
});
export const changeUser = (fieldType, fieldValue, userId) => ({
  type: actionTypes.CHANGE_USER,
  fieldType,
  fieldValue,
  userId
});
export const changeUserDate = (dateType, fieldValue, userId) => ({
  type: actionTypes.CHANGE_DATE_USER,
  dateType,
  fieldValue,
  userId
});
