import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  GetMovie(name: string) {
    return this.http.get(`http://www.omdbapi.com/?apikey=c45f6e72&t=${name}`);
  }
  postMovie(item :any){
    return this.http.post("http://localhost:3000/movie",item);
  }
  getList(){
    return this.http.get("http://localhost:3000/movie");
  }
  delete(id:number){
    return this.http.delete(`http://localhost:3000/movie/${id}`);
  }
  addfav(item:any){
    return this.http.post("http://localhost:3000/fav",item);
  }
  getFav(){
    return this.http.get("http://localhost:3000/fav");
  }
  deleteFav(id:number){
    return this.http.delete(`http://localhost:3000/fav/${id}`)
  }
}
