/**
 * IIFE entry point for browser script tag usage
 * Exposes plain-toast as a global variable
 */

import { configure, config } from './config';
import { Toast } from './toast';

// Export to window for IIFE build
declare global {
  interface Window {
    plainToast: {
      Toast: typeof Toast;
      configure: typeof configure;
      config: typeof config;
    };
  }
}

window.plainToast = {
  Toast,
  configure,
  config
};

export { Toast, configure, config };
