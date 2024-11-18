import { Component } from '@angular/core';
import { CdkDrag, CdkDragHandle, CdkDropList } from '@angular/cdk/drag-drop';
import { BoxComponent } from './components/box/box.component';
import { ShelfComponent } from './components/shelf/shelf.component';

@Component({
  selector: 'main',
  standalone: true,
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
  imports: [CdkDrag, CdkDragHandle, CdkDropList, ShelfComponent, BoxComponent]
})
export class MainComponent {

}
