import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NodeModel } from './models/node.model';
import { NodeService } from './services/node.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  nodes$: Observable<NodeModel[]> | undefined;

  constructor(private nodeService: NodeService) {}

  ngOnInit() {
    this.nodes$ = this.nodeService.getNodes();

    this.nodes$.subscribe((nodes) => console.log(nodes));

    this.nodeService.init();
  }
}
