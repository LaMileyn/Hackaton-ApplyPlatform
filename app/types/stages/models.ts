import { BaseModel } from '../common/models';

export enum EStageType {
  TEST = 1,
  CALL = 2,
}
export type Stage = {
  type: EStageType;
  rating: number;
} & BaseModel;
