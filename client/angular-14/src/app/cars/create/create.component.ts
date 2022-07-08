import { MatSnackBar } from '@angular/material/snack-bar';
import { CarService } from './../services/car.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  addCarBrandForm : FormGroup = new FormGroup({});
  constructor(private formBuilder : FormBuilder,
    private carService : CarService,
    private _snackBar : MatSnackBar) { }
  ngOnInit(): void {
    this.addCarBrandForm = this.formBuilder.group({
      'name' : new FormControl(''),
      'national' : new FormControl(''),
      'status' : new FormControl('True')
    })
  }

  createCarBrand(){
    this.carService.addCarBrand(this.addCarBrandForm.value).subscribe(data =>{
      this._snackBar.open("Car Brand created successfully",'Dismiss',{duration:3000});
    },err =>{
      this._snackBar.open("Unable to create car brand",'Dismiss',{duration:3000});
    });
  }

}
