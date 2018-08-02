import { IReducers } from "../types";

import { ITransactionAction } from "./actions";
import { ITransactionState } from "./states";

import { loadReducers } from "./actions/load";

const reducers: IReducers<ITransactionState, ITransactionAction> = {
  ...loadReducers
};

export function transactionReducer(
  state: ITransactionState = { transactions: [], loading: false },
  action: ITransactionAction
): ITransactionState {
  const reducer = reducers[action.type];
  return reducer ? reducer(state, action) : state;
}