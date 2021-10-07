import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { AppBroadCastService } from  '../app.broadcast.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor(public router: Router, private fb: FormBuilder, private appBroadCastService: AppBroadCastService) {}

  public personDetailForm: FormGroup;

  public formattedaddress=" ";

  public  options={
    componentRestrictions:{
      country:["AU"]
    }
  }

  ngOnInit() {
    console.log("parent");
    this.createForm();
    this.subscribeDataFromChild();
  }

  public createForm() {
    this.personDetailForm = this.fb.group({
      name: new FormControl("", Validators.required),
      email: new FormControl("", [Validators.required, Validators.email]),
      mobile: new FormControl("", Validators.required),
      address: new FormControl("", Validators.required),
      lattitude: new FormControl(12.34, Validators.required),
      longitude: new FormControl(11.56, Validators.required),
    });

  }

  public redirectToChild() {
    this.router.navigate(["/child"]);
  }

  public backToHome() {
    this.router.navigate(["/home"]);
  }

  public onSaveClick() {
    if (this.personDetailForm.valid) {
      this.appBroadCastService.pubPersonalDetail(this.personDetailForm.getRawValue());
      console.log(this.personDetailForm, "form");
      this.router.navigate(["/child"]);
    }
  }

  public subscribeDataFromChild() {
    this.appBroadCastService.personalDetailFromChild.subscribe((result) => {
      if (result) {
        this.personDetailForm.patchValue({
          name: result.name,
          email: result.email,
          mobile: result.mobile,
          address: result.address,
        })
      }
    })
  }

  public AddressChange(address: any) {
    //setting address from API to local variable
     this.formattedaddress=address.formatted_address
     console.log(this.formattedaddress, "address");
  }

  public onAddressSearch(event) {
    console.log(event, "event");
    this.appBroadCastService.pubPersonalDetail(this.personDetailForm);
    // let autocomplete = new google.maps.places.Autocomplete(event);
    // console.log(autocomplete, "autocomplete");
  }

}
