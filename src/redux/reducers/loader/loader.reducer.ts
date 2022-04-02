import { Reducer } from "redux";
import {
  ActionLoader,
  REQUEST_FAILED,
  REQUEST_FINISHED,
  REQUEST_STARTED,
} from "../../actions/loader/loader.types";

export interface IRequest {
  requestName: string; //Convert to enum
}

export interface LoaderState {
  requests: Array<IRequest>;
  inProgress: boolean;
  error: boolean;
}

const initialState: LoaderState = {
  requests: [],
  inProgress: true,
  error: false,
};

export const LoaderReducer = (
  state: LoaderState = initialState,
  action: ActionLoader
): LoaderState => {
  switch (action.type) {
    case REQUEST_STARTED: {
      const existingCall = state.requests.find(
        (request) => request.requestName === action.request.requestName
      );

      if (existingCall) {
        return {
          ...state,
          inProgress: true,
          requests: state.requests.map((request) =>
            request.requestName === action.request.requestName
              ? { ...request }
              : request
          ),
        };
      }

      return {
        ...state,
        inProgress: true,
        requests: [...state.requests, action.request],
      };
    }

    case REQUEST_FINISHED: {
      return {
        ...state,
        inProgress: false,
        requests: state.requests.filter(
          (request) => request.requestName !== action.request.requestName
        ),
      };
    }

    case REQUEST_FAILED: {
    }
    default: {
      return state;
    }
  }
};
