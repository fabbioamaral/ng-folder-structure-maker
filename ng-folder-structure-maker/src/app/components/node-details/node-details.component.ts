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
  @Output() deleteNode = new EventEmitter<string>();
  @Output() createNewFile = new EventEmitter();
  @Output() createNewFolder = new EventEmitter();

  constructor() {}

  addNodeChild() {
    this.addChildNodeEvent.emit();
  }

  deleteNodeChild() {
    this.deleteNode.emit(this.node?.id);
  }
}
