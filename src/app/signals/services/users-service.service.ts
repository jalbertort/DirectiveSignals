import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { SingleUserRepose, User } from '../interfaces/user-request.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private http = inject( HttpClient );
  private baseURL = 'https://reqres.in/api/users';

  getUserById( id: number ): Observable<User>{
    return this.http.get<SingleUserRepose>(`${this.baseURL}/${id}`)
      .pipe(
        map( response => response.data ),
      )
  }

}
