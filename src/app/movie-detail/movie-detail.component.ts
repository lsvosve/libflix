import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
id:any;
movie:any;
  constructor(public route:ActivatedRoute,private data:DataService) { }

  ngOnInit() {

    this.id=this.route.snapshot.params.id;
    this.getMovie(this.id)
  }
getMovie(id){
this.data.sendGetRequest().subscribe((item:any)=>{
  this.movie=item.find(mov=>mov.id===id);
  console.log(this.movie);
})
}
}
