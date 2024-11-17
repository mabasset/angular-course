import { Component } from '@angular/core';
import { CdkDrag, CdkDragHandle, CdkDropList } from '@angular/cdk/drag-drop';

@Component({
  selector: 'main',
  standalone: true,
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
  imports: [CdkDrag, CdkDragHandle, CdkDropList]
})
export class MainComponent {

}
