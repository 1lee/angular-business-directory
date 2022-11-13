import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BusinessesComponent } from './businesses/businesses.component';
import { BusinessListComponent } from './businesses/business-list/business-list.component';
import { BusinessItemComponent } from './businesses/business-item/business-item.component';
import { LinkListComponent } from './link-list/link-list.component';
import { LinkEditComponent } from './link-list/link-edit/link-edit.component';
import { BusinessDetailComponent } from './businesses/business-detail/business-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BusinessesComponent,
    BusinessListComponent,
    BusinessItemComponent,
    LinkListComponent,
    LinkEditComponent,
    BusinessDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
