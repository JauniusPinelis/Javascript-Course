import { Component,  Input,  OnInit } from '@angular/core';
import { Actor } from 'src/app/models/actor';
import { ActorsService } from 'src/app/services/actors.service';

@Component({
  selector: 'app-actor',
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.css']
})
export class ActorComponent implements OnInit {
  @Input() actorDecorator? : Actor
 
  constructor() {
   }

  ngOnInit(): void {
  }

}
