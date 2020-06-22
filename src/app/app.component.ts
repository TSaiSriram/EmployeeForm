import { HttpClient} from '@angular/common/http';
import { Component, OnInit} from '@angular/core';
import { FormGroup,FormControl,Validators, FormBuilder} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  contactForm : FormGroup
  contactData: any;
  constructor(private fb:FormBuilder, private http : HttpClient) {}

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      lastName: ['',[Validators.required, Validators.pattern('^[a-zA-z\\s]*$')]],
      firstName: ['',[Validators.required, Validators.pattern('^[a-zA-z\\s]*$')]],
      department:['', [Validators.required]],
      emailAddress:['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[com]{2,4}$')]],
      phone:['',[Validators.required, Validators.pattern('^[0-9]*$'), Validators.minLength(12)]]
    });
  }

  onReset() {
    this.contactForm.reset();
  }
  onSubmit() {
    const data ={
      lastname: this.contactForm.get('lastName').value,
      firstname: this.contactForm.get('firstName').value,
      department: this.contactForm.get('department').value,
      emailAddress: this.contactForm.get('emailAddress').value,
      phone: this.contactForm.get('phone').value,
    }
    this.http.post('http://172.17.13.99:8081/email/sendmail', data).subscribe((res:any)=>{
      this.contactData = res;
      console.log('response',res);
      console.log('response 2',this.contactData);
  });
  console.log(this.contactForm.value);
  alert('submitted \n\n' + JSON.stringify(this.contactForm.value)) 

}


}
