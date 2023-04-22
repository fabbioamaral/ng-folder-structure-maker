import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NodeModel } from 'src/app/models/node.model';

@Component({
  selector: 'app-node-details',
  templateUrl: './node-details.component.html',
  styleUrls: ['./node-details.component.scss'],
})
export class NodeDetailsComponent {
  @Input() node: NodeModel | undefined;
  @Output() addChildNodeEvent = new EventEmitter();

  constructor() {}

  addNodeChild() {
    this.addChildNodeEvent.emit();
  }
}
