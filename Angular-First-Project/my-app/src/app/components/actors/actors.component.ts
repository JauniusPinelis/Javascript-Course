import { Component, OnInit } from '@angular/core';
import { Actor } from 'src/app/models/actor';
import { ActorsService } from 'src/app/services/actors.service';

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.css']
})
export class ActorsComponent implements OnInit {
  public actors?: Actor[]; 

  public selectedActor?: Actor;
  constructor(private actorsService: ActorsService) {
      
  }

  ngOnInit(): void {
    this.getActors();
  }

  private getActors(): void{
    this.actors = this.actorsService.GetActors();
  }

  public onSelect(actor: Actor): void{
    this.selectedActor = actor;
  }

}
