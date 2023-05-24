export type OptionValue = string | number;

export type Option<T extends OptionValue> = {
  value: T;
  title: string;
};

export type SelectProps<T extends OptionValue> = {
  selected: Option<T> | null;
  options: Option<T>[];
  placeholder?: string;
  onChange: (selected: Option<T>['value']) => void;
};
