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
  @Output() createNewNodeEvent = new EventEmitter<NodeModel>();

  constructor() {}

  /**
   * Triggers event that will replace a node of type 'unset'
   * with a named and well defined node
   * @param nodeType the named and well defined node
   */
  createNewNamedNode(nodeType: NodeType) {
    let name;
    if (nodeType === 'file') {
      name = 'New File';
    } else {
      name = 'New Folder';
    }

    const newNode: NodeModel = {
      name,
      type: nodeType,
      id: this.node!.id,
      children: [],
      isRoot: false,
    };
    this.createNewNodeEvent.emit(newNode);
  }
}
