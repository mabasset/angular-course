import { Component, EmbeddedViewRef, TemplateRef, viewChild, ViewContainerRef } from '@angular/core';
import { CdkDrag } from '@angular/cdk/drag-drop';
import { ClosetComponent } from './components/closet/closet.component';
import { ShelfComponent } from './components/shelf/shelf.component';
import { BoxComponent } from './components/box/box.component';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
  imports: [CdkDrag, ClosetComponent, ShelfComponent, BoxComponent]
})
export class MainComponent {
  private viewContainerRef = viewChild.required('container', { read: ViewContainerRef });
  private closetTemplate = viewChild.required('closet', { read: TemplateRef });
  private shelfTemplate = viewChild.required('shelf', { read: TemplateRef });
  private boxTemplate = viewChild.required('box', { read: TemplateRef });

  createCloset() {
    const closet = this.viewContainerRef().createEmbeddedView(this.closetTemplate());
  }
  createShelf() {
    const shelf = this.viewContainerRef().createEmbeddedView(this.shelfTemplate());
  }
  createBox() {
    type Context = {
      view: EmbeddedViewRef<any> | undefined;
    }
    const context: Context = {view: undefined}
    const view = this.viewContainerRef().createEmbeddedView(this.boxTemplate(), context);
    context.view = view
  }
  clearContainer() {
    this.viewContainerRef().clear()
  }
}
