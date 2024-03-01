import { Component, computed, effect, signal } from '@angular/core';
import { User } from '../../interfaces/user-request.interface';

@Component({
  templateUrl: './properties-page.component.html',
  styleUrl: './properties-page.component.css'
})
export class PropertiesPageComponent {

  counter = signal(10)

  user = signal<User>({
    id: 1,
    first_name: 'Valeryn',
    last_name: 'De León',
    email: 'vdeleon@gmail.com',
    avatar: 'https://reqres.in/img/faces/2-image.jpg'
  })

  fullName = computed( () => `${this.user().first_name} ${this.user().last_name}` );

  userChangedEffect = effect( () => {
    console.log(`${this.user().first_name} - ${this.counter()}`);
    
  })

  onFieldUpdate(field: keyof User, value: string) {

    // this.user.update( current => ({
    //   ...current,
    //   [field]: value
    // }))

    // this.user.set({
    //   ...this.user(),
    //   [field]: value,
    // })

    this.user.update( current => {

      switch( field ) {
        case 'email':
          current.email = value;
          break;

        case 'avatar':
          current.avatar = value;
          break;
        
          case 'first_name':
            current.first_name = value;
            break;

          case 'last_name':
            current.last_name = value;
            break;

          case 'id':
            current.id = Number(value);
            break;
      }

      return current;
    })

  }

  increaseBy( number: number) {
    this.counter.update( current => current + number)
  }

}
