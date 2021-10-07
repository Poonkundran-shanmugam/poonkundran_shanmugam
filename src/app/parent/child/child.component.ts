import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { AppBroadCastService } from '../../app.broadcast.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  
  public personDetailForm: FormGroup;

  constructor(public router: Router, private fb: FormBuilder, private appBroadCastService: AppBroadCastService) {}


  ngOnInit() {
    this.createForm();
    this.subcribeData();
  }

  public createForm() {
    this.personDetailForm = this.fb.group({
      name: new FormControl("", Validators.required),
      email: new FormControl("", [Validators.required, Validators.email]),
      mobile: new FormControl("", [Validators.required, Validators.minLength(10)]),
      address: new FormControl("", Validators.required),
      lattitude: new FormControl(""),
      longitude: new FormControl(""),
    });

  }

  public backToHome() {
    this.router.navigate(["/home"]);
  }

  public onEditClick() {
    this.appBroadCastService.pubPersonalDetailFromChild(this.personDetailForm.getRawValue());
    this.router.navigate(["/parent"]);
  }

  public onDeleteClick() {
    this.personDetailForm.reset();
    this.appBroadCastService.pubPersonalDetailFromChild(this.personDetailForm.getRawValue());
    this.router.navigate(["/parent"]);
  }

  public subcribeData() {
    this.appBroadCastService.personalDetail.subscribe((result) => {
      if (result) {
        this.personDetailForm.patchValue({
          name: result.name,
          email: result.email,
          mobile: result.mobile,
          address: result.address,
          lattitude: result.lattitude,
          longitude: result.longitude,
        });
      }
    })
  }
}
