import { BtnInterface } from './btnInterface';

export interface CardInterface {
    title: string;
    description: string;
    image?: string;
    bgColor?: string;
    color?: string;
    button?: BtnInterface; // Ora il bottone è un oggetto separato
}