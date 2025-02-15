
import { PathNode, Position } from '../types/nodes';

export function calculateNodePositions(
  nodes: PathNode[],
  centerX: number = 50,
  centerY: number = 50,
  radius: number = 30
): Map<string, Position> {
  const positions = new Map<string, Position>();
  const angleStep = (2 * Math.PI) / nodes.length;

  nodes.forEach((node, index) => {
    const angle = index * angleStep;
    positions.set(node.id, {
      x: centerX + radius * Math.cos(angle),
      y: centerY + radius * Math.sin(angle)
    });
  });

  return positions;
}

export function getNodeConnections(nodes: PathNode[]): { from: Position & { status: string }; to: Position & { status: string } }[] {
  const connections: { from: Position & { status: string }; to: Position & { status: string } }[] = [];
  
  nodes.forEach(node => {
    if (node.connections) {
      node.connections.forEach(targetId => {
        const targetNode = nodes.find(n => n.id === targetId);
        if (targetNode) {
          connections.push({
            from: { x: node.x, y: node.y, status: node.status },
            to: { x: targetNode.x, y: targetNode.y, status: targetNode.status }
          });
        }
      });
    }
  });

  return connections;
}
