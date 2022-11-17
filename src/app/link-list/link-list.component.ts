import { Component, OnInit } from '@angular/core';
import { Link } from '../shared/link.model';
import { LinkListService } from './link-list.service';


@Component({
  selector: 'app-link-list',
  templateUrl: './link-list.component.html',
  styleUrls: ['./link-list.component.css']
})
export class LinkListComponent implements OnInit {
  links: Link[];

  constructor(private linkListService: LinkListService) {

  }

  ngOnInit(): void {
    // initial setting at component creation
    this.links = this.linkListService.getLinks();
    // keep up to date with source of truth in service
    this.linkListService.linksChanged.subscribe((links: Link[]) => {
      this.links = links;
    })
  }

}
