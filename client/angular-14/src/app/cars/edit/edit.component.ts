import { MatSnackBar } from '@angular/material/snack-bar';
import { FormBuilder, FormGroup, FormControl , Validators } from '@angular/forms';
import { CarService } from './../services/car.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
interface Status {
  value: boolean;
  viewValue: string;
}
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  brand_id : string = '';
  brand_detail : any;
  edit_brand_form : FormGroup = new FormGroup({});
  dataLoaded : boolean = false;
  status:Status[] =[
    {value:true,viewValue:'Active'},
    {value:false,viewValue:'Inactive'}
  ];
  constructor(private activatedRoute : ActivatedRoute,
    private carService : CarService,
    private router:Router,
    private formBuilder:FormBuilder,
    private _snackBar:MatSnackBar) { }

  ngOnInit(): void {
    this.dataLoaded = false;
    this.activatedRoute.params.subscribe(data => {
      this.brand_id = data.id;
    });
    if(this.brand_id !== ''){
      this.carService.viewCarBrand(this.brand_id).toPromise().then(data => {
        this.brand_detail = data;
        //Object.assign(this.brand_detail,data);

        //edit form
        this.edit_brand_form = this.formBuilder.group({
          'name' : new FormControl(this.brand_detail.name,[Validators.required,Validators.minLength(3)]),
          'national' : new FormControl(this.brand_detail.national,[Validators.required,Validators.minLength(2)]),
          'status' : new FormControl(this.brand_detail.status,[Validators.required])
        })
        this.dataLoaded = true;
      }).catch(err =>{
        this._snackBar.open(err,'Dismiss',{duration:3000});
      })
    }
  }
  updateBrand(){
    this.carService.editCarBrand(this.brand_id,this.edit_brand_form.value).subscribe(data => {
      this._snackBar.open("Update Car Brand successfully","Dismiss",{duration:3000});
      this.router.navigate(['/cars/view']);
    },err =>{
      this._snackBar.open("Unable to edit car brand","Dismiss",{duration:3000});
    })
  }

}