import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service:MovieService, private router:Router) { }

  public movie:any;

  ngOnInit(): void {
    this.getMovieList();

  }

  getMovieList(){
    this.service.getList().subscribe(data=>{
      this.movie=data;
    });
  }
  showRating(n:number): Array<number>{
    
    console.log(n);
    return  Array(Number(n));
  }
  delete(item:any){
    this.service.delete(item.id).subscribe(data=>{
      this.getMovieList();
    });
  }
  fav(item:any){
    this.service.addfav(item).subscribe(data=>{
      console.log("item added to favourites!");
    });
    this.router.navigate(['/favourite']);
  }
}
