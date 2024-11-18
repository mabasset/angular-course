import { CdkDragHandle } from '@angular/cdk/drag-drop';
import { Component, input } from '@angular/core';

@Component({
  selector: 'li[box]',
  standalone: true,
  imports: [CdkDragHandle],
  templateUrl: './box.component.html',
  styleUrl: './box.component.css',
})
export class BoxComponent {
  id = input.required<string>();
}
