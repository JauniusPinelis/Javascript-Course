import { Injectable } from '@angular/core';
import { Actor } from '../models/actor';

import {actorsData} from '../data/mock-actors';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class ActorsService {

  private actors: Actor[]

  constructor(private loggerService: LoggerService) { 
    this.actors = actorsData;
  }

  public GetActors() : Actor[]{
    return this.actors;
  }

  public AddActor(actor: Actor): void{
    this.actors.push(actor);
    this.loggerService.Log(`new actor ${actor.name} ${actor.surname} has been added`);
  }
}
