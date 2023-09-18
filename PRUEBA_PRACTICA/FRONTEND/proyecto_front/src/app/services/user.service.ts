import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/User';
import { LoginRequest } from '../models/LoginRequest';


const URL = "http://localhost:5000"
const USER = URL + '/users';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  private user$$ = new BehaviorSubject<User | null>(null);
  user$ = this.user$$.asObservable();

  constructor(private http: HttpClient) { }

  login(loginRequest: LoginRequest) {
    return this.http.post<User>(`${USER}/login`,loginRequest);
  }

  getUserByEmail(email:any) {
    return this.http.get<User>(`${USER}/${email}`);
  }

  public setUser(user: User|null) {
    this.user$$.next(user);
  }

  register(user:User) {
    return this.http.post<any>(`${USER}/`,user);
  }

  getAllUsers(){
    return this.http.get<User[]>(`${USER}`);
  }

  deleteUser(idUser:number){
    return this.http.delete<User[]>(`${USER}/${idUser}`);
  }

  edit(user:User) {
    return this.http.put<any>(`${USER}/${user.id}`,user);
  }

  IsLoggedin(){
    return localStorage.getItem('userId')!=null;
  }
}
