import { Component, computed, signal } from '@angular/core';

@Component({
  templateUrl: './counter-page.component.html',
  styleUrl: './counter-page.component.css'
})
export class CounterPageComponent {

  counter = signal(10);
  squareCounter = computed( () => this.counter() ** 2 )

  increaseBy( value: number ) {
    // this.counter.set( this.counter() + value );
    this.counter.update( current => current + value );
  }

}
