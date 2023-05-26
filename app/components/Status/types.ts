export type StatusVariant = 'danger' | 'warning' | 'primary' | 'success';

export type StatusProps = {
  variant?: StatusVariant;
  className?: string;
  text: string;
};
