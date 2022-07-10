import { MatSnackBar } from '@angular/material/snack-bar';
import { CarService } from './../services/car.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  brand_id : string = '';
  constructor(private activatedRoute : ActivatedRoute,
    private carService:CarService,
    private _snackBar:MatSnackBar,
    private router:Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      this.brand_id = data.id;
    });
    if (this.brand_id){
      this.carService.deleteCarBrand(this.brand_id).subscribe(data =>{
        this._snackBar.open("Delete Brand successfully","Dismiss",{duration:3000});
        this.router.navigate(['/cars/view']);
      },err => {
        this._snackBar.open("Unable to delete this brand","Dismiss",{duration:3000});
      });
    }
  }

}
