import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SignupRequestPayload } from '../sing-up/SignupRequestPayload ';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  signup(signupRequestPayload: SignupRequestPayload): Observable<any> {
    // {responseType: 'text'} If I dont add this, otherwise client couldnt parse Json because server returns String.
    return this.http.post('http://localhost:8080/api/auth/signup', signupRequestPayload,{responseType: 'text'});
  }
}
