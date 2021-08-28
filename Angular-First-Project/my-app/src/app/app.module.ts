import { DEFAULT_CURRENCY_CODE, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { ActorComponent } from './components/actor/actor.component';
import { ActorsComponent } from './components/actors/actors.component';
import { AddActorComponent } from './components/add-actor/add-actor.component';

@NgModule({
  declarations: [
    AppComponent,
    ActorComponent,
    ActorsComponent,
    AddActorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    {provide: DEFAULT_CURRENCY_CODE, useValue: 'EUR'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
