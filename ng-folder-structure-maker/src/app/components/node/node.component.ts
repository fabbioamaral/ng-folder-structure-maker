import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NodeModel } from 'src/app/models/node.model';

@Component({
  selector: 'app-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.scss'],
})
export class NodeComponent implements OnInit {
  @Input() node: NodeModel | undefined;
  @Input() nodeIndex: number | undefined;
  @Output() deletingChildNode = new EventEmitter<string>();
  @Output() addingChildNode = new EventEmitter<NodeModel>();

  ngOnInit() {}

  /**
   * Adds child node of type 'unset' to the children property of the parent node.
   *
   */
  addChildNode(): void {
    const randomId = Math.round(Math.random() * 100);
    this.node?.children?.push({
      type: 'unset',
      id: randomId.toString(),
      isRoot: false,
    });
  }

  /**
   * Deletes a node
   *
   * @param id node id that will be deleted
   */
  deleteItem(id: string): void {
    this.node!.children = this.node?.children?.filter((i) => i.id !== id);
  }

  /**
   * Replaces a child node of type 'unset' with a well defined node
   */
  addNamedNode(newNamedNode: NodeModel): void {
    const nodeIndex = this.node!.children!.findIndex(
      (n) => n.id === newNamedNode.id
    );
    this.node!.children![nodeIndex] = newNamedNode;
  }
}
