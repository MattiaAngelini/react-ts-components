import { BtnInterface } from "./btnInterface";
export interface heroInterface {
    title: string;
    description: string;
    textColor?: string;
    bgColor?:string; 
    video?: boolean;
    mediaUrl?: string;
    button?: BtnInterface;
}