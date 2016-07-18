import { Component } from '@angular/core';
import { DinosaurComponent } from './components/dinosaur/dinosaur'

@Component({
  selector: 'my-app',
  template: '<h1>Demo Angular App!</h1><dinosaur></dinosaur>'
})
export class AppComponent { }
