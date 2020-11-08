import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  registration: FormGroup;


  dataresponse: any = {
    user_id:"Ato222",
    password:"11w1w1w",
    name:"Suhas K",
    address: {
      currentaddress:"Pune",
      currentAddress: "Karvenagar"
    }  
  }

  controlcount: any = {
    conunt: 10
  }

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.createRegistrationCtrl();
    if(this.dataresponse !== null){
      this.updateDataforuser(this.dataresponse);
    }
  }


  updateDataforuser(dataresponse){
    debugger;
    if(dataresponse !== null){
      this.registration.patchValue({
        user_id: [dataresponse.user_id, {disabled: true}],
        password: dataresponse.password,
        name: dataresponse.name,
        address: this.addresspatchvalue(dataresponse.address)
      })
    }
  }
  addresspatchvalue(addresss){
    this.registrationForms.removeAt(0);
    for(let add of Object.values('currentAddress')){
      this.registrationForms.push(
        this.updateAddressGroup(add)
      )
    }
  }
  updateAddressGroup(addval): FormGroup{
    return this.fb.group({
      currentAddress:[{addval}]
    });
  }


  createRegistrationCtrl(){
    this.registration = this.fb.group({
      user_id:[''],
      password:[''],
      name:[''],
      address:this.fb.array([this.addressDetails()])
    })
  }
  
  addressDetails(): FormGroup {
    return this.fb.group({
        currentAddress:['']
      });
  }

  get registrationForms() {
    return this.registration.get('address') as FormArray;
  }

  generateArrayctrl(e){
    if(e > 0){
      for(let i=0; i < e; i++){
        this.AddRow(e);
      }
    }else if(e === 0 || e === ''){
      this.RemoveRow(e)
    }
  }

  AddRow(e): void {
    this.registrationForms.push(this.addressDetails());
  }
  RemoveRow(e) {
    this.registrationForms.removeAt(0);
  }

  submitRegistrationDetails(event){
    console.log(this.registration.value);
  }

}
