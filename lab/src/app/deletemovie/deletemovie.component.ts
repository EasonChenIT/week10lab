import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from '../database.service';
@Component({
  selector: 'app-deletemovie',
  templateUrl: './deletemovie.component.html',
  styleUrls: ['./deletemovie.component.css']
})
export class DeletemovieComponent implements OnInit {

  constructor(private dbService: DatabaseService,private router: Router) { }
  moviesDB: any[] = [];

  onGetMovies() {
    this.dbService.getMovies().subscribe((data : any) => {
      this.moviesDB = data;
    });
  }

  onDeleteMovie(item : any) {
    this.dbService.deleteMovie(item._id).subscribe(result => {
    this.onGetMovies();
    this.router.navigate(["/listmovies"]);
    });
  }

  ngOnInit(): void {
    this.onGetMovies();
  }

}
