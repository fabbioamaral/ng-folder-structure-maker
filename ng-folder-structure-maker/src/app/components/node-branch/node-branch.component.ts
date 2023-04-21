import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-node-branch',
  templateUrl: './node-branch.component.html',
  styleUrls: ['./node-branch.component.scss'],
})
export class NodeBranchComponent {
  @Input() isFirstBranch: boolean | undefined;
}
