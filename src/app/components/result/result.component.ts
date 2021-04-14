import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  constructor(private service:MovieService, private route: ActivatedRoute, private router:Router) { }

  public movie:any;
  public rating:number;
  public act:string;
  ngOnInit(): void {
    this.route.params.subscribe(p=>{
      this.service.GetMovie(p['id']).subscribe(data=>{
        this.movie=data;
        this.act=this.movie.Actors;
      });
    });
  }
  saveRating(){
    let item={
      poster:this.movie.Poster,
      title:this.movie.Title,
      actors:this.movie.Actors,
      director:this.movie.Director,
      rating:this.rating
    }
    console.log(item);
    this.service.postMovie(item).subscribe(data=>{
      console.log("added");
    });
    this.router.navigate(['/']);
  }
}
