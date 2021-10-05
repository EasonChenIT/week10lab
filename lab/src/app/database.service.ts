import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { _AllowStringsForIds } from 'mongoose';
const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" }),
};

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private http: HttpClient) { }
  //Actors
  getActors() {
    return this.http.get("/actors");
  }

  createActor(data : object) {
    return this.http.post("/actors", data, httpOptions);
  }

  updateActor(id : any, data : object) {
    let url = "/actors/" + id;
    return this.http.put(url, data, httpOptions);
  }

  deleteActor(id : any) {
    let url = "/actors/" + id;
    return this.http.delete(url, httpOptions);
  }

  //Movies
  getMovies(){
    return this.http.get("/movies");
  }
  //task1
  createMovie(data : object){
    return this.http.post("/movies", data,httpOptions);
  }

  updateMovie(id : any, data : object){
    let url = "/movies/" + id;
    return this.http.put(url,data,httpOptions);
  }

  addActorToMovie(mid : any, aid : any){
    let url = "/movies/" + mid + "/" +aid;
    return this.http.post(url,httpOptions);
  }

  deleteMovie(id : any){
    let url = "/movies/" + id;
    return this.http.delete(url,httpOptions);
  }
  //task2
  deleteMovieByTitle(title : string){
    let url = "/movies/deletebytitle/" + title;
    return this.http.delete(url,httpOptions);
  }

  deleteMovieBetweenYears(year1:number,year2:number){
    let url = "/movies/deletebetweenyears/" + year1 + "/" + year2;
    //let url = "/movies/deletebetweenyears/?year1=" + year1 + "&&year2=" + year2;
    return this.http.delete(url,httpOptions);
  }
  
  removeMovieFromActor(aid:any,mid:any){
    let url = "/actors/"+aid +"/"+mid;
    return this.http.delete(url,httpOptions);
  }

}
