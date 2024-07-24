export interface BreadcrumbType {
  [key: string]: {
    text: string;
    children?: BreadcrumbType;
    link?: string;
  };
}
