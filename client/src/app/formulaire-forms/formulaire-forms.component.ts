import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { ApiService } from '../api.service';
import { Formulaire } from '../formulaire';

@Component({
  selector: 'app-formulaire-forms',
  templateUrl: './formulaire-forms.component.html',
  styleUrls: ['./formulaire-forms.component.css']
})
export class FormulaireFormsComponent {
  addressForm = this.fb.group({
    firstname: [null, Validators.required],
    lastname: [null, Validators.required],
    address: [null, Validators.required],
    city: [null, Validators.required],
    phone_number: [null],
    comment: [null],
    postal_code: [null, Validators.compose([
      Validators.required, Validators.minLength(5), Validators.maxLength(5)])
    ],
    email: [null, Validators.compose([
      Validators.required, Validators.email])
    ]
  });

  constructor(private fb: FormBuilder, private apiService: ApiService) { }

  onSubmit() {
    if (this.addressForm.valid) {
      const addressForm: Formulaire = new Formulaire(this.addressForm.value);
      console.log('addressForm', addressForm);

      this.apiService.addFormulaire(addressForm)
        .subscribe((val) => {
          console.log('POST call successful value returned in body', val);
        },
          response => {
            console.log('POST call in error', response);
          },
          () => {
            console.log('The POST observable is now completed.');
          });
    } else {
      this.validateAllFormFields(this.addressForm);
    }

  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }
}
