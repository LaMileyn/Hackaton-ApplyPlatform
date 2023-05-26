import { Option, OptionValue } from '../../types';

export type OptionProps<T extends OptionValue> = {
  option: Option<T>;
  onClick: (value: Option<T>['value']) => void;
};
