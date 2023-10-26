import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  public form: FormGroup;
  public formInfo: FormGroup;
  public activeMessage: boolean = false;
  public isReadOnly: boolean = false;


  constructor() {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required,Validators.email])
    });

    this.formInfo = new FormGroup({
        fullName: new FormControl('', [Validators.required, Validators.minLength(5)]),
        emailForm: new FormControl('', [Validators.required, Validators.email]),
        birthDate: new FormControl('', Validators.required),
        phone: new FormControl('', [Validators.required, Validators.maxLength(11)])
    });
  }

  /**
   * 
   */
  public validateEmail():void{
    if (this.form.valid && this.form.get('email')?.value !="") {
      this.activeMessage = true;
      console.log('Formulario válido', this.activeMessage);
      Swal.fire({
        title: 'Info',
        text: 'Excellent, we will be in contact',
        icon: 'success',
        confirmButtonText: 'Ok'
      })
    } else {
      this.activeMessage = false
      console.log('Formulario inválido', this.activeMessage);
      Swal.fire({
        title: 'Error',
        text: 'Error, the field is empty or the email is not valid',
        icon: 'error',
        confirmButtonText: 'Ok'
      })
    }
  }

  public sendEmail():void{
    Swal.fire({
      title: 'Info',
      text: 'Excellent, we will be in contact',
      icon: 'success',
      confirmButtonText: 'Ok'
    })
  }
}
