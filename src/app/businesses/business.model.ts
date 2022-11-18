import { Link } from '../shared/link.model'

export class Business {
  public name: string;
  public description: string;
  public imagePath: string;
  public links: Link[];

  constructor(name: string, desc: string, imagePath: string, links: Link[]) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
    this.links = links;
  }
}
