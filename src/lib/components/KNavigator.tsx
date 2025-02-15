
import React, { useState, useEffect } from 'react';
import { PathNode } from '../types/nodes';
import { calculateNodePositions, getNodeConnections } from '../utils/nodeCalculator';
import { Heart, Palette, Store, Star } from 'lucide-react';

interface KNavigatorProps {
  initialNodes?: PathNode[];
  onNodeClick?: (node: PathNode) => void;
  theme?: 'light' | 'dark';
}

export const KNavigator: React.FC<KNavigatorProps> = ({
  initialNodes,
  onNodeClick,
  theme = 'dark'
}) => {
  const [nodes, setNodes] = useState<PathNode[]>(initialNodes || []);
  const [activeNodeId, setActiveNodeId] = useState<string | null>(null);

  const defaultNodes: PathNode[] = [
    {
      id: 'welcome',
      name: 'Welcome to K-Town',
      description: 'Start your journey',
      icon: <Star className="w-6 h-6 text-white" />,
      x: 50,
      y: 50,
      color: 'from-purple-500 to-purple-600',
      status: 'available',
      type: 'hub',
      connections: ['retail', 'fan', 'creative']
    },
    {
      id: 'retail',
      name: 'Retail Network',
      description: 'Create your business profile',
      icon: <Store className="w-6 h-6 text-white" />,
      x: 30,
      y: 30,
      color: 'from-pink-500 to-pink-600',
      status: 'available',
      type: 'network'
    },
    {
      id: 'fan',
      name: 'Fan Community',
      description: 'Join the fan community',
      icon: <Heart className="w-6 h-6 text-white" />,
      x: 50,
      y: 20,
      color: 'from-red-500 to-red-600',
      status: 'available',
      type: 'network'
    },
    {
      id: 'creative',
      name: 'Creative Network',
      description: 'Showcase your talent',
      icon: <Palette className="w-6 h-6 text-white" />,
      x: 70,
      y: 30,
      color: 'from-orange-500 to-orange-600',
      status: 'available',
      type: 'network'
    }
  ];

  useEffect(() => {
    if (!initialNodes) {
      setNodes(defaultNodes);
    }
  }, [initialNodes]);

  const handleNodeClick = (node: PathNode) => {
    setActiveNodeId(node.id);
    onNodeClick?.(node);
  };

  const getNodeSize = (node: PathNode) => {
    switch (node.type) {
      case 'hub':
        return 'w-20 h-20';
      default:
        return 'w-16 h-16';
    }
  };

  return (
    <div className={`relative w-full h-screen ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-100'}`}>
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        {getNodeConnections(nodes).map((connection, index) => (
          <line
            key={index}
            x1={`${connection.from.x}%`}
            y1={`${connection.from.y}%`}
            x2={`${connection.to.x}%`}
            y2={`${connection.to.y}%`}
            stroke={theme === 'dark' ? '#ffffff' : '#000000'}
            strokeWidth="2"
            strokeDasharray={connection.to.status === 'locked' ? '4' : '0'}
            className="opacity-30"
          />
        ))}
      </svg>

      {nodes.map((node) => {
        const isActive = node.id === activeNodeId;
        return (
          <button
            key={node.id}
            onClick={() => handleNodeClick(node)}
            className={`absolute transform -translate-x-1/2 -translate-y-1/2 
              ${node.status === 'locked' ? 'opacity-50' : 'active:scale-95'} 
              transition-all duration-200
              ${isActive ? 'scale-110' : 'hover:scale-105'}`}
            style={{ left: `${node.x}%`, top: `${node.y}%` }}
          >
            <div 
              className={`${getNodeSize(node)} rounded-xl shadow-lg 
                ${node.status === 'locked' 
                  ? 'bg-gray-600' 
                  : `bg-gradient-to-br ${node.color}`}
                flex items-center justify-center relative
                ${isActive ? 'ring-4 ring-white ring-opacity-50' : ''}
                transition-all duration-200`}
            >
              {node.icon}
            </div>
            <div className={`mt-2 text-sm font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              {node.name}
            </div>
          </button>
        );
      })}
    </div>
  );
};

export default KNavigator;
