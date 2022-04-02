import { Dispatch } from "redux";
import { User } from "../../../models/User.model";
import { UserService } from "../../../services/user.service";
import { requestHelper } from "../../reducers/loader/request.helper";
import { Action } from "../../types/action.type";
import { ADD_POINTS, GET_USER } from "./user.types";

const userService = UserService.getInstance();

//GET_USER

export const getUser = (user: User): Action => ({
  type: GET_USER,
  payload: user,
});

export function fetchUser() {
  return async (dispatch: Dispatch) => {
    await requestHelper(dispatch, "getUser", async () => {
      await userService.getUser().then((response) => {
        dispatch(getUser(response));
      });
    });
  };
}

//ADD_POINTS

export const addPoints = (amount: number): Action => ({
  type: ADD_POINTS,
  payload: amount,
});

export function addPointsToUser(amount: number) {
  return async (dispatch: Dispatch) => {
    await requestHelper(dispatch, "addPoints", async () => {
      await userService.addPoints(amount).then((response) => {
        dispatch(addPoints(amount));
      });
    });
  };
}
