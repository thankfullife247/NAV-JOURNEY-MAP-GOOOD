
import React from 'react';
import { KNavigator } from '../lib/components/KNavigator';

const Index = () => {
  return (
    <div className="font-sans">
      <div className="max-w-3xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-8">K-Navigator - Installation Guide</h1>

        <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg mb-8">
          <strong className="block mb-2">⚠️ Required Dependencies:</strong>
          <ul className="list-disc pl-5">
            <li>React (>= 18.0.0)</li>
            <li>ReactDOM (>= 18.0.0)</li>
            <li>Lucide React (>= 0.462.0)</li>
          </ul>
        </div>

        <h2 className="text-2xl font-semibold mb-4">Installation</h2>
        <p className="mb-4">Download the following files and include them in your project:</p>
        <ul className="list-disc pl-5 mb-8">
          <li><code className="bg-gray-100 px-2 py-1 rounded">k-navigator.es.js</code> - ES module version</li>
          <li><code className="bg-gray-100 px-2 py-1 rounded">k-navigator.umd.js</code> - UMD version</li>
          <li><code className="bg-gray-100 px-2 py-1 rounded">style.css</code> - Required styles</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">Usage Example</h2>
        <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto mb-8">
{`import { KNavigator } from './k-navigator.es.js';
import './style.css';

const nodes = [
    {
        id: 'welcome',
        name: 'Welcome to K-Town',
        description: 'Start your journey',
        icon: Star,
        x: 50,
        y: 50,
        color: 'from-purple-500 to-purple-600',
        status: 'available',
        type: 'hub',
        connections: ['retail']
    }
];

function App() {
    return (
        <KNavigator 
            initialNodes={nodes}
            onNodeClick={(node) => console.log('Clicked:', node)}
            theme="dark"
        />
    );
}`}
        </pre>

        <h2 className="text-2xl font-semibold mb-4">Live Demo</h2>
        <div className="h-[400px] mb-8 border border-gray-200 rounded-lg overflow-hidden">
          <KNavigator />
        </div>

        <h2 className="text-2xl font-semibold mb-4">Props Reference</h2>
        <ul className="list-disc pl-5 mb-8">
          <li><code className="bg-gray-100 px-2 py-1 rounded">initialNodes</code>: Array of node objects defining your navigation structure</li>
          <li><code className="bg-gray-100 px-2 py-1 rounded">onNodeClick</code>: Callback function triggered when a node is clicked</li>
          <li><code className="bg-gray-100 px-2 py-1 rounded">theme</code>: 'light' | 'dark' (optional, defaults to 'dark')</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">Need Help?</h2>
        <p>For issues and feature requests, please visit our <a href="https://github.com/your-repo" className="text-blue-500 hover:underline">GitHub repository</a>.</p>
      </div>
    </div>
  );
};

export default Index;
