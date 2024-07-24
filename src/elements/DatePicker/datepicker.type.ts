import { Dayjs } from "dayjs";

export interface IDatePicker {
    value: any;
    setValue: (value: Dayjs | null | any) => void;
    text?:string;
    width?: string
}