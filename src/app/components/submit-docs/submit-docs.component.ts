import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-submit-docs',
  templateUrl: './submit-docs.component.html',
  styleUrls: ['./submit-docs.component.css']
})
export class SubmitDocsComponent implements OnInit {
  contactForm: FormGroup
  contactData: any;
  @Input() user: any
  @Input() token: any
  userData: { firstName: any; lastName: any; emailAddress: any; };
  constructor(private fb: FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {
    this.userData = { firstName: this.user["given_name"], lastName: this.user["family_name"], emailAddress: this.user.email }
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
    this.handleLoginData()
  }

  handleLoginData() {
    this.contactForm.patchValue(this.userData)
  }

  currentDate = new Date();
  onReset() {
    this.contactForm.reset();
  }
  onSubmit() {
    console.log("this is called")
    console.log(this.contactForm.value)
    this.http.post("http://172.17.13.99:8080/insert", { body: this.contactForm.value }).subscribe((data) => {
      console.log(data);
    })
  }

}
