import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-updatemovie',
  templateUrl: './updatemovie.component.html',
  styleUrls: ['./updatemovie.component.css']
})
export class UpdatemovieComponent implements OnInit {

  constructor(private dbService: DatabaseService, private router: Router) { }

  moviesDB: any[] = [];
  title : string = "";
  year : number = 0;
  movideId : string = "";

  onGetMovies() {
    this.dbService.getMovies().subscribe((data : any) => {
      this.moviesDB = data;
    });
  }

  onSelectMovie(item :any){
    this.movideId = item._id;
    this.title = item.title;
    this.year = item.year;
  }

  onUpdateMovie() {
    let obj = { title: this.title, year: this.year };
    this.dbService.updateMovie(this.movideId, obj).subscribe(result => {
      this.onGetMovies();
    });
  }

  ngOnInit(): void {
    this.onGetMovies();
  }

}
