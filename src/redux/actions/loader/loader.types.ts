export const REQUEST_STARTED = "REQUEST_STARTED";
export const REQUEST_FINISHED = "REQUEST_FINISHED";
export const REQUEST_FAILED = "REQUEST_FAILED";

export interface IRequest {
  requestName: string; //Convert to enum
  inProgress: boolean;
  error: boolean;
}

export type ActionLoader = { type: string; request: IRequest };
