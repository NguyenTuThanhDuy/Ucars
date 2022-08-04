import { Router } from '@angular/router';
import { AppComponent } from './../../app.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CarService } from './../services/car.service';
import { Component, NgModule, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';

interface Status {
  value: boolean;
  viewValue: string;
}
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  addCarBrandForm : FormGroup = new FormGroup({});
  status:Status[] =[
    {value:true,viewValue:'Active'},
    {value:false,viewValue:'Inactive'}
  ];
  constructor(private formBuilder : FormBuilder,
    private carService : CarService,
    private _snackBar : MatSnackBar,
    private router:Router,
    private imageService: ImageService) { }
  ngOnInit(): void {
    this.addCarBrandForm = this.formBuilder.group({
      'name' : new FormControl('',[Validators.required,Validators.minLength(3)]),
      'national' : new FormControl('',[Validators.required,Validators.minLength(2)]),
      'status' : new FormControl(this.status[0].value,[Validators.required])
    })
  }

  createCarBrand(){
    this.carService.addCarBrand(this.addCarBrandForm.value).subscribe(data =>{
      this._snackBar.open("Car Brand created successfully",'Dismiss',{duration:3000});
      this.router.navigate(['/cars/view']);
    },err =>{
      this._snackBar.open("Unable to create car brand",'Dismiss',{duration:3000});
    });
  }

}
