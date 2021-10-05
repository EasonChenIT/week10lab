import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-addactortomovie',
  templateUrl: './addactortomovie.component.html',
  styleUrls: ['./addactortomovie.component.css']
})
export class AddactortomovieComponent implements OnInit {

  constructor(private dbService: DatabaseService, private router: Router) { }

  moviesDB: any[] = [];
  actorsDB: any[] = [];
  title : string = "";
  year : number = 0;
  movideId : string = "";
  actorId : string = "";
  name : string = "";

  onGetMovies() {
    this.dbService.getMovies().subscribe((data : any) => {
      this.moviesDB = data;
    });
  }

  onGetActors() {
    this.dbService.getActors().subscribe((data : any) => {
      this.actorsDB = data;
    });
  }

  onSelectActor(item : any){
    this.actorId = item._id;
    this.name = item.name;
  }

  onSelectMovie(item :any){
    this.movideId = item._id;
    this.title = item.title;
    this.year = item.year;
  }

  onAddActorToMovie(){
    this.dbService.addActorToMovie(this.movideId,this.actorId).subscribe(result =>{
      this.onGetMovies();
    });
  }

  ngOnInit(): void {
    this.onGetMovies();
    this.onGetActors();
  }

}
