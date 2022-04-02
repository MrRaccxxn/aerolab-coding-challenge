import { ILoaderState } from "../../reducers/loader/loader.reducer";
import {
  REQUEST_FAILED,
  REQUEST_FINISHED,
  REQUEST_STARTED,
} from "./loader.types";

export const requestStarted = (requestName: string) => ({
  type: REQUEST_STARTED,
  request: {
    requestName,
    inProgress: true,
  },
});

export const requestFinished = (requestName: string) => ({
  type: REQUEST_FINISHED,
  request: {
    requestName,
    inProgress: false,
  },
});

// export const requestFailed = (request: ILoaderState) => ({
//   type: REQUEST_FAILED,
//   request: {
//     request,
//     inProgress: false,
//     error,
//   },
// });
