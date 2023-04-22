import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { NodeModel } from '../models/node.model';

@Injectable({
  providedIn: 'root',
})
export class NodeService {
  private nodes$ = new BehaviorSubject<NodeModel[]>([]);

  constructor(private http: HttpClient) {}

  public init(): void {
    this.http.get<NodeModel[]>('assets/data/nodes.json').subscribe((nodes) => {
      this.nodes$.next(nodes);
    });
  }

  getNodes(): Observable<NodeModel[]> {
    return this.nodes$;
  }

  setNodes(nodes: NodeModel[]): void {
    this.nodes$.next(nodes);
  }
}
