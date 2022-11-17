import { EventEmitter } from '@angular/core';
import { Link } from '../shared/link.model'

export class LinkListService {
  linksChanged = new EventEmitter<Link[]>();

  private links: Link[] = [
    new Link('Google search', 'http://www.google.com'),
    new Link('Amazon', 'http://www.amazon.com')
  ];

  addLink(link: Link) {
    this.links.push(link)
    this.linksChanged.emit(this.links.slice())
  }

  getLinks() {
    return this.links.slice()
  }
}
