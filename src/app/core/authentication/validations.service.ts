import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidationsService {

  constructor() { }

  invalidForm(form, field:string) {
    return form.get(field).invalid && form.get(field).touched;
  }

	invalidPassword2(form) {
  	const pass1 = form.get('password').value;
  	const pass2 = form.get('password2').value;

  	return pass1 !== pass2 && form.get('password2').touched;
  }

  samePassword(pass1Name: string, pass2Name: string) {
    return (formGroup: FormGroup) => {

      const pass1Control = formGroup.controls[pass1Name];
      const pass2Control = formGroup.controls[pass2Name];

      if (pass1Control.value === pass2Control.value) {
        pass2Control.setErrors(null);
      } else {
        // TODO:
        // Not should there are variables in Spanish
        pass2Control.setErrors({noEsIgual: true})
      }

    }
  }

}
