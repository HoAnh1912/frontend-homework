export interface SelectProps {
  items: Array<{
    id?: string | number;
    value: string | number;
    title: string;
  }>;
  minWidth?: number;
  width?: number;
  label?: string;
  value: any;
  setValue: (value: string) => void;
  className?: string;
  border?:string;
  background?:string
}
