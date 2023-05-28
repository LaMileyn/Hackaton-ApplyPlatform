import { EApplieStatus } from './models';

export type ChangeApplyStatusRequest = {
  status: EApplieStatus;
  id: number;
};
