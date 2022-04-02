import { Action } from "../types/action.type";

export interface NoteState {
  notes: string[];
}

const initialState = {
  notes: [],
};

export const NoteReducer = (
  state: NoteState = initialState,
  action: Action
) => {
  switch (action.type) {
    case "ADD_NOTE": {
      return { ...state, notes: [...state.notes, action.payload] };
      break;
    }

    default:
      return state;
      break;
  }
};
