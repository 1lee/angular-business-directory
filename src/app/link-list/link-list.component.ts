import { Component, OnInit } from '@angular/core';
import { Link } from '../shared/link.model';

@Component({
  selector: 'app-link-list',
  templateUrl: './link-list.component.html',
  styleUrls: ['./link-list.component.css']
})
export class LinkListComponent implements OnInit {
  links: Link[] = [
    new Link('Google search', 'http://www.google.com'),
    new Link('Amazon', 'http://www.amazon.com')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
