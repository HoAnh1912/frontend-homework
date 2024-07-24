export interface ISelectHook {
    name:string;
    items: Array<{
        id?: string | number;
        value: string | number;
        title: string;
      }>;
      control:any
      placeholder?:string;
}
