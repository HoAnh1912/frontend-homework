import { lazy } from 'react';

const InvoicesManagement = lazy(() => import('pages/invoices/InvoicesManagement'));
const InvoicesCreate = lazy(() => import('pages/invoices/InvoicesCreate/InvoicesCreate'));
const InvoicesDraft = lazy(() => import('pages/invoices/InvoicesDraft/InvoicesDraft'));

const children = [
  {
    path: 'invoices',
    element: <InvoicesManagement />
  },
  {
    path: 'invoices/create',
    element: <InvoicesCreate />
  },
  {
    path: 'invoices/drafts',
    element: <InvoicesDraft />
  }
];

export default children;
