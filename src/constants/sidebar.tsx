import AnalyticsRoundedIcon from '@mui/icons-material/AnalyticsRounded';
import DesktopMacRoundedIcon from '@mui/icons-material/DesktopMacRounded';
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import { Sidebar } from 'types/sidebar.interface';

export const sidebarConfig: Sidebar[] = [
  {
    id: '1',
    title: 'Home',
    icon: <AnalyticsRoundedIcon />,
    path: '/home'
  },
  {
    id: '2',
    title: 'Invoices',
    icon: <PeopleAltRoundedIcon />,
    path: '/invoices',
    child: [
      {
        id: '1',
        title: 'Create new',
        path: '/invoices/create'
      },
      {
        id: '2',
        title: 'Drafts',
        path: '/invoices/drafts'
      }
    ]
  },
  {
    id: '3',
    title: 'Contractors',
    icon: <DesktopMacRoundedIcon />,
    path: '/contractors'
  },
  {
    id: '4',
    title: 'Product and Services',
    icon: <SchoolRoundedIcon />,
    path: '/product'
  }
];
