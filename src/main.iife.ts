/**
 * IIFE entry point for browser script tag usage
 * Exposes tinytoast as a global variable
 */

import { configure, config } from './config';
import { Toast } from './toast';

// Export to window for IIFE build
declare global {
  interface Window {
    tinytoast: {
      Toast: typeof Toast;
      configure: typeof configure;
      config: typeof config;
    };
  }
}

window.tinytoast = {
  Toast,
  configure,
  config
};

export { Toast, configure, config };
