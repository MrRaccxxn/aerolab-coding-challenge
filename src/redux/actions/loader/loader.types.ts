export const REQUEST_STARTED = "REQUEST_STARTED";
export const REQUEST_FINISHED = "REQUEST_FINISHED";
export const REQUEST_FAILED = "REQUEST_FAILED";

interface Request {
  requestName: string;
  inProgress: boolean;
}

export type ActionLoader = { type: string; request: Request };
