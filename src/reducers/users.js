import { normalizedUsers } from "../fixtures";

/* export default (usersState = normalizedUsers, action) => {
  return usersState;
}; */

export default (usersState = normalizedUsers, action) => {
  switch (action.type) {
    case "ADD_REVIEW": {
      const newUsersState = [...normalizedUsers];

      console.log(newUsersState);

      newUsersState.push({
        id: action.payload.userId,
        name: action.payload.userName
      });
      return newUsersState;
    }
    default:
      return usersState;
  }
  return usersState;
};
