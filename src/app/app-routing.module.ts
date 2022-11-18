import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BusinessesComponent } from './businesses/businesses.component';
import { LinkListComponent } from './link-list/link-list.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/businesses', pathMatch: 'full' },
  { path: 'businesses', component: BusinessesComponent },
  { path: 'link-list', component: LinkListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
