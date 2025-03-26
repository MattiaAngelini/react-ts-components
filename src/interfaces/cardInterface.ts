export interface cardInterface {
    title: string;
    description: string;
    image?: string;
    linkTitle?: string
    link?: string;
    btn?:string;
    onclick?(): void
    bgColor?: string;
    color?: string;
  }