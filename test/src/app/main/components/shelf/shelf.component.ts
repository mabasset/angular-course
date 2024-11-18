import { Component, input } from '@angular/core';
import { Box } from '../../interfaces/box';
import { BoxComponent } from '../box/box.component';
import { CdkDrag, CdkDragHandle, CdkDropList } from '@angular/cdk/drag-drop';

@Component({
  selector: 'li[shelf]',
  standalone: true,
  imports: [BoxComponent, CdkDrag, CdkDragHandle, CdkDropList],
  templateUrl: './shelf.component.html',
  styleUrl: './shelf.component.css'
})
export class ShelfComponent {
  id = input.required<string>();
  boxList = [{id: "1"}, {id: "3"}];
}
