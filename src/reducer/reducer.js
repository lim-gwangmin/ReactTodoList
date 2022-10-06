import { ACTION_TYPE } from "./action";

export function reducer(state, action) {
  switch (action.type) {
      case ACTION_TYPE.ALL:
         return state;
      case ACTION_TYPE.ACTIVE:
         return state.filter( arg => arg.done === false );
      case ACTION_TYPE.COMPLETED:
         return state.filter( arg => arg.done === true );
      default:
      throw new Error();
  };
};