import { jsx } from "@emotion/react";

export interface ITableTabs{
    listTab: Array<{
        id?: string | number | any;
        content: any | JSX.Element;
        label: string
      }>;
      content?:JSX.Element | any;
      handClick?:()=>void
}