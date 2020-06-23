import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-submit-docs',
  templateUrl: './submit-docs.component.html',
  styleUrls: ['./submit-docs.component.css']
})
export class SubmitDocsComponent implements OnInit {
  contactForm: FormGroup
  contactData: any;
  constructor(private fb: FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      lastName: ['', [Validators.required, Validators.pattern('^[a-zA-z\\s]*$')]],
      firstName: ['', [Validators.required, Validators.pattern('^[a-zA-z\\s]*$')]],
      middleName: ['', [Validators.pattern('^[a-zA-z\\s]*$')]],
      gender: ['', [Validators.required]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]*$'), Validators.minLength(10)]],
      emailAddress: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[com]{2,4}$')]],
      matrialStatus: ['', [Validators.required]],
      date: ['', [Validators.required]]
    });
  }
  currentDate = new Date();
  onReset() {
    this.contactForm.reset();
  }
  onSubmit() {
    console.log("this is called")
    console.log(this.contactForm.value)
  }

}
