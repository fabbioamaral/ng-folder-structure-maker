import { Component, Input, OnInit, Output } from '@angular/core';
import { NodeModel } from 'src/app/models/node.model';

@Component({
  selector: 'app-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.scss'],
})
export class NodeComponent implements OnInit {
  @Input() node: NodeModel | undefined;
  @Input() nodeIndex: number | undefined;

  ngOnInit() {}

  addChildNode() {
    const randomId = Math.round(Math.random() * 100);
    this.node?.children?.push({
      type: 'unset',
      id: randomId.toString(),
      isRoot: false,
    });
  }
}
