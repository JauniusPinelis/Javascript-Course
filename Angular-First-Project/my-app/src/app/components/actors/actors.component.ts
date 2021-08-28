import { Component, OnInit } from '@angular/core';
import { Actor } from 'src/app/models/actor';
import { Post } from 'src/app/models/post';
import { ActorsService } from 'src/app/services/actors.service';
import { AxiosService } from 'src/app/services/axios.service';
import { ObservableService } from 'src/app/services/observable.service';

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.css']
})
export class ActorsComponent implements OnInit {
  public actors?: Actor[];
  public posts: Post[] = []; 

  public selectedActor?: Actor;
  constructor(
    private actorsService: ActorsService,
    private observableService: ObservableService)
    {
      
    }

  ngOnInit(): void {
    this.getActors();
  }

  private getActors(): void{
    this.actors = this.actorsService.GetActors();
  }

  private getPosts():void {
    this.observableService.getPosts()
      .subscribe(p => this.posts = p)
  }

  public onSelect(actor: Actor): void{
    this.selectedActor = actor;
  }

}
