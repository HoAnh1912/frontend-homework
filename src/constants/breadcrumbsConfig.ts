import { BreadcrumbType } from 'types/breadcrumb.interface';

const breadcrumbsConfig: BreadcrumbType = {
  home: {
    text: 'Home',
    link: '/home'
  },
  invoices: {
    text: 'Invoices',
    link: '/invoices',
    children: {
      create: {
        text: 'New document',
        link: '/invoices/create'
      },
      drafts: {
        text: 'Drafts',
        link: '/invoices/drafts'
      }
    }
  },
  contractors: {
    text: 'Contractors',
    link: '/contractors'
  },
  product: {
    text: 'Product',
    link: '/product'
  }
};

export default breadcrumbsConfig;
