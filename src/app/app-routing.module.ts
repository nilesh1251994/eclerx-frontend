import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetInfoComponent } from './get-info/get-info.component';
import { IsCarAvailableComponent } from './is-car-available/is-car-available.component';
import { IsPersonRegisteredComponent } from './is-person-registered/is-person-registered.component';

const routes: Routes = [
  { path: '', redirectTo: '/getInfo', pathMatch: 'full' },
  { path : 'isCarAvailable ', component: IsCarAvailableComponent},
  { path : 'isPersonRegistered ', component: IsPersonRegisteredComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
