import { LoaderState } from "../src/redux/reducers/loader/loader.reducer";

export const getNamedRequestState = (
  state: LoaderState,
  requestName: string
) => {
  return (
    state.requests.find(
      (request) => request.requestName === requestName && request.inProgress
    ) !== undefined
  );
};
