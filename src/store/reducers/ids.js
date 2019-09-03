import { INCREMENT_ID } from "../actionTypes"

const initialState = {
    currentID: 1,
}

export default function(state = initialState, action) {
    switch (action.type) {
      case INCREMENT_ID: {
        // const { content } = action.payload;
        return {
          ...state,
          currentID: state.currentID + 1
        };
      }
      default:
        return state;
    }
}