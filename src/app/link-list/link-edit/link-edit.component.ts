import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { LinkListService } from '../link-list.service';
import { Link } from '../../shared/link.model'

@Component({
  selector: 'app-link-edit',
  templateUrl: './link-edit.component.html',
  styleUrls: ['./link-edit.component.css']
})
export class LinkEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('urlInput') urlInputRef: ElementRef;


  constructor(private linkListService: LinkListService) { }

  ngOnInit(): void {
  }

  onAddItem() {
    const newLink = new Link(this.nameInputRef.nativeElement.value, this.urlInputRef.nativeElement.value)
    console.log(`newLink??? `, newLink)
    this.linkListService.addLink(newLink);

  }

}
