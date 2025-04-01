export class SlideModel {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  isActive?: boolean;

  constructor(id: number, title: string, description: string, imageUrl: string, isActive: boolean) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.imageUrl = imageUrl;
    this.isActive = isActive;
  }

  //metodo per descrizione abbreviata su sfondo slide
getShortDescription(): string {
    return this.description =  this.description.slice(0, 20) + '...';
  }
}
