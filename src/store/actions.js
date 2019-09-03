import { INCREMENT_ID } from "./actionTypes";

let nextID = 0;

export const incrementID = content => ({
  type: INCREMENT_ID,
  payload: {
    content
  }
});
