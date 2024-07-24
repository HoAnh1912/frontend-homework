import { STATUS_INVOICES } from './common';

export const dataListInvoices = [
  {
    invoicesId: 1,
    bill: 'Nguyen Van A',
    updatedDt: '20.9.2024',
    status: STATUS_INVOICES['paid'],
    vat: 'check',
    export: 'true'
  },
  {
    invoicesId: 2,
    bill: 'Nguyen Van C',
    updatedDt: '20.9.2024',
    status: STATUS_INVOICES['late'],
    vat: 'check',
    export: 'true'
  },
  {
    invoicesId: 3,
    bill: 'Nguyen Van D',
    updatedDt: '20.9.2024',
    status: STATUS_INVOICES['outstanding'],
    vat: 'check',
    export: 'true'
  },
  {
    invoicesId: 4,
    bill: 'Nguyen Van E',
    updatedDt: '20.9.2024',
    status: STATUS_INVOICES['notPaid'],
    vat: 'uncheck',
    export: 'true'
  },
  {
    invoicesId: 5,
    bill: 'Nguyen Van F',
    updatedDt: '20.8.2024',
    status: STATUS_INVOICES['notPaid'],
    vat: 'check',
    export: 'true'
  }
];

export const columnsInvoicesDetail = [
  {
    id: 'detail',
    label: 'Details'
  },
  {
    id: 'quantity',
    label: 'Quantity'
  },
  {
    id: 'rate',
    label: 'Rate'
  },
  { id: 'price', label: 'Price' },
  { id: 'amount', label: 'Amount' }
];

export const dataInvoicesDetail = [
  {
    title: 1,
    detail: '01000',
    quantity: '20.9.2024',
    rate: 'true',
    price: 'check',
    amount: 'true'
  },
  {
    title: 2,
    detail: '01000',
    quantity: '20.9.2024',
    rate: 'true',
    price: 'check',
    amount: 'true'
  },
  {
    title: 3,
    detail: '01000',
    quantity: '20.9.2024',
    rate: 'true',
    price: 'check',
    amount: 'true'
  },
  {
    title: 4,
    detail: '01000',
    quantity: '20.9.2024',
    rate: 'true',
    price: 'check',
    amount: 'true'
  },
  {
    title: 5,
    detail: '01000',
    quantity: '20.9.2024',
    rate: 'true',
    price: 'check',
    amount: 'true'
  },
  {
    title: 6,
    detail: '01000',
    quantity: '20.9.2024',
    rate: 'true',
    price: 'check',
    amount: 'true'
  },
  {
    title: 7,
    detail: '01000',
    quantity: '20.9.2024',
    rate: 'true',
    price: 'check',
    amount: 'true'
  },
  {
    title: 8,
    detail: '01000',
    quantity: '20.9.2024',
    rate: 'true',
    price: 'check',
    amount: 'true'
  },
  {
    title: 9,
    detail: '01000',
    quantity: '20.9.2024',
    rate: 'true',
    price: 'check',
    amount: 'true'
  }
];
