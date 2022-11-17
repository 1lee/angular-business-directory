import { Component, ElementRef, EventEmitter, OnInit, ViewChild, Output } from '@angular/core';

import { Link } from '../../shared/link.model'

@Component({
  selector: 'app-link-edit',
  templateUrl: './link-edit.component.html',
  styleUrls: ['./link-edit.component.css']
})
export class LinkEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('urlInput') urlInputRef: ElementRef;

  @Output() linkAdded = new EventEmitter<Link>();

  constructor() { }

  ngOnInit(): void {
  }

  onAddItem() {
    const newLink = new Link(this.nameInputRef.nativeElement.value, this.urlInputRef.nativeElement.value)
    console.log(`newLink: `, newLink)
    this.linkAdded.emit(newLink);
  }

}
