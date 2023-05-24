type statusVariant = 'danger' | 'warning' | 'primary' | 'success';

export type StatusProps = {
  variant?: statusVariant;
  className?: string;
  text: string;
};
