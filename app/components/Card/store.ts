import { EApplieStatus } from '@/app/types/applies';
import { EVacancyStatus } from '@/app/types/vacancies';
import { StatusVariant } from '../Status/types';

export const vacancyStatic: Record<
  EVacancyStatus,
  { text: string; color: StatusVariant }
> = {
  [EVacancyStatus.NEW]: {
    text: 'Новая',
    color: 'primary',
  },
  [EVacancyStatus.SEARCH]: {
    text: 'Поиск',
    color: 'warning',
  },
  [EVacancyStatus.INTERVIEW]: {
    text: 'Собеседования',
    color: 'success',
  },
};

export const applieStatic: Record<
  EApplieStatus,
  { text: string; color: StatusVariant }
> = {
  [EApplieStatus.INVITE]: {
    text: 'Приглашение',
    color: 'success',
  },
  [EApplieStatus.PROCCESS]: {
    text: 'Отправлено',
    color: 'primary',
  },
  [EApplieStatus.REJECTED]: {
    text: 'Отказ',
    color: 'danger',
  },
};
