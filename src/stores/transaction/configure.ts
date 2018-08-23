import { interfaces } from "inversify";

import { IEpicConfig, IReducerConfig } from "../common";
import EpicConfig from "./epics/Epics";
import ReducerConfig from "./reducers/Reducers";

import { ITransactionService, LocalService } from "./service";

export default function configure(container: interfaces.Container): void {
  container.bind<IEpicConfig>("epics").to(EpicConfig);
  container.bind<IReducerConfig>("reducers").to(ReducerConfig);
  container
    .bind<ITransactionService>("service")
    .to(LocalService)
    .whenTargetNamed("transaction");
}