import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Business } from '../business.model';

@Component({
  selector: 'app-business-item',
  templateUrl: './business-item.component.html',
  styleUrls: ['./business-item.component.css']
})
export class BusinessItemComponent implements OnInit {
  @Input() business: Business;
  @Output() businessSelected = new EventEmitter<void>()

  constructor() { }

  ngOnInit(): void {
  }

  onSelected() {
    this.businessSelected.emit()
  }
}
