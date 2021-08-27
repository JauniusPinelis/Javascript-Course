import { Component, OnInit } from '@angular/core';
import { Actor } from 'src/app/models/actor';

import {actors} from '../../data/mock-actors'; 

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.css']
})
export class ActorsComponent implements OnInit {
  public actors: Actor[] = actors;

  public selectedActor: Actor;
  constructor() { }

  ngOnInit(): void {
  }

}
