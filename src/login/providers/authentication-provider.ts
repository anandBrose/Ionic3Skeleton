import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthenticationProvider {
  constructor() {
    console.log('Hello AuthenticationProvider Provider');
  }
  authenticate(username: string, password: string): Observable < Boolean > {
    let subject = new Subject < any > ();
    setTimeout(() => {
      subject.next(username === "Anand" && password === "123");
    }, 1000);
    return subject.asObservable();
  }
  logout(): Observable < Boolean > {
    let subject = new Subject < any > ();
    setTimeout(function() {
      subject.next(true);
    }, 1000);
    return subject.asObservable();
  }

}
