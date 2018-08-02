import { IReducers } from "../types";

import { IChannelAction } from "./actions";
import { IChannelState } from "./states";

import { loadReducers } from "./actions/load";

const reducers: IReducers<IChannelState, IChannelAction> = {
  ...loadReducers
};

export function channelReducer(
  state: IChannelState = { channels: [], loading: false },
  action: IChannelAction
): IChannelState {
  const reducer = reducers[action.type];
  return reducer ? reducer(state, action) : state;
}