import { ReactElement } from 'react';

export interface Sidebar {
  id: string;
  title: string;
  path: string;
  icon: ReactElement;
  roles?: string[];
  child?: {
    id: string;
    title: string;
    path: string;
    roles?: string[];
  }[];
}
