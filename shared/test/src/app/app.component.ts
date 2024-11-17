import { Component } from '@angular/core';
import { MainComponent } from './main/main.component';

@Component({
  selector: 'body',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [MainComponent]
})
export class AppComponent {
  title = 'test';
}
