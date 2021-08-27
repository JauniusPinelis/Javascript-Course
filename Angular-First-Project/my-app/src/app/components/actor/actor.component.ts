import { Component, OnInit } from '@angular/core';
import { Actor } from 'src/app/models/actor';

@Component({
  selector: 'app-actor',
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.css']
})
export class ActorComponent implements OnInit {
  public info: Actor = {
    name: "Tom",
    surname: "Cruise"
  };
  constructor() { }

  ngOnInit(): void {
  }

}
