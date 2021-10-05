import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';
import { Router } from "@angular/router";
@Component({
  selector: 'app-addmovie',
  templateUrl: './addmovie.component.html',
  styleUrls: ['./addmovie.component.css']
})
export class AddmovieComponent implements OnInit {
  title !: string;
  year !: number;

  constructor( private dbService: DatabaseService, private router: Router) { }

  onSaveMovies() {
    let obj = { title: this.title, year: this.year };
    this.dbService.createMovie(obj).subscribe(result => {
      this.router.navigate(["/listmovies"]);
    });
  }

  ngOnInit(): void {
  }

}
