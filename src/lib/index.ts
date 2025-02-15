
import { KNavigator } from './components/KNavigator';
import type { PathNode } from './types/nodes';

// Export for ES modules
export { KNavigator };
export type { PathNode };

// Export for UMD bundle
if (typeof window !== 'undefined') {
  (window as any).KNavigator = {
    KNavigator
  };
}
