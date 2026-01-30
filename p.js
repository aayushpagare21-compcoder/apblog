(function() {
  var variantFunction = function() {
(function () {
  let hydrationDone = false;
  let observer = null;
  let overlayRemoved = false;
  let isApplying = false;
  let failedSelectorPaths = []; // Track failed selector paths for error reporting

  // Store observer reference globally for cleanup on navigation
  if (!window.__optiMutationObserver) {
    window.__optiMutationObserver = null;
  }

  // Safari-compatible requestIdleCallback polyfill
  var safeRequestIdleCallback = window.requestIdleCallback || function(callback, options) {
    var timeout = (options && options.timeout) || 50;
    return setTimeout(function() {
      callback({
        didTimeout: false,
        timeRemaining: function() { return 0; }
      });
    }, timeout);
  };

  // Track DOM script execution with unique ID
  const domScriptExecutionId = '_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
  
  // Emit custom event for DOM script execution start (only once)
  if (typeof window.dispatchEvent === 'function') {
    try {
      const event = new CustomEvent('opti_dom_script_execution_started', {
        detail: {
          eventName: 'dom_script_execution_started',
          timestamp: Date.now(),
          executionId: domScriptExecutionId
        },
        bubbles: true,
        cancelable: true
      });
      window.dispatchEvent(event);
    } catch (e) {
      console.error("Error dispatching custom event", e);
      // Fallback for older browsers
      try {
        const event = document.createEvent('CustomEvent');
        event.initCustomEvent('opti_dom_script_execution_started', true, true, {
          eventName: 'dom_script_execution_started',
          timestamp: Date.now(),
          executionId: domScriptExecutionId
        });
        window.dispatchEvent(event);
      } catch (fallbackError) {
        console.error("Error dispatching custom event", fallbackError);
        // Silent fail
      }
    }
  }

  // Check if debug mode is enabled via URL parameter
  const urlParams = new URLSearchParams(window.location.search);
  const OPTI_DEBUG = urlParams.get('opti_debug') === 'true';

  function removeOverlay() {
    if (overlayRemoved) return;
    overlayRemoved = true;
    OPTI_DEBUG && console.log("[OPTIMELEON] Removing anti-flicker overlay.");
    window.rmfk && window.rmfk();
    window.rmfkSpa && window.rmfkSpa();
  }

  function applyVariantChanges(isInitial = false) {
    if (isApplying) return Promise.resolve();
    isApplying = true;
    OPTI_DEBUG && console.log("[OPTIMELEON] Applying DOM variant changes. Initial =", isInitial);

    if (observer) observer.disconnect();
    
    // Initialize array to collect image load promises
    var __optiImagePromises = [];

    try {
    const element_jtks9lw6osl = document.querySelector('html:nth-of-type(1) > body:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > header:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > header:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > div:nth-of-type(1) > a:nth-of-type(1) > div:nth-of-type(1) > p:nth-of-type(1)');           
    if (element_jtks9lw6osl) {             
      if (element_jtks9lw6osl.innerHTML !== `Explore how simplicity meets precision`) { element_jtks9lw6osl.innerHTML = `Explore how simplicity meets precision`; }
           
    } else if (typeof failedSelectorPaths !== 'undefined' && typeof isInitial !== 'undefined' && isInitial) {
      failedSelectorPaths.push('html:nth-of-type(1) > body:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > header:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > header:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > div:nth-of-type(1) > a:nth-of-type(1) > div:nth-of-type(1) > p:nth-of-type(1)');
    }
  } catch (e) { 
    if (typeof failedSelectorPaths !== 'undefined' && typeof isInitial !== 'undefined' && isInitial) {
      failedSelectorPaths.push('html:nth-of-type(1) > body:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > header:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > header:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > div:nth-of-type(1) > a:nth-of-type(1) > div:nth-of-type(1) > p:nth-of-type(1)');
    }
    console.error(e); 
  }
try {
    const element_43t35ctft5r = document.querySelector('html:nth-of-type(1) > body:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > header:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > header:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > div:nth-of-type(2) > a:nth-of-type(1) > div:nth-of-type(1) > p:nth-of-type(1)');           
    if (element_43t35ctft5r) {             
      if (element_43t35ctft5r.innerHTML !== `Join the team shaping tomorrow`) { element_43t35ctft5r.innerHTML = `Join the team shaping tomorrow`; }
           
    } else if (typeof failedSelectorPaths !== 'undefined' && typeof isInitial !== 'undefined' && isInitial) {
      failedSelectorPaths.push('html:nth-of-type(1) > body:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > header:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > header:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > div:nth-of-type(2) > a:nth-of-type(1) > div:nth-of-type(1) > p:nth-of-type(1)');
    }
  } catch (e) { 
    if (typeof failedSelectorPaths !== 'undefined' && typeof isInitial !== 'undefined' && isInitial) {
      failedSelectorPaths.push('html:nth-of-type(1) > body:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > header:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > header:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > div:nth-of-type(2) > a:nth-of-type(1) > div:nth-of-type(1) > p:nth-of-type(1)');
    }
    console.error(e); 
  }
try {
    const element_h6txy4zxdy8 = document.querySelector('html:nth-of-type(1) > body:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > header:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > header:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > div:nth-of-type(3) > a:nth-of-type(1) > div:nth-of-type(1) > p:nth-of-type(1)');           
    if (element_h6txy4zxdy8) {             
      if (element_h6txy4zxdy8.innerHTML !== `All the details, whenever you need them`) { element_h6txy4zxdy8.innerHTML = `All the details, whenever you need them`; }
           
    } else if (typeof failedSelectorPaths !== 'undefined' && typeof isInitial !== 'undefined' && isInitial) {
      failedSelectorPaths.push('html:nth-of-type(1) > body:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > header:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > header:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > div:nth-of-type(3) > a:nth-of-type(1) > div:nth-of-type(1) > p:nth-of-type(1)');
    }
  } catch (e) { 
    if (typeof failedSelectorPaths !== 'undefined' && typeof isInitial !== 'undefined' && isInitial) {
      failedSelectorPaths.push('html:nth-of-type(1) > body:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > header:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > header:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > nav:nth-of-type(1) > div:nth-of-type(3) > a:nth-of-type(1) > div:nth-of-type(1) > p:nth-of-type(1)');
    }
    console.error(e); 
  }
try {
    const element_eyv1oilvyh = document.querySelector('html:nth-of-type(1) > body:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > header:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > header:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > a:nth-of-type(1) > div:nth-of-type(1) > p:nth-of-type(1)');           
    if (element_eyv1oilvyh) {             
      if (element_eyv1oilvyh.innerHTML !== `Access your growth toolkit`) { element_eyv1oilvyh.innerHTML = `Access your growth toolkit`; }
           
    } else if (typeof failedSelectorPaths !== 'undefined' && typeof isInitial !== 'undefined' && isInitial) {
      failedSelectorPaths.push('html:nth-of-type(1) > body:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > header:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > header:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > a:nth-of-type(1) > div:nth-of-type(1) > p:nth-of-type(1)');
    }
  } catch (e) { 
    if (typeof failedSelectorPaths !== 'undefined' && typeof isInitial !== 'undefined' && isInitial) {
      failedSelectorPaths.push('html:nth-of-type(1) > body:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > header:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > header:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > a:nth-of-type(1) > div:nth-of-type(1) > p:nth-of-type(1)');
    }
    console.error(e); 
  }
try {
    const element_5ibqxxhwywo = document.querySelector('html:nth-of-type(1) > body:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > header:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > header:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(3) > div:nth-of-type(1) > a:nth-of-type(1) > div:nth-of-type(1) > p:nth-of-type(1)');           
    if (element_5ibqxxhwywo) {             
      if (element_5ibqxxhwywo.innerHTML !== `Secure your early access now`) { element_5ibqxxhwywo.innerHTML = `Secure your early access now`; }
           
    } else if (typeof failedSelectorPaths !== 'undefined' && typeof isInitial !== 'undefined' && isInitial) {
      failedSelectorPaths.push('html:nth-of-type(1) > body:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > header:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > header:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(3) > div:nth-of-type(1) > a:nth-of-type(1) > div:nth-of-type(1) > p:nth-of-type(1)');
    }
  } catch (e) { 
    if (typeof failedSelectorPaths !== 'undefined' && typeof isInitial !== 'undefined' && isInitial) {
      failedSelectorPaths.push('html:nth-of-type(1) > body:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > header:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > header:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(3) > div:nth-of-type(1) > a:nth-of-type(1) > div:nth-of-type(1) > p:nth-of-type(1)');
    }
    console.error(e); 
  }
try {
    const element_xz7zrkjxiq = document.querySelector('html:nth-of-type(1) > body:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > a:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > p:nth-of-type(1)');           
    if (element_xz7zrkjxiq) {             
      if (element_xz7zrkjxiq.innerHTML !== `🚀 More than 70 marketers are on board—join them`) { element_xz7zrkjxiq.innerHTML = `🚀 More than 70 marketers are on board—join them`; }
           
    } else if (typeof failedSelectorPaths !== 'undefined' && typeof isInitial !== 'undefined' && isInitial) {
      failedSelectorPaths.push('html:nth-of-type(1) > body:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > a:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > p:nth-of-type(1)');
    }
  } catch (e) { 
    if (typeof failedSelectorPaths !== 'undefined' && typeof isInitial !== 'undefined' && isInitial) {
      failedSelectorPaths.push('html:nth-of-type(1) > body:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > a:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > p:nth-of-type(1)');
    }
    console.error(e); 
  }
try {
    const element_y6etk23tgz = document.querySelector('html:nth-of-type(1) > body:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > h1:nth-of-type(1)');           
    if (element_y6etk23tgz) {             
      if (element_y6etk23tgz.innerHTML !== `<strong class="framer-text">Why settle for slow results when speed is an option?</strong>`) { element_y6etk23tgz.innerHTML = `<strong class="framer-text">Why settle for slow results when speed is an option?</strong>`; }
           
    } else if (typeof failedSelectorPaths !== 'undefined' && typeof isInitial !== 'undefined' && isInitial) {
      failedSelectorPaths.push('html:nth-of-type(1) > body:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > h1:nth-of-type(1)');
    }
  } catch (e) { 
    if (typeof failedSelectorPaths !== 'undefined' && typeof isInitial !== 'undefined' && isInitial) {
      failedSelectorPaths.push('html:nth-of-type(1) > body:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > h1:nth-of-type(1)');
    }
    console.error(e); 
  }
try {
    const element_0btyp2bxala = document.querySelector('html:nth-of-type(1) > body:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > blockquote:nth-of-type(1) > p:nth-of-type(1)');           
    if (element_0btyp2bxala) {             
      if (element_0btyp2bxala.innerHTML !== `Optimeleon crafts and serves page variants on-the-fly, ensuring every visitor gets the version that turns interest into action.`) { element_0btyp2bxala.innerHTML = `Optimeleon crafts and serves page variants on-the-fly, ensuring every visitor gets the version that turns interest into action.`; }
           
    } else if (typeof failedSelectorPaths !== 'undefined' && typeof isInitial !== 'undefined' && isInitial) {
      failedSelectorPaths.push('html:nth-of-type(1) > body:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > blockquote:nth-of-type(1) > p:nth-of-type(1)');
    }
  } catch (e) { 
    if (typeof failedSelectorPaths !== 'undefined' && typeof isInitial !== 'undefined' && isInitial) {
      failedSelectorPaths.push('html:nth-of-type(1) > body:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > blockquote:nth-of-type(1) > p:nth-of-type(1)');
    }
    console.error(e); 
  }
try {
    const element_9xokz8oc4xm = document.querySelector('html:nth-of-type(1) > body:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > blockquote:nth-of-type(1) > p:nth-of-type(2)');           
    if (element_9xokz8oc4xm) {             
      if (element_9xokz8oc4xm.innerHTML !== `Quick. Cohesive. Zero hassle.`) { element_9xokz8oc4xm.innerHTML = `Quick. Cohesive. Zero hassle.`; }
           
    } else if (typeof failedSelectorPaths !== 'undefined' && typeof isInitial !== 'undefined' && isInitial) {
      failedSelectorPaths.push('html:nth-of-type(1) > body:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > blockquote:nth-of-type(1) > p:nth-of-type(2)');
    }
  } catch (e) { 
    if (typeof failedSelectorPaths !== 'undefined' && typeof isInitial !== 'undefined' && isInitial) {
      failedSelectorPaths.push('html:nth-of-type(1) > body:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > blockquote:nth-of-type(1) > p:nth-of-type(2)');
    }
    console.error(e); 
  }
try {
    const element_mc1t2n6gjcc = document.querySelector('html:nth-of-type(1) > body:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > form:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > button:nth-of-type(1) > div:nth-of-type(1) > p:nth-of-type(1)');           
    if (element_mc1t2n6gjcc) {             
      if (element_mc1t2n6gjcc.innerHTML !== `Get started today`) { element_mc1t2n6gjcc.innerHTML = `Get started today`; }
           
    } else if (typeof failedSelectorPaths !== 'undefined' && typeof isInitial !== 'undefined' && isInitial) {
      failedSelectorPaths.push('html:nth-of-type(1) > body:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > form:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > button:nth-of-type(1) > div:nth-of-type(1) > p:nth-of-type(1)');
    }
  } catch (e) { 
    if (typeof failedSelectorPaths !== 'undefined' && typeof isInitial !== 'undefined' && isInitial) {
      failedSelectorPaths.push('html:nth-of-type(1) > body:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > form:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > button:nth-of-type(1) > div:nth-of-type(1) > p:nth-of-type(1)');
    }
    console.error(e); 
  }
try {
    const element_zgv6gjvte58 = document.querySelector('html:nth-of-type(1) > body:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > p:nth-of-type(1)');           
    if (element_zgv6gjvte58) {             
      if (element_zgv6gjvte58.innerHTML !== `Early spots are filling fast.`) { element_zgv6gjvte58.innerHTML = `Early spots are filling fast.`; }
           
    } else if (typeof failedSelectorPaths !== 'undefined' && typeof isInitial !== 'undefined' && isInitial) {
      failedSelectorPaths.push('html:nth-of-type(1) > body:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > p:nth-of-type(1)');
    }
  } catch (e) { 
    if (typeof failedSelectorPaths !== 'undefined' && typeof isInitial !== 'undefined' && isInitial) {
      failedSelectorPaths.push('html:nth-of-type(1) > body:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > p:nth-of-type(1)');
    }
    console.error(e); 
  }
try {
    const element_xq18hycn16o = document.querySelector('html:nth-of-type(1) > body:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > p:nth-of-type(2)');           
    if (element_xq18hycn16o) {             
      if (element_xq18hycn16o.innerHTML !== `Claim your spot now.`) { element_xq18hycn16o.innerHTML = `Claim your spot now.`; }
           
    } else if (typeof failedSelectorPaths !== 'undefined' && typeof isInitial !== 'undefined' && isInitial) {
      failedSelectorPaths.push('html:nth-of-type(1) > body:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > p:nth-of-type(2)');
    }
  } catch (e) { 
    if (typeof failedSelectorPaths !== 'undefined' && typeof isInitial !== 'undefined' && isInitial) {
      failedSelectorPaths.push('html:nth-of-type(1) > body:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > p:nth-of-type(2)');
    }
    console.error(e); 
  }
try {
    const element_622d73qllkc = document.querySelector('html:nth-of-type(1) > body:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(2) > p:nth-of-type(1)');           
    if (element_622d73qllkc) {             
      if (element_622d73qllkc.innerHTML !== `Infinite possibilities, just one click`) { element_622d73qllkc.innerHTML = `Infinite possibilities, just one click`; }
           
    } else if (typeof failedSelectorPaths !== 'undefined' && typeof isInitial !== 'undefined' && isInitial) {
      failedSelectorPaths.push('html:nth-of-type(1) > body:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(2) > p:nth-of-type(1)');
    }
  } catch (e) { 
    if (typeof failedSelectorPaths !== 'undefined' && typeof isInitial !== 'undefined' && isInitial) {
      failedSelectorPaths.push('html:nth-of-type(1) > body:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(2) > p:nth-of-type(1)');
    }
    console.error(e); 
  }
try {
    const element_1xu3mzl7m6l = document.querySelector('html:nth-of-type(1) > body:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(4) > div:nth-of-type(1) > div:nth-of-type(2) > p:nth-of-type(1)');           
    if (element_1xu3mzl7m6l) {             
      if (element_1xu3mzl7m6l.innerHTML !== `Every visitor sees what works best for them.`) { element_1xu3mzl7m6l.innerHTML = `Every visitor sees what works best for them.`; }
           
    } else if (typeof failedSelectorPaths !== 'undefined' && typeof isInitial !== 'undefined' && isInitial) {
      failedSelectorPaths.push('html:nth-of-type(1) > body:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(4) > div:nth-of-type(1) > div:nth-of-type(2) > p:nth-of-type(1)');
    }
  } catch (e) { 
    if (typeof failedSelectorPaths !== 'undefined' && typeof isInitial !== 'undefined' && isInitial) {
      failedSelectorPaths.push('html:nth-of-type(1) > body:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(4) > div:nth-of-type(1) > div:nth-of-type(2) > p:nth-of-type(1)');
    }
    console.error(e); 
  }
try {
    const element_ot1ypyeoie = document.querySelector('html:nth-of-type(1) > body:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > p:nth-of-type(1)');           
    if (element_ot1ypyeoie) {             
      if (element_ot1ypyeoie.innerHTML !== `Explore what makes us unique`) { element_ot1ypyeoie.innerHTML = `Explore what makes us unique`; }
           
    } else if (typeof failedSelectorPaths !== 'undefined' && typeof isInitial !== 'undefined' && isInitial) {
      failedSelectorPaths.push('html:nth-of-type(1) > body:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > p:nth-of-type(1)');
    }
  } catch (e) { 
    if (typeof failedSelectorPaths !== 'undefined' && typeof isInitial !== 'undefined' && isInitial) {
      failedSelectorPaths.push('html:nth-of-type(1) > body:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > p:nth-of-type(1)');
    }
    console.error(e); 
  }
try {
    const element_ynnmsl929wm = document.querySelector('html:nth-of-type(1) > body:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > h2:nth-of-type(1)');           
    if (element_ynnmsl929wm) {             
      if (element_ynnmsl929wm.innerHTML !== `<strong class="framer-text">A smarter growth tool, seamlessly integrated into your site</strong>`) { element_ynnmsl929wm.innerHTML = `<strong class="framer-text">A smarter growth tool, seamlessly integrated into your site</strong>`; }
           
    } else if (typeof failedSelectorPaths !== 'undefined' && typeof isInitial !== 'undefined' && isInitial) {
      failedSelectorPaths.push('html:nth-of-type(1) > body:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > h2:nth-of-type(1)');
    }
  } catch (e) { 
    if (typeof failedSelectorPaths !== 'undefined' && typeof isInitial !== 'undefined' && isInitial) {
      failedSelectorPaths.push('html:nth-of-type(1) > body:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > h2:nth-of-type(1)');
    }
    console.error(e); 
  }
try {
    const element_y2tgtdxll3l = document.querySelector('html:nth-of-type(1) > body:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(2) > p:nth-of-type(1)');           
    if (element_y2tgtdxll3l) {             
      if (element_y2tgtdxll3l.innerHTML !== `Growth has never felt this effortless.`) { element_y2tgtdxll3l.innerHTML = `Growth has never felt this effortless.`; }
           
    } else if (typeof failedSelectorPaths !== 'undefined' && typeof isInitial !== 'undefined' && isInitial) {
      failedSelectorPaths.push('html:nth-of-type(1) > body:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(2) > p:nth-of-type(1)');
    }
  } catch (e) { 
    if (typeof failedSelectorPaths !== 'undefined' && typeof isInitial !== 'undefined' && isInitial) {
      failedSelectorPaths.push('html:nth-of-type(1) > body:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(2) > p:nth-of-type(1)');
    }
    console.error(e); 
  }
try {
    const element_cwglzohmx8d = document.querySelector('html:nth-of-type(1) > body:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > p:nth-of-type(1)');           
    if (element_cwglzohmx8d) {             
      if (element_cwglzohmx8d.innerHTML !== `Creative Engine`) { element_cwglzohmx8d.innerHTML = `Creative Engine`; }
           
    } else if (typeof failedSelectorPaths !== 'undefined' && typeof isInitial !== 'undefined' && isInitial) {
      failedSelectorPaths.push('html:nth-of-type(1) > body:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > p:nth-of-type(1)');
    }
  } catch (e) { 
    if (typeof failedSelectorPaths !== 'undefined' && typeof isInitial !== 'undefined' && isInitial) {
      failedSelectorPaths.push('html:nth-of-type(1) > body:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > p:nth-of-type(1)');
    }
    console.error(e); 
  }
try {
    const element_iosb2dm7arh = document.querySelector('html:nth-of-type(1) > body:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > h2:nth-of-type(1)');           
    if (element_iosb2dm7arh) {             
      if (element_iosb2dm7arh.innerHTML !== `Delivers limitless page <br class="framer-text">variants at lightning speed`) { element_iosb2dm7arh.innerHTML = `Delivers limitless page <br class="framer-text">variants at lightning speed`; }
           
    } else if (typeof failedSelectorPaths !== 'undefined' && typeof isInitial !== 'undefined' && isInitial) {
      failedSelectorPaths.push('html:nth-of-type(1) > body:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > h2:nth-of-type(1)');
    }
  } catch (e) { 
    if (typeof failedSelectorPaths !== 'undefined' && typeof isInitial !== 'undefined' && isInitial) {
      failedSelectorPaths.push('html:nth-of-type(1) > body:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > h2:nth-of-type(1)');
    }
    console.error(e); 
  }
try {
    const element_2j08zljyiok = document.querySelector('html:nth-of-type(1) > body:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > h4:nth-of-type(1)');           
    if (element_2j08zljyiok) {             
      if (element_2j08zljyiok.innerHTML !== `Transforming your strategy into results-driven pages`) { element_2j08zljyiok.innerHTML = `Transforming your strategy into results-driven pages`; }
           
    } else if (typeof failedSelectorPaths !== 'undefined' && typeof isInitial !== 'undefined' && isInitial) {
      failedSelectorPaths.push('html:nth-of-type(1) > body:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > h4:nth-of-type(1)');
    }
  } catch (e) { 
    if (typeof failedSelectorPaths !== 'undefined' && typeof isInitial !== 'undefined' && isInitial) {
      failedSelectorPaths.push('html:nth-of-type(1) > body:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > h4:nth-of-type(1)');
    }
    console.error(e); 
  }
try {
    const element_2e6mhb55nm6 = document.querySelector('html:nth-of-type(1) > body:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(2) > div:nth-of-type(1) > p:nth-of-type(1)');           
    if (element_2e6mhb55nm6) {             
      if (element_2e6mhb55nm6.innerHTML !== `Frustrated with tweaks that don’t make a real impact?`) { element_2e6mhb55nm6.innerHTML = `Frustrated with tweaks that don’t make a real impact?`; }
           
    } else if (typeof failedSelectorPaths !== 'undefined' && typeof isInitial !== 'undefined' && isInitial) {
      failedSelectorPaths.push('html:nth-of-type(1) > body:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(2) > div:nth-of-type(1) > p:nth-of-type(1)');
    }
  } catch (e) { 
    if (typeof failedSelectorPaths !== 'undefined' && typeof isInitial !== 'undefined' && isInitial) {
      failedSelectorPaths.push('html:nth-of-type(1) > body:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(2) > div:nth-of-type(1) > p:nth-of-type(1)');
    }
    console.error(e); 
  }
try {
    const element_lwzz82cr1bd = document.querySelector('html:nth-of-type(1) > body:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(2) > div:nth-of-type(1) > p:nth-of-type(2)');           
    if (element_lwzz82cr1bd) {             
      if (element_lwzz82cr1bd.innerHTML !== `Editing one headline at a time just doesn’t cut it.`) { element_lwzz82cr1bd.innerHTML = `Editing one headline at a time just doesn’t cut it.`; }
           
    } else if (typeof failedSelectorPaths !== 'undefined' && typeof isInitial !== 'undefined' && isInitial) {
      failedSelectorPaths.push('html:nth-of-type(1) > body:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(2) > div:nth-of-type(1) > p:nth-of-type(2)');
    }
  } catch (e) { 
    if (typeof failedSelectorPaths !== 'undefined' && typeof isInitial !== 'undefined' && isInitial) {
      failedSelectorPaths.push('html:nth-of-type(1) > body:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(2) > div:nth-of-type(1) > p:nth-of-type(2)');
    }
    console.error(e); 
  }
try {
    const element_lwfj33mnbi8 = document.querySelector('html:nth-of-type(1) > body:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(2) > div:nth-of-type(1) > p:nth-of-type(3)');           
    if (element_lwfj33mnbi8) {             
      if (element_lwfj33mnbi8.innerHTML !== `Optimeleon breathes life into your strategy, generating bold variants with fresh angles and emotional resonance.`) { element_lwfj33mnbi8.innerHTML = `Optimeleon breathes life into your strategy, generating bold variants with fresh angles and emotional resonance.`; }
           
    } else if (typeof failedSelectorPaths !== 'undefined' && typeof isInitial !== 'undefined' && isInitial) {
      failedSelectorPaths.push('html:nth-of-type(1) > body:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(2) > div:nth-of-type(1) > p:nth-of-type(3)');
    }
  } catch (e) { 
    if (typeof failedSelectorPaths !== 'undefined' && typeof isInitial !== 'undefined' && isInitial) {
      failedSelectorPaths.push('html:nth-of-type(1) > body:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(2) > div:nth-of-type(1) > p:nth-of-type(3)');
    }
    console.error(e); 
  }
try {
    const element_v5uzfg0p11p = document.querySelector('html:nth-of-type(1) > body:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(2) > div:nth-of-type(1) > p:nth-of-type(4)');           
    if (element_v5uzfg0p11p) {             
      if (element_v5uzfg0p11p.innerHTML !== `No guesswork. No endless edits. Just sharper ideas, ready to shine.`) { element_v5uzfg0p11p.innerHTML = `No guesswork. No endless edits. Just sharper ideas, ready to shine.`; }
           
    } else if (typeof failedSelectorPaths !== 'undefined' && typeof isInitial !== 'undefined' && isInitial) {
      failedSelectorPaths.push('html:nth-of-type(1) > body:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(2) > div:nth-of-type(1) > p:nth-of-type(4)');
    }
  } catch (e) { 
    if (typeof failedSelectorPaths !== 'undefined' && typeof isInitial !== 'undefined' && isInitial) {
      failedSelectorPaths.push('html:nth-of-type(1) > body:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(2) > div:nth-of-type(1) > p:nth-of-type(4)');
    }
    console.error(e); 
  }
try {
    const element_f0201s0gy2 = document.querySelector('html:nth-of-type(1) > body:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(3) > div:nth-of-type(1) > a:nth-of-type(1) > div:nth-of-type(1) > p:nth-of-type(1)');           
    if (element_f0201s0gy2) {             
      if (element_f0201s0gy2.innerHTML !== `Join the movement now`) { element_f0201s0gy2.innerHTML = `Join the movement now`; }
           
    } else if (typeof failedSelectorPaths !== 'undefined' && typeof isInitial !== 'undefined' && isInitial) {
      failedSelectorPaths.push('html:nth-of-type(1) > body:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(3) > div:nth-of-type(1) > a:nth-of-type(1) > div:nth-of-type(1) > p:nth-of-type(1)');
    }
  } catch (e) { 
    if (typeof failedSelectorPaths !== 'undefined' && typeof isInitial !== 'undefined' && isInitial) {
      failedSelectorPaths.push('html:nth-of-type(1) > body:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(3) > div:nth-of-type(1) > a:nth-of-type(1) > div:nth-of-type(1) > p:nth-of-type(1)');
    }
    console.error(e); 
  }
try {
    const element_gevkgcqdpgl = document.querySelector('html:nth-of-type(1) > body:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(2) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > p:nth-of-type(1)');           
    if (element_gevkgcqdpgl) {             
      if (element_gevkgcqdpgl.innerHTML !== `Traffic Distribution Intelligence`) { element_gevkgcqdpgl.innerHTML = `Traffic Distribution Intelligence`; }
           
    } else if (typeof failedSelectorPaths !== 'undefined' && typeof isInitial !== 'undefined' && isInitial) {
      failedSelectorPaths.push('html:nth-of-type(1) > body:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(2) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > p:nth-of-type(1)');
    }
  } catch (e) { 
    if (typeof failedSelectorPaths !== 'undefined' && typeof isInitial !== 'undefined' && isInitial) {
      failedSelectorPaths.push('html:nth-of-type(1) > body:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(2) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > p:nth-of-type(1)');
    }
    console.error(e); 
  }
try {
    const element_a1fnl812qxs = document.querySelector('html:nth-of-type(1) > body:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(2) > div:nth-of-type(2) > div:nth-of-type(2) > div:nth-of-type(1) > h2:nth-of-type(1)');           
    if (element_a1fnl812qxs) {             
      if (element_a1fnl812qxs.innerHTML !== `Unlock enterprise-level algorithms for your site`) { element_a1fnl812qxs.innerHTML = `Unlock enterprise-level algorithms for your site`; }
           
    } else if (typeof failedSelectorPaths !== 'undefined' && typeof isInitial !== 'undefined' && isInitial) {
      failedSelectorPaths.push('html:nth-of-type(1) > body:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(2) > div:nth-of-type(2) > div:nth-of-type(2) > div:nth-of-type(1) > h2:nth-of-type(1)');
    }
  } catch (e) { 
    if (typeof failedSelectorPaths !== 'undefined' && typeof isInitial !== 'undefined' && isInitial) {
      failedSelectorPaths.push('html:nth-of-type(1) > body:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(2) > div:nth-of-type(2) > div:nth-of-type(2) > div:nth-of-type(1) > h2:nth-of-type(1)');
    }
    console.error(e); 
  }
try {
    const element_6y8gdlat5bd = document.querySelector('html:nth-of-type(1) > body:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(2) > div:nth-of-type(2) > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(1) > h4:nth-of-type(1)');           
    if (element_6y8gdlat5bd) {             
      if (element_6y8gdlat5bd.innerHTML !== `Real-time learning meets instant adaptation`) { element_6y8gdlat5bd.innerHTML = `Real-time learning meets instant adaptation`; }
           
    } else if (typeof failedSelectorPaths !== 'undefined' && typeof isInitial !== 'undefined' && isInitial) {
      failedSelectorPaths.push('html:nth-of-type(1) > body:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(2) > div:nth-of-type(2) > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(1) > h4:nth-of-type(1)');
    }
  } catch (e) { 
    if (typeof failedSelectorPaths !== 'undefined' && typeof isInitial !== 'undefined' && isInitial) {
      failedSelectorPaths.push('html:nth-of-type(1) > body:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(2) > div:nth-of-type(2) > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(1) > h4:nth-of-type(1)');
    }
    console.error(e); 
  }
try {
    const element_259nvwqsvih = document.querySelector('html:nth-of-type(1) > body:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(2) > div:nth-of-type(2) > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > p:nth-of-type(1)');           
    if (element_259nvwqsvih) {             
      if (element_259nvwqsvih.innerHTML !== `Launching tests can feel daunting—every experiment eats into traffic and time.`) { element_259nvwqsvih.innerHTML = `Launching tests can feel daunting—every experiment eats into traffic and time.`; }
           
    } else if (typeof failedSelectorPaths !== 'undefined' && typeof isInitial !== 'undefined' && isInitial) {
      failedSelectorPaths.push('html:nth-of-type(1) > body:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(2) > div:nth-of-type(2) > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > p:nth-of-type(1)');
    }
  } catch (e) { 
    if (typeof failedSelectorPaths !== 'undefined' && typeof isInitial !== 'undefined' && isInitial) {
      failedSelectorPaths.push('html:nth-of-type(1) > body:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(2) > div:nth-of-type(2) > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > p:nth-of-type(1)');
    }
    console.error(e); 
  }
try {
    const element_757gjz7gpfs = document.querySelector('html:nth-of-type(1) > body:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(2) > div:nth-of-type(2) > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > p:nth-of-type(2)');           
    if (element_757gjz7gpfs) {             
      if (element_757gjz7gpfs.innerHTML !== `You trust Meta’s systems—why not bring that same intelligence to your website?`) { element_757gjz7gpfs.innerHTML = `You trust Meta’s systems—why not bring that same intelligence to your website?`; }
           
    } else if (typeof failedSelectorPaths !== 'undefined' && typeof isInitial !== 'undefined' && isInitial) {
      failedSelectorPaths.push('html:nth-of-type(1) > body:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(2) > div:nth-of-type(2) > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > p:nth-of-type(2)');
    }
  } catch (e) { 
    if (typeof failedSelectorPaths !== 'undefined' && typeof isInitial !== 'undefined' && isInitial) {
      failedSelectorPaths.push('html:nth-of-type(1) > body:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(2) > div:nth-of-type(2) > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > p:nth-of-type(2)');
    }
    console.error(e); 
  }
try {
    const element_ari4ih173se = document.querySelector('html:nth-of-type(1) > body:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(2) > div:nth-of-type(2) > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > p:nth-of-type(3)');           
    if (element_ari4ih173se) {             
      if (element_ari4ih173se.innerHTML !== `Optimeleon applies that thinking to your website, channeling traffic to what truly delivers.`) { element_ari4ih173se.innerHTML = `Optimeleon applies that thinking to your website, channeling traffic to what truly delivers.`; }
           
    } else if (typeof failedSelectorPaths !== 'undefined' && typeof isInitial !== 'undefined' && isInitial) {
      failedSelectorPaths.push('html:nth-of-type(1) > body:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(2) > div:nth-of-type(2) > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > p:nth-of-type(3)');
    }
  } catch (e) { 
    if (typeof failedSelectorPaths !== 'undefined' && typeof isInitial !== 'undefined' && isInitial) {
      failedSelectorPaths.push('html:nth-of-type(1) > body:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(2) > div:nth-of-type(2) > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > p:nth-of-type(3)');
    }
    console.error(e); 
  }
try {
    const element_fd0briikm0a = document.querySelector('html:nth-of-type(1) > body:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(2) > div:nth-of-type(2) > div:nth-of-type(3) > div:nth-of-type(2) > div:nth-of-type(1) > a:nth-of-type(1) > div:nth-of-type(1) > p:nth-of-type(1)');           
    if (element_fd0briikm0a) {             
      if (element_fd0briikm0a.innerHTML !== `Take the leap today`) { element_fd0briikm0a.innerHTML = `Take the leap today`; }
           
    } else if (typeof failedSelectorPaths !== 'undefined' && typeof isInitial !== 'undefined' && isInitial) {
      failedSelectorPaths.push('html:nth-of-type(1) > body:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(2) > div:nth-of-type(2) > div:nth-of-type(3) > div:nth-of-type(2) > div:nth-of-type(1) > a:nth-of-type(1) > div:nth-of-type(1) > p:nth-of-type(1)');
    }
  } catch (e) { 
    if (typeof failedSelectorPaths !== 'undefined' && typeof isInitial !== 'undefined' && isInitial) {
      failedSelectorPaths.push('html:nth-of-type(1) > body:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(2) > div:nth-of-type(2) > div:nth-of-type(3) > div:nth-of-type(2) > div:nth-of-type(1) > a:nth-of-type(1) > div:nth-of-type(1) > p:nth-of-type(1)');
    }
    console.error(e); 
  }
try {
    const element_ud58h2j0b5q = document.querySelector('html:nth-of-type(1) > body:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > p:nth-of-type(1)');           
    if (element_ud58h2j0b5q) {             
      if (element_ud58h2j0b5q.innerHTML !== `Optimization Copilot`) { element_ud58h2j0b5q.innerHTML = `Optimization Copilot`; }
           
    } else if (typeof failedSelectorPaths !== 'undefined' && typeof isInitial !== 'undefined' && isInitial) {
      failedSelectorPaths.push('html:nth-of-type(1) > body:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > p:nth-of-type(1)');
    }
  } catch (e) { 
    if (typeof failedSelectorPaths !== 'undefined' && typeof isInitial !== 'undefined' && isInitial) {
      failedSelectorPaths.push('html:nth-of-type(1) > body:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > p:nth-of-type(1)');
    }
    console.error(e); 
  }
try {
    const element_sgcllxs7h = document.querySelector('html:nth-of-type(1) > body:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > h2:nth-of-type(1)');           
    if (element_sgcllxs7h) {             
      if (element_sgcllxs7h.innerHTML !== `Discovers winners, shuts down duds, and scales success`) { element_sgcllxs7h.innerHTML = `Discovers winners, shuts down duds, and scales success`; }
           
    } else if (typeof failedSelectorPaths !== 'undefined' && typeof isInitial !== 'undefined' && isInitial) {
      failedSelectorPaths.push('html:nth-of-type(1) > body:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > h2:nth-of-type(1)');
    }
  } catch (e) { 
    if (typeof failedSelectorPaths !== 'undefined' && typeof isInitial !== 'undefined' && isInitial) {
      failedSelectorPaths.push('html:nth-of-type(1) > body:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > h2:nth-of-type(1)');
    }
    console.error(e); 
  }
try {
    const element_z5olgs539cs = document.querySelector('html:nth-of-type(1) > body:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > h4:nth-of-type(1)');           
    if (element_z5olgs539cs) {             
      if (element_z5olgs539cs.innerHTML !== `Fluidly adapting, twenty-four seven`) { element_z5olgs539cs.innerHTML = `Fluidly adapting, twenty-four seven`; }
           
    } else if (typeof failedSelectorPaths !== 'undefined' && typeof isInitial !== 'undefined' && isInitial) {
      failedSelectorPaths.push('html:nth-of-type(1) > body:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > h4:nth-of-type(1)');
    }
  } catch (e) { 
    if (typeof failedSelectorPaths !== 'undefined' && typeof isInitial !== 'undefined' && isInitial) {
      failedSelectorPaths.push('html:nth-of-type(1) > body:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > h4:nth-of-type(1)');
    }
    console.error(e); 
  }
try {
    const element_van38ahit4 = document.querySelector('html:nth-of-type(1) > body:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(2) > div:nth-of-type(1) > p:nth-of-type(1)');           
    if (element_van38ahit4) {             
      if (element_van38ahit4.innerHTML !== `No monitoring. No micromanaging. Optimeleon tracks performance, removes underperformers, hones winning strategies, and scales success—all day, every day.`) { element_van38ahit4.innerHTML = `No monitoring. No micromanaging. Optimeleon tracks performance, removes underperformers, hones winning strategies, and scales success—all day, every day.`; }
           
    } else if (typeof failedSelectorPaths !== 'undefined' && typeof isInitial !== 'undefined' && isInitial) {
      failedSelectorPaths.push('html:nth-of-type(1) > body:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(2) > div:nth-of-type(1) > p:nth-of-type(1)');
    }
  } catch (e) { 
    if (typeof failedSelectorPaths !== 'undefined' && typeof isInitial !== 'undefined' && isInitial) {
      failedSelectorPaths.push('html:nth-of-type(1) > body:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(2) > div:nth-of-type(1) > p:nth-of-type(1)');
    }
    console.error(e); 
  }
try {
    const element_fx588zl9op = document.querySelector('html:nth-of-type(1) > body:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(3) > div:nth-of-type(1) > a:nth-of-type(1) > div:nth-of-type(1) > p:nth-of-type(1)');           
    if (element_fx588zl9op) {             
      if (element_fx588zl9op.innerHTML !== `Get priority access now`) { element_fx588zl9op.innerHTML = `Get priority access now`; }
           
    } else if (typeof failedSelectorPaths !== 'undefined' && typeof isInitial !== 'undefined' && isInitial) {
      failedSelectorPaths.push('html:nth-of-type(1) > body:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(3) > div:nth-of-type(1) > a:nth-of-type(1) > div:nth-of-type(1) > p:nth-of-type(1)');
    }
  } catch (e) { 
    if (typeof failedSelectorPaths !== 'undefined' && typeof isInitial !== 'undefined' && isInitial) {
      failedSelectorPaths.push('html:nth-of-type(1) > body:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(3) > div:nth-of-type(1) > a:nth-of-type(1) > div:nth-of-type(1) > p:nth-of-type(1)');
    }
    console.error(e); 
  }
try {
    const element_fm7ure1107w = document.querySelector('html:nth-of-type(1) > body:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(5) > div:nth-of-type(1) > footer:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > p:nth-of-type(1)');           
    if (element_fm7ure1107w) {             
      if (element_fm7ure1107w.innerHTML !== `<strong class="framer-text">Your website becomes your smartest growth partner with Optimeleon.</strong>`) { element_fm7ure1107w.innerHTML = `<strong class="framer-text">Your website becomes your smartest growth partner with Optimeleon.</strong>`; }
           
    } else if (typeof failedSelectorPaths !== 'undefined' && typeof isInitial !== 'undefined' && isInitial) {
      failedSelectorPaths.push('html:nth-of-type(1) > body:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(5) > div:nth-of-type(1) > footer:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > p:nth-of-type(1)');
    }
  } catch (e) { 
    if (typeof failedSelectorPaths !== 'undefined' && typeof isInitial !== 'undefined' && isInitial) {
      failedSelectorPaths.push('html:nth-of-type(1) > body:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(5) > div:nth-of-type(1) > footer:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > p:nth-of-type(1)');
    }
    console.error(e); 
  }
try {
    const element_cw3j1fci7gg = document.querySelector('html:nth-of-type(1) > body:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(5) > div:nth-of-type(1) > footer:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > p:nth-of-type(1)');           
    if (element_cw3j1fci7gg) {             
      if (element_cw3j1fci7gg.innerHTML !== `Navigation`) { element_cw3j1fci7gg.innerHTML = `Navigation`; }
           
    } else if (typeof failedSelectorPaths !== 'undefined' && typeof isInitial !== 'undefined' && isInitial) {
      failedSelectorPaths.push('html:nth-of-type(1) > body:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(5) > div:nth-of-type(1) > footer:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > p:nth-of-type(1)');
    }
  } catch (e) { 
    if (typeof failedSelectorPaths !== 'undefined' && typeof isInitial !== 'undefined' && isInitial) {
      failedSelectorPaths.push('html:nth-of-type(1) > body:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(5) > div:nth-of-type(1) > footer:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > p:nth-of-type(1)');
    }
    console.error(e); 
  }
try {
    const element_icmrt3hfp1 = document.querySelector('html:nth-of-type(1) > body:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(5) > div:nth-of-type(1) > footer:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(2) > a:nth-of-type(1) > div:nth-of-type(1) > p:nth-of-type(1)');           
    if (element_icmrt3hfp1) {             
      if (element_icmrt3hfp1.innerHTML !== `Home`) { element_icmrt3hfp1.innerHTML = `Home`; }
           
    } else if (typeof failedSelectorPaths !== 'undefined' && typeof isInitial !== 'undefined' && isInitial) {
      failedSelectorPaths.push('html:nth-of-type(1) > body:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(5) > div:nth-of-type(1) > footer:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(2) > a:nth-of-type(1) > div:nth-of-type(1) > p:nth-of-type(1)');
    }
  } catch (e) { 
    if (typeof failedSelectorPaths !== 'undefined' && typeof isInitial !== 'undefined' && isInitial) {
      failedSelectorPaths.push('html:nth-of-type(1) > body:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(5) > div:nth-of-type(1) > footer:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(2) > a:nth-of-type(1) > div:nth-of-type(1) > p:nth-of-type(1)');
    }
    console.error(e); 
  }
try {
    const element_7sgg4z8h3ib = document.querySelector('html:nth-of-type(1) > body:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(5) > div:nth-of-type(1) > footer:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(3) > a:nth-of-type(1) > div:nth-of-type(1) > p:nth-of-type(1)');           
    if (element_7sgg4z8h3ib) {             
      if (element_7sgg4z8h3ib.innerHTML !== `How it works?`) { element_7sgg4z8h3ib.innerHTML = `How it works?`; }
           
    } else if (typeof failedSelectorPaths !== 'undefined' && typeof isInitial !== 'undefined' && isInitial) {
      failedSelectorPaths.push('html:nth-of-type(1) > body:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(5) > div:nth-of-type(1) > footer:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(3) > a:nth-of-type(1) > div:nth-of-type(1) > p:nth-of-type(1)');
    }
  } catch (e) { 
    if (typeof failedSelectorPaths !== 'undefined' && typeof isInitial !== 'undefined' && isInitial) {
      failedSelectorPaths.push('html:nth-of-type(1) > body:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(5) > div:nth-of-type(1) > footer:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(3) > a:nth-of-type(1) > div:nth-of-type(1) > p:nth-of-type(1)');
    }
    console.error(e); 
  }
try {
    const element_6vsdax9b22t = document.querySelector('html:nth-of-type(1) > body:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(5) > div:nth-of-type(1) > footer:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(4) > a:nth-of-type(1) > div:nth-of-type(1) > p:nth-of-type(1)');           
    if (element_6vsdax9b22t) {             
      if (element_6vsdax9b22t.innerHTML !== `Career Opportunities`) { element_6vsdax9b22t.innerHTML = `Career Opportunities`; }
           
    } else if (typeof failedSelectorPaths !== 'undefined' && typeof isInitial !== 'undefined' && isInitial) {
      failedSelectorPaths.push('html:nth-of-type(1) > body:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(5) > div:nth-of-type(1) > footer:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(4) > a:nth-of-type(1) > div:nth-of-type(1) > p:nth-of-type(1)');
    }
  } catch (e) { 
    if (typeof failedSelectorPaths !== 'undefined' && typeof isInitial !== 'undefined' && isInitial) {
      failedSelectorPaths.push('html:nth-of-type(1) > body:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(5) > div:nth-of-type(1) > footer:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(4) > a:nth-of-type(1) > div:nth-of-type(1) > p:nth-of-type(1)');
    }
    console.error(e); 
  }
try {
    const element_jkqq92jeq3f = document.querySelector('html:nth-of-type(1) > body:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(5) > div:nth-of-type(1) > footer:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(5) > a:nth-of-type(1) > div:nth-of-type(1) > p:nth-of-type(1)');           
    if (element_jkqq92jeq3f) {             
      if (element_jkqq92jeq3f.innerHTML !== `Documentation`) { element_jkqq92jeq3f.innerHTML = `Documentation`; }
           
    } else if (typeof failedSelectorPaths !== 'undefined' && typeof isInitial !== 'undefined' && isInitial) {
      failedSelectorPaths.push('html:nth-of-type(1) > body:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(5) > div:nth-of-type(1) > footer:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(5) > a:nth-of-type(1) > div:nth-of-type(1) > p:nth-of-type(1)');
    }
  } catch (e) { 
    if (typeof failedSelectorPaths !== 'undefined' && typeof isInitial !== 'undefined' && isInitial) {
      failedSelectorPaths.push('html:nth-of-type(1) > body:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(5) > div:nth-of-type(1) > footer:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(5) > a:nth-of-type(1) > div:nth-of-type(1) > p:nth-of-type(1)');
    }
    console.error(e); 
  }
try {
    const element_4mryaww88lx = document.querySelector('html:nth-of-type(1) > body:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(5) > div:nth-of-type(1) > footer:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(6) > a:nth-of-type(1) > div:nth-of-type(1) > p:nth-of-type(1)');           
    if (element_4mryaww88lx) {             
      if (element_4mryaww88lx.innerHTML !== `Imprint`) { element_4mryaww88lx.innerHTML = `Imprint`; }
           
    } else if (typeof failedSelectorPaths !== 'undefined' && typeof isInitial !== 'undefined' && isInitial) {
      failedSelectorPaths.push('html:nth-of-type(1) > body:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(5) > div:nth-of-type(1) > footer:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(6) > a:nth-of-type(1) > div:nth-of-type(1) > p:nth-of-type(1)');
    }
  } catch (e) { 
    if (typeof failedSelectorPaths !== 'undefined' && typeof isInitial !== 'undefined' && isInitial) {
      failedSelectorPaths.push('html:nth-of-type(1) > body:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(5) > div:nth-of-type(1) > footer:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(6) > a:nth-of-type(1) > div:nth-of-type(1) > p:nth-of-type(1)');
    }
    console.error(e); 
  }
try {
    const element_0uryitng5sw = document.querySelector('html:nth-of-type(1) > body:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(5) > div:nth-of-type(1) > footer:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > p:nth-of-type(1)');           
    if (element_0uryitng5sw) {             
      if (element_0uryitng5sw.innerHTML !== `Crafted with ♥ in Berlin`) { element_0uryitng5sw.innerHTML = `Crafted with ♥ in Berlin`; }
           
    } else if (typeof failedSelectorPaths !== 'undefined' && typeof isInitial !== 'undefined' && isInitial) {
      failedSelectorPaths.push('html:nth-of-type(1) > body:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(5) > div:nth-of-type(1) > footer:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > p:nth-of-type(1)');
    }
  } catch (e) { 
    if (typeof failedSelectorPaths !== 'undefined' && typeof isInitial !== 'undefined' && isInitial) {
      failedSelectorPaths.push('html:nth-of-type(1) > body:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(5) > div:nth-of-type(1) > footer:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > p:nth-of-type(1)');
    }
    console.error(e); 
  }
try {
    const element_pke9on2qlko = document.querySelector('html:nth-of-type(1) > body:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(5) > div:nth-of-type(1) > footer:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > p:nth-of-type(2)');           
    if (element_pke9on2qlko) {             
      if (element_pke9on2qlko.innerHTML !== `© 2025 Optimeleon GmbH. All rights reserved.`) { element_pke9on2qlko.innerHTML = `© 2025 Optimeleon GmbH. All rights reserved.`; }
           
    } else if (typeof failedSelectorPaths !== 'undefined' && typeof isInitial !== 'undefined' && isInitial) {
      failedSelectorPaths.push('html:nth-of-type(1) > body:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(5) > div:nth-of-type(1) > footer:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > p:nth-of-type(2)');
    }
  } catch (e) { 
    if (typeof failedSelectorPaths !== 'undefined' && typeof isInitial !== 'undefined' && isInitial) {
      failedSelectorPaths.push('html:nth-of-type(1) > body:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(5) > div:nth-of-type(1) > footer:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > p:nth-of-type(2)');
    }
    console.error(e); 
  }
    

    if (isInitial) {
      OPTI_DEBUG && console.log("[OPTIMELEON] Executing custom script (initial only).");
      
    }

    if (observer) {
      observer.observe(document.body, { childList: true, subtree: true });
    }

    OPTI_DEBUG && console.log("[OPTIMELEON] Variant apply complete. Waiting for", __optiImagePromises.length, "images to load.");
    isApplying = false;
    
    // Return promise that resolves when all images are loaded
    return Promise.all(__optiImagePromises).then(function() {
      OPTI_DEBUG && console.log("[OPTIMELEON] All images loaded and painted.");
    });
  }

  function fallbackHydrationObserver() {
    const obs = new MutationObserver(() => {
      obs.disconnect();
      OPTI_DEBUG && console.log("[OPTIMELEON] Fallback hydration detected.");
      safeRequestIdleCallback(markHydrationComplete, { timeout: 300 });
    });
    obs.observe(document.body, { childList: true, subtree: true });
  }

  function dispatchCompletionEvents() {
    if (typeof window.dispatchEvent === 'function') {
      try {
        const endEvent = new CustomEvent('opti_dom_script_execution_ended', {
          detail: {
            eventName: 'dom_script_execution_ended',
            timestamp: Date.now(),
            executionId: domScriptExecutionId
          },
          bubbles: true,
          cancelable: true
        });
        window.dispatchEvent(endEvent);
      } catch (e) {
        console.error("Error dispatching custom event", e);
        // Fallback for older browsers
        try {
          const endEvent = document.createEvent('CustomEvent');
          endEvent.initCustomEvent('opti_dom_script_execution_ended', true, true, {
            eventName: 'dom_script_execution_ended',
            timestamp: Date.now(),
            executionId: domScriptExecutionId
          });
          window.dispatchEvent(endEvent);
        } catch (fallbackError) {
          console.error("Error dispatching custom event", fallbackError);
          // Silent fail
        }
      }

      // Emit error count event if there were any failures
      if (failedSelectorPaths.length > 0) {
        try {
          const errorEvent = new CustomEvent('opti_dom_script_execution_error_count', {
            detail: {
              eventName: 'dom_script_execution_error_count',
              timestamp: Date.now(),
              executionId: domScriptExecutionId,
              failedSelectorPaths: failedSelectorPaths,
              errorCount: failedSelectorPaths.length
            },
            bubbles: true,
            cancelable: true
          });
          window.dispatchEvent(errorEvent);
        } catch (e) {
          console.error("Error dispatching custom event", e);
          // Fallback for older browsers
          try {
            const errorEvent = document.createEvent('CustomEvent');
            errorEvent.initCustomEvent('opti_dom_script_execution_error_count', true, true, {
              eventName: 'dom_script_execution_error_count',
              timestamp: Date.now(),
              executionId: domScriptExecutionId,
              failedSelectorPaths: failedSelectorPaths,
              errorCount: failedSelectorPaths.length
            });
            window.dispatchEvent(errorEvent);
          } catch (fallbackError) {
            console.error("Error dispatching custom event", fallbackError);
            // Silent fail
          }
        }
      }
    }
  }

  function markHydrationComplete() {
    if (hydrationDone) return;
    hydrationDone = true;
    OPTI_DEBUG && console.log("[OPTIMELEON] Hydration marked complete.");

    // Apply variant changes and wait for all images to load before removing overlay
    applyVariantChanges(true).then(function() {
      removeOverlay();
      setupMutationObserver();
      dispatchCompletionEvents();
    }).catch(function(err) {
      OPTI_DEBUG && console.error("[OPTIMELEON] Error during variant changes:", err);
      removeOverlay();
      setupMutationObserver();
      dispatchCompletionEvents();
    });
  }

  function setupMutationObserver() {
    // Clean up any existing observer before creating new one
    if (window.__optiMutationObserver) {
      OPTI_DEBUG && console.log("[OPTIMELEON] Disconnecting previous mutation observer.");
      window.__optiMutationObserver.disconnect();
      window.__optiMutationObserver = null;
    }

    observer = new MutationObserver(() => {
      if (!hydrationDone || isApplying) return;
      OPTI_DEBUG && console.log("[OPTIMELEON] Mutation detected (SPA navigation / rerender). Re-applying.");
      applyVariantChanges(false);
    });
    observer.observe(document.body, { childList: true, subtree: true });
    
    // Store globally for cleanup on next navigation
    window.__optiMutationObserver = observer;
    OPTI_DEBUG && console.log("[OPTIMELEON] Mutation observer activated for SPA changes.");
  }

  function bootstrap() {
    OPTI_DEBUG && console.log("[OPTIMELEON] Starting fallback hydration detection.");
    fallbackHydrationObserver();

    // Hard fallback if hydration doesn't fire
    safeRequestIdleCallback(() => {
      if (!hydrationDone) {
        OPTI_DEBUG && console.log("[OPTIMELEON] Fallback timeout → marking hydration complete.");
        markHydrationComplete();
      }
    }, { timeout: 600 });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", bootstrap);
  } else {
    bootstrap();
  }
})();
  };
  
  // Store function for campaign script to call on SPA re-navigation
  if (window.optimeleon && window.optimeleon.__optiState && window.optimeleon.__optiState.storedVariantFunctions) {
    window.optimeleon.__optiState.storedVariantFunctions['apply_variant_hm_c6chv_inv_3pjr0'] = variantFunction;
  }
  
  // Auto-execute on first load
  variantFunction();
})();