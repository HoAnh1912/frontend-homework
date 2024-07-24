export interface IColumnInvoices {
  id: string | number;
  label: JSX.Element | string;
  onClick?: () => Promise<void>;
  width?: number;
}
