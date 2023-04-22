import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, take } from 'rxjs';
import { NodeModel } from './models/node.model';
import { NodeService } from './services/node.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  nodes$!: Observable<NodeModel[]>;
  showFormToAddFolderToRoot = false;
  newFolderRootForm!: FormGroup;

  constructor(private nodeService: NodeService) {}

  ngOnInit() {
    this.nodes$ = this.nodeService.getNodes();

    this.nodeService.init();

    this.initializeForm();
  }

  initializeForm() {
    this.newFolderRootForm = new FormGroup({
      newFolderName: new FormControl('', Validators.required),
    });
  }

  toggleFormDisplay() {
    this.newFolderRootForm.reset();
    this.showFormToAddFolderToRoot = !this.showFormToAddFolderToRoot;
    this.nodes$.subscribe((nodes) => console.log(nodes));
  }

  addFolderToRoot(folderName: string) {
    this.nodes$.pipe(take(1)).subscribe((nodes) => {
      const newFolderWithinRoot: NodeModel = {
        name: folderName,
        id: Math.round(Math.random() * 100).toString(),
        type: 'folder',
        children: [],
        isRoot: true,
      };
      nodes.push(newFolderWithinRoot);
      this.nodeService.setNodes(nodes);
      this.toggleFormDisplay();
    });
  }
}
