// Extend the Window interface to include optimeleon
declare global {
  interface Window {
    optimeleon?: {
      (action: 'track', eventName: string): void;
      // Add other optimeleon methods if needed
    };
  }
}

export {}; // This file needs to be a module
