import { Component } from '@angular/core';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';

@Component({
    selector: 'body',
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [MainComponent, HeaderComponent]
})
export class AppComponent {
  title = 'test';
}
