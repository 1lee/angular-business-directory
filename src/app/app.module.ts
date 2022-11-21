import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BusinessesComponent } from './businesses/businesses.component';
import { BusinessListComponent } from './businesses/business-list/business-list.component';
import { BusinessItemComponent } from './businesses/business-item/business-item.component';
import { LinkListComponent } from './link-list/link-list.component';
import { LinkEditComponent } from './link-list/link-edit/link-edit.component';
import { BusinessDetailComponent } from './businesses/business-detail/business-detail.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { LinkListService } from './link-list/link-list.service';
import { AppRoutingModule } from './app-routing.module';
import { BusinessStartComponent } from './businesses/business-start/business-start.component';
import { BusinessEditComponent } from './businesses/business-edit/business-edit.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BusinessesComponent,
    BusinessListComponent,
    BusinessItemComponent,
    LinkListComponent,
    LinkEditComponent,
    BusinessDetailComponent,
    DropdownDirective,
    BusinessStartComponent,
    BusinessEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [LinkListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
