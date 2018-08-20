import { IEntitiesState, IEntity } from "../entity";

export interface IBlock extends IEntity {
  channel: string;
  created: string;
  dataHash: string;
  hash: string;
  id: number;
  previousHash: string;
  transactions: string[];
}

export interface IBlockState extends IEntitiesState<IBlock> {
}
