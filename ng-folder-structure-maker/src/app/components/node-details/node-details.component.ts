import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NodeModel, NodeType } from 'src/app/models/node.model';

@Component({
  selector: 'app-node-details',
  templateUrl: './node-details.component.html',
  styleUrls: ['./node-details.component.scss'],
})
export class NodeDetailsComponent {
  @Input() node: NodeModel | undefined;
  @Output() addChildNodeEvent = new EventEmitter();
  @Output() deleteNode = new EventEmitter<string>();
  @Output() createNewFileEvent = new EventEmitter<NodeModel>();
  @Output() createNewFolderEvent = new EventEmitter<NodeModel>();

  constructor() {}

  addNodeChild() {
    this.addChildNodeEvent.emit();
  }

  deleteNodeChild() {
    this.deleteNode.emit(this.node?.id);
  }

  createNewNamedNode(nodeType: NodeType) {
    const newNode: NodeModel = {
      name: 'abc',
      type: nodeType,
      id: this.node!.id,
      children: [],
      isRoot: false,
    };
    this.createNewFileEvent.emit(newNode);
  }

  createNewFolder() {
    this.createNewFolderEvent.emit();
  }
}
