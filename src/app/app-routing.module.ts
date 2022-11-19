import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BusinessesComponent } from './businesses/businesses.component';
import { LinkListComponent } from './link-list/link-list.component';
import { BusinessStartComponent } from './businesses/business-start/business-start.component';
import { BusinessDetailComponent } from './businesses/business-detail/business-detail.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/businesses', pathMatch: 'full' },
  {
    path: 'businesses', component: BusinessesComponent, children: [{ path: '', component: BusinessStartComponent },
    { path: ':id', component: BusinessDetailComponent }]
  },
  { path: 'link-list', component: LinkListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
