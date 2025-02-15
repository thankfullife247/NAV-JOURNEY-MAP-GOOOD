
import React from 'react';
import { KNavigator } from '../lib/components/KNavigator';

const Index = () => {
  const handleNodeClick = (node: any) => {
    console.log('Node clicked:', node);
  };

  return (
    <div className="w-full h-screen">
      <KNavigator onNodeClick={handleNodeClick} />
    </div>
  );
};

export default Index;
