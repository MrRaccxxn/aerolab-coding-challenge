import { User } from "../../../models/User.model";
import { ADD_POINTS, GET_USER } from "../../actions/user/user.types";
import { Action } from "../../types/action.type";

export interface UserState {
  user: User;
}

const initialState: UserState = {
  user: <User>{},
};

export const UserReducer = (
  state: UserState = initialState,
  action: Action
) => {
  switch (action.type) {
    case GET_USER: {
      return { user: action.payload };
      break;
    }

    case ADD_POINTS: {
      return {
        user: {
          ...state.user,
          points: action.payload + state.user.points,
        },
      };
      break;
    }

    default:
      return state;
      break;
  }
};
