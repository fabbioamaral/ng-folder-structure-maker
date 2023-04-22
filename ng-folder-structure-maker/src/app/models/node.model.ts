export interface NodeModel {
  type: NodeType;
  name?: string;
  children?: NodeModel[];
  id: string;
  isRoot?: boolean;
}

export type NodeType = 'folder' | 'file' | 'unset' | null;
