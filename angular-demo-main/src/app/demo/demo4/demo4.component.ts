import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms'

@Component({
  selector: 'app-demo4',
  templateUrl: './demo4.component.html',
  styleUrls: ['./demo4.component.scss']
})
export class Demo4Component {

  ErrorMessage : string = ''

  formGroup! : FormGroup

  myNewUser! : newUser




  constructor(private formBuilder : FormBuilder){

    this.formGroup = this.formBuilder.group({
      pseudo : [null, Validators.required],
      email : [null, [Validators.required, Validators.email]],
      password : [null, Validators.required],
      passwordConfirmation : [null,  [Validators.required]]
    })

  }

  Submit(){

    this.ErrorMessage = ''
    let values = this.formGroup.value

    if (values['password'] === values['passwordConfirmation']) {
      this.myNewUser = {
      pseudo: values['pseudo'],
      email : values['email'],
      password : values['password'],
      passwordConfirmation : values['passwordConfirmation'],
      }

      console.log(this.myNewUser);

    }
    else{
      this.ErrorMessage = 'Les mots de pass doivent correspondre !'
    }



  }



}

export interface newUser{
  pseudo: string
  email : string
  password : string
  passwordConfirmation : string
}
