import {
  ActionLoader,
  REQUEST_FAILED,
  REQUEST_FINISHED,
  REQUEST_STARTED,
} from "../../actions/loader/loader.types";

export interface IRequest {
  requestName: string; //Convert to enum
  inProgress: boolean;
  error: boolean;
}

export interface LoaderState {
  requests: Array<IRequest>;
}

const initialState: LoaderState = {
  requests: [],
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
          requests: state.requests.map((request) =>
            request.requestName === action.request.requestName
              ? { ...request, inProgress: true }
              : request
          ),
        };
      }

      return {
        requests: [...state.requests, action.request],
      };
    }

    case REQUEST_FINISHED: {
      return {
        requests: state.requests.map((request) =>
          request.requestName === action.request.requestName
            ? { ...request, inProgress: false }
            : request
        ),
        // requests: state.requests.filter((request) => {
        //   request.requestName !== action.request.requestName;
        // }),
      };
    }

    case REQUEST_FAILED: {
    }
    default: {
      return state;
    }
  }
};
