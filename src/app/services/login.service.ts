import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public subject: Subject<any>;
  constructor() {
    this.subject = new Subject();
  }
}
