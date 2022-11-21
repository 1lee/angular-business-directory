import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';

import { LinkListService } from '../link-list.service';
import { Link } from '../../shared/link.model'
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-link-edit',
  templateUrl: './link-edit.component.html',
  styleUrls: ['./link-edit.component.css']
})
export class LinkEditComponent implements OnInit, OnDestroy {
  @ViewChild('f', { static: false }) linkListForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Link;

  constructor(private linkListService: LinkListService) { }

  ngOnInit(): void {
    this.subscription = this.linkListService.startedEditing.subscribe((index: number) => {
      this.editedItemIndex = index;
      this.editMode = true;
      this.editedItem = this.linkListService.getLink(index);
      this.linkListForm.setValue({
        name: this.editedItem.name,
        url: this.editedItem.url
      })
    })
  }

  onSubmit(form: NgForm) {
    const value = form.value;

    const newLink = new Link(value.name, value.url)

    if (this.editMode) {
      this.linkListService.updateLink(this.editedItemIndex, newLink)
    } else {
      this.linkListService.addLink(newLink);
    }
    this.editMode = false;
    form.reset();
  }

  onClear() {
    this.linkListForm.reset();
    this.editMode = false;
  }

  onDelete() {
    this.linkListService.deleteLink(this.editedItemIndex);
    this.onClear();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
