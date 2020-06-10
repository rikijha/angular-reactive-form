import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DateFormControl } from '../date-form-control';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.css']
})
export class CardFormComponent implements OnInit {
  cardForm=new FormGroup({
      name:new FormControl('',
      [Validators.required,Validators.minLength(3),Validators.maxLength(20),Validators.pattern('[a-zA-z ]*')]),
      cardNumber:new FormControl('',[Validators.required,Validators.minLength(16),Validators.maxLength(16),Validators.pattern('[0-9]*')]),
      expiration:new DateFormControl('',[
        Validators.required,
        Validators.pattern(/^(0[1-9]|1[0-2])\/\d{2}$/)
      ]),
      securityCode:new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(3)])
  });
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.cardForm.value)
  }

  onReset(){
    this.cardForm.reset();
  }

}
