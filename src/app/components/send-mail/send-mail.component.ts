import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-send-mail',
  templateUrl: './send-mail.component.html',
  styleUrls: ['./send-mail.component.css']
})
export class SendMailComponent implements OnInit {
  contactForm: any;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      lastName: ['', [Validators.required, Validators.pattern('^[a-zA-z\\s]*$')]],
      firstName: ['', [Validators.required, Validators.pattern('^[a-zA-z\\s]*$')]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]*$'), Validators.minLength(10)]],
      emailAddress: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[com]{2,4}$')]],
    });
  }
  onSubmit() {
    console.log("this is called");
    console.log(this.contactForm.value);
  }
}
