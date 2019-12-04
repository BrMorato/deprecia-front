import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Módulo de depreciação de bens';
  values= 'one two three'.split(' ');
  selectedValue = 'two';
  onChange(newValue) {
    console.log(newValue);
    this.selectedValue = newValue;
}
}
