export interface DataError {
  messages: string[];
  codeName: string;
  moduleName: string;
  path: string;
  method: string;
  timestamp: string;
}

export interface ResponsePaginationMetaData {
  pageSize: number;
  totalRecords: number;
  currentPage: number;
  totalPages: number;
}

export interface ResponseDataSuccess<T> {
  data?: T;
  error?: DataError;
  message: string;
  status: boolean;
}

export interface ResponsePaginationSuccess<T> {
  items: T[];
  metaData: ResponsePaginationMetaData;
}

export type SORTTYPE = "DESC" | "ASC";

export type ParamPagination = {
  page?: number;
  limit?: number;
  sortBy?: string;
  sortType?: SORTTYPE;
};

export type OptionDropdown<T = string | number | boolean> = {
  value: T;
  label: string;
  disable?: boolean;
};

export interface OptionDropdownProps {
  value: string | number;
  label: string;
  group?: number | string;
}

export interface ICheckbox {
  id: number;
  label: string;
}

export type ParamPage = {
  page?: number;
  limit?: number;
  sortBy?: string;
  isOwner_eq?: number;
  post_exists?: number;
};

export type ParamExcel = {
  page?: number;
  limit?: number;
  sortBy?: string;
  sortType?: SORTTYPE;
  keyword?: string;
  filterValue?: number | string;
  filterBy?: number | string;
  toExcel?: boolean;
};
