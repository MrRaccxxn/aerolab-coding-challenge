import { Dispatch } from "redux";
import {
  requestFinished,
  requestStarted,
} from "../../actions/loader/loader.actions";

export const requestHelper = async (
  dispatch: Dispatch,
  requestName: string,
  request: Function
) => {
  dispatch(requestStarted(requestName));

  try {
    const result = await request();
    dispatch(requestFinished(requestName));
    return result;
  } catch (error) {
    console.log("error");
  }
};
