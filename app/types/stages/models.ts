import { BaseModel } from '../common/models';

export enum EStageType {
  TEST = 0,
  CALL = 1,
}
export type Stage = {
  type: EStageType;
  rating: number;
} & BaseModel;
