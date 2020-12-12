import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, ReactiveFormsModule, FormControlName } from '@angular/forms';

@Component({
  selector: 'app-business-register',
  templateUrl: './business-register.component.html',
  styleUrls: ['./business-register.component.scss'],

})
export class BusinessRegisterComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  isEditable = false;
  activityTimes: any[];
  newBusiness: any;
  title;
  value2;
  hide1 = true;
  hide2 = true;
  hide3 = true;
  hide4 = true;

  constructor(private _formBuilder: FormBuilder) { }
  days = new FormControl();

  daysList: string[] = ['ראשון', 'שני', 'שלישי', 'רביעי', 'חמישי', 'שישי'];

  ngOnInit() {
    this.firstFormGroup = new FormGroup({
      businessName: new FormControl(),
      adress_street: new FormControl(),
      adress_num: new FormControl(),
      adress_city: new FormControl(),
      password: new FormControl(),
      confirmPassword: new FormControl(),
      adminPassword: new FormControl(),
      confirmAdminPassword: new FormControl()
    });
    this.secondFormGroup = new FormGroup({
      category:new FormControl(),
      serviceName:new FormControl(),
      isAdvanceEnable:new FormControl(),
      numOfDays:new FormControl()
    });
    this.thirdFormGroup = new FormGroup({
      numOfWorkers:new FormControl(),
      days:new FormControl()
    })
  }

  confirmFirstStep() {
    // console.log("busines details:", this.businessName,this.adress_street,this.adress_num,this.adress_street,this.password,this.adminPassword)
    //this.newBusiness.BusinessName =
    console.log("first form group: ", this.firstFormGroup.controls);
    console.log("name:", this.firstFormGroup.value["businessName"]);
  }

  confirmSecondStep(){
    console.log("second form group: ", this.secondFormGroup.controls)
  }

  confirmThirdStep(){
    console.log("third form group: ", this.thirdFormGroup.controls)

  }

  saveBusiness() {

  }

  addActivityTime() {

  }
}
