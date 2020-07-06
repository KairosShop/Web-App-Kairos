import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidationsService {

  constructor() { }

  invalidArguments(argument, form) {
  	return form.get(argument).invalid && form.get(argument).touched;
  }

  invalidName(form) {
  	return this.invalidArguments('firstName', form);
  }

  invalidEmail(form) {
  	return this.invalidArguments('email', form);
  }
	
	invalidPassword(form) {
		return this.invalidArguments('password', form); 
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
        pass2Control.setErrors({noEsIgual: true})
      }

    }
  }
}
