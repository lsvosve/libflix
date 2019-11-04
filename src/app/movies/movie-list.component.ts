import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

@Component({
    styleUrls:['./movie-list.component.css'],
    templateUrl:'./movie-list.component.html'
})
export class MovieListComponent implements OnInit{
    products = [];
    obs: Observable<any>
    constructor(private dataService: DataService) { }
  
    ngOnInit() {
  
     this.dataService.sendGetRequest().subscribe((data: any[])=>{
        console.log(data);
        this.products = data;
      })  
    }
  
}