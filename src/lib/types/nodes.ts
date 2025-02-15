
import { ReactNode } from 'react';

export interface PathNode {
  id: string;
  name: string;
  description: string;
  icon: ReactNode;
  x: number;
  y: number;
  color: string;
  status: 'locked' | 'available' | 'completed';
  type: 'hub' | 'business' | 'network' | 'milestone' | 'strategy' | 'category';
  connections?: string[];
  strategies?: {
    name: string;
    description: string;
    icon: ReactNode;
    benefits: string[];
  }[];
}

export interface Position {
  x: number;
  y: number;
}

export interface NodeConnection {
  from: PathNode;
  to: PathNode;
}
