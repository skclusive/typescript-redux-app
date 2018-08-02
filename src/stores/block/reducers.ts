import { IReducers } from "../types";

import { IBlockAction } from "./actions";
import { IBlockState } from "./states";

import { loadReducers } from "./actions/load";

const reducers: IReducers<IBlockState, IBlockAction> = {
  ...loadReducers
};

export function blockReducer(
  state: IBlockState = { blocks: [], loading: false },
  action: IBlockAction
): IBlockState {
  const reducer = reducers[action.type];
  return reducer ? reducer(state, action) : state;
}