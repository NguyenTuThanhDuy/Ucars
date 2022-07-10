import { CarService } from './../services/car.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  listCarBrand : any;
  searchText : any;
  constructor(private carService:CarService) { }

  ngOnInit(): void {
    this.carService.listCarBrand().subscribe(data =>{
      this.listCarBrand = data;
    });
  }

}
