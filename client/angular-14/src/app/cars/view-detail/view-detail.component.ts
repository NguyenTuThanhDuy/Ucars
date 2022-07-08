import { CarService } from './../services/car.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-detail',
  templateUrl: './view-detail.component.html',
  styleUrls: ['./view-detail.component.css']
})
export class ViewDetailComponent implements OnInit {
  brand_id : string = '';
  brand_details : any;
  constructor(private carService : CarService,
    private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data =>{
      this.brand_id = data.id;
    })
    this.carService.viewCarBrand(this.brand_id).subscribe(data =>{
      this.brand_details = data;
    })
  }

}
