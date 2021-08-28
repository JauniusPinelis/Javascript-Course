import { Component, OnInit } from '@angular/core';
import { Actor } from 'src/app/models/actor';
import { ActorsService } from 'src/app/services/actors.service';

@Component({
  selector: 'app-add-actor',
  templateUrl: './add-actor.component.html',
  styleUrls: ['./add-actor.component.css']
})
export class AddActorComponent implements OnInit {
  public name?: string;
  public surname?:string;
  constructor(private actorsService: ActorsService) { }

  ngOnInit(): void {
  }

  createActor(): void{
    let newActor: Actor = {
      name: this.name ?? "",
      surname: this.surname ?? ""
    }

    this.actorsService.AddActor(newActor);
  }

}
