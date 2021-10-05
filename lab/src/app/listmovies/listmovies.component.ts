import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-listmovies',
  templateUrl: './listmovies.component.html',
  styleUrls: ['./listmovies.component.css']
})
export class ListmoviesComponent implements OnInit {

  constructor(private dbService: DatabaseService) { }
  moviesDB: any[] = [];

  onGetMovies() {
    this.dbService.getMovies().subscribe((data : any) => {
      this.moviesDB = data;
    });
  }

  ngOnInit(){
    console.log("Hi From ListActors ngIOnit");
    this.onGetMovies();
  }

}
