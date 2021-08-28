import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { ActorsComponent } from 'src/app/components/actors/actors.component';
import { AddActorComponent } from 'src/app/components/add-actor/add-actor.component';

const appRoutes: Route[] = [
  { path: "index", component: ActorsComponent },
  { path: "add", component: AddActorComponent},
  { path: '',   redirectTo: '/index', pathMatch: 'full' },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
