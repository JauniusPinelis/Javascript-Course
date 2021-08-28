import { Injectable } from '@angular/core';
import { Actor } from '../models/actor';

import {actorsData} from '../data/mock-actors';

@Injectable({
  providedIn: 'root'
})
export class ActorsService {
  private actors: Actor[]
  constructor() { 
    this.actors = actorsData;
  }

  public GetActors() : Actor[]{
    return this.actors;
  }

  public AddActor(actor: Actor): void{
    this.actors.push(actor);
  }
}
