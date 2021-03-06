import { IAction } from "../../common/types";

import { namespace } from "../namespace";

export const START_RESET_NOTIFICATIONS = `${namespace}/reset/start`;

export const STOP_RESET_NOTIFICATIONS = `${namespace}/reset/stop`;

export type StartResetNotifications = typeof START_RESET_NOTIFICATIONS;

export type StopResetNotifications = typeof STOP_RESET_NOTIFICATIONS;

export interface IStartResetNotifications extends IAction {
  type: StartResetNotifications;
}

export function startResetNotifications(): IStartResetNotifications {
  return {
    type: START_RESET_NOTIFICATIONS
  };
}

export interface IStopResetNotifications extends IAction {
  type: StopResetNotifications;
}

export function stopResetNotifications(): IStopResetNotifications {
  return {
    type: STOP_RESET_NOTIFICATIONS
  };
}

export type IResetNotifications =
  | IStartResetNotifications
  | IStopResetNotifications;
