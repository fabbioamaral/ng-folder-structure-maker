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

  /**
   * Retrieves folder structure from JSON file used as mock data
   */
  public init(): void {
    this.http.get<NodeModel[]>('assets/data/nodes.json').subscribe((nodes) => {
      this.nodes$.next(nodes);
    });
  }

  /**
   * Returns current nodes from the folder structure
   * @returns
   */
  getNodes(): Observable<NodeModel[]> {
    return this.nodes$;
  }

  /**
   * Sets new folder structure by providing nodes
   * @param nodes the nodes that will compose the folder structure
   */
  setNodes(nodes: NodeModel[]): void {
    this.nodes$.next(nodes);
  }
}
