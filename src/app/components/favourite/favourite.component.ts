import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {

  constructor(private service:MovieService) { }
  public movie:any;
  public rating:number;
  ngOnInit(): void {
    this.getFav();
  }
   getFav(){
     this.service.getFav().subscribe(data=>{
       this.movie=data;
       this.rating=this.movie.rating;
     });
   }
   delete(item:any){
     this.service.deleteFav(item.id).subscribe(data=>{
       this.getFav();
     });
   }
   showRating(n:any){
    console.log(n);
    return new Array(Number(n));
  }
}
