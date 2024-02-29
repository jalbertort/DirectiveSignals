import { Component, OnInit, inject, signal } from '@angular/core';
import { UsersService } from '../../services/users-service.service';
import { User } from '../../interfaces/user-request.interface';

@Component({
  templateUrl: './user-info-page.component.html',
  styleUrl: './user-info-page.component.css'
})
export class UserInfoPageComponent implements OnInit{

  private userService = inject(UsersService)
  userId = signal(1);

  currentUser = signal<User | undefined>( undefined );
  userWasFound = signal(true);

  ngOnInit(): void {
    this.loadUser( this.userId() )
  }

  loadUser( id: number ) {
    if( id <= 0 ) return;

    this.userId.set(id)
    this.currentUser.set( undefined )

    this.userService.getUserById( id )
      .subscribe( user => {
        this.currentUser.set( user )
      })

  }

}
