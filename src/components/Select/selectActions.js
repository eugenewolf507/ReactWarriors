export const Type = {
  CHANGE_SELECT: 'CHANGE_SELECT',
};

export const selectAction = selectValue => ({
  type: Type.CHANGE_SELECT,
  payload: selectValue,
});
