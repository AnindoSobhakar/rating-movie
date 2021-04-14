import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-searchmovie',
  templateUrl: './searchmovie.component.html',
  styleUrls: ['./searchmovie.component.css']
})
export class SearchmovieComponent implements OnInit {

  constructor(private router:Router) { }
  public moviename:String ='';
  public movie:any;
  ngOnInit(): void {
  }

  SearchMovie() {
    console.log(this.moviename);
    this.router.navigate(['/result', this.moviename]);
  }
}
