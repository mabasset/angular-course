import { Component, EmbeddedViewRef, input, output } from '@angular/core';

@Component({
    selector: 'div[box]',
    templateUrl: './box.component.html',
    styleUrl: './box.component.css',
})
export class BoxComponent {
    view = input<EmbeddedViewRef<any>>();

    close() {
        this.view()?.destroy();
    }
}
