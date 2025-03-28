// Define a type for the browser detection result
export type BrowserInfo = {
  browser: string | null;
  os: string | null;
  isMobile: boolean;
};

// Browser detection and compatibility fixes
export const detectBrowser = (): BrowserInfo => {
  if (typeof window === "undefined") return { browser: null, os: null, isMobile: false };

  const userAgent = window.navigator.userAgent;
  let browser: string | null = null;

  // Detect browser
  if (userAgent.indexOf("MSIE ") > -1 || userAgent.indexOf("Trident/") > -1) {
    browser = "ie";
  } else if (userAgent.indexOf("Edge/") > -1 || userAgent.indexOf("Edg/") > -1) {
    browser = "edge";
  } else if (userAgent.indexOf("Chrome/") > -1) {
    browser = "chrome";
  } else if (userAgent.indexOf("Safari/") > -1 && userAgent.indexOf("Chrome/") === -1) {
    browser = "safari";
  } else if (userAgent.indexOf("Firefox/") > -1) {
    browser = "firefox";
  }

  // Detect OS
  let os: string | null = null;
  if (userAgent.indexOf("Windows") > -1) {
    os = "windows";
  } else if (userAgent.indexOf("Mac") > -1) {
    os = "mac";
  } else if (userAgent.indexOf("Linux") > -1) {
    os = "linux";
  } else if (userAgent.indexOf("Android") > -1) {
    os = "android";
  } else if (userAgent.indexOf("iPhone") > -1 || userAgent.indexOf("iPad") > -1 || userAgent.indexOf("iPod") > -1) {
    os = "ios";
  }

  // Detect mobile
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);

  return { browser, os, isMobile };
};

// Apply browser-specific fixes
export const applyBrowserFixes = (): void => {
  if (typeof window === "undefined") return;

  const { browser, os } = detectBrowser();

  // Add browser and OS classes to body
  if (browser) document.body.classList.add(`browser-${browser}`);
  if (os) document.body.classList.add(`os-${os}`);

  // IE11 fixes
  if (browser === "ie") {
    // Add polyfills for IE11
    import("core-js/stable");
    import("regenerator-runtime/runtime");

    // Fix for flexbox issues in IE11
    const style = document.createElement("style");
    style.innerHTML = `
      .flex { display: -ms-flexbox; display: flex; }
      .flex-col { -ms-flex-direction: column; flex-direction: column; }
      .items-center { -ms-flex-align: center; align-items: center; }
      .justify-center { -ms-flex-pack: center; justify-content: center; }
      .justify-between { -ms-flex-pack: justify; justify-content: space-between; }
    `;
    document.head.appendChild(style);
  }

  // iOS Safari fixes
  if (os === "ios" && browser === "safari") {
    // Fix for 100vh issue on iOS Safari
    const style = document.createElement("style");
    style.innerHTML = `
      .min-h-screen { min-height: -webkit-fill-available; }
      .h-screen { height: -webkit-fill-available; }
    `;
    document.head.appendChild(style);

    // Fix for sticky positioning
    document.addEventListener("touchmove", () => {}, { passive: true });
  }
};

// Browser warning function for non-React contexts
export const getBrowserWarningHTML = (): string | null => {
  const browserInfo = detectBrowser();

  // Add browser-specific warning for outdated browsers
  if (browserInfo.browser === "ie") {
    return `
      <div style="position: fixed; bottom: 0; left: 0; right: 0; background-color: #ecc94b; color: black; padding: 1rem; z-index: 50;">
        <div style="max-width: 1200px; margin: 0 auto;">
          You are using an outdated browser. Please upgrade to a modern browser for the best experience.
        </div>
      </div>
    `;
  }

  return null;
};

// Browser warning React component (optional, for React projects)
export const BrowserWarning = (): string | null => {
  const browserInfo = detectBrowser();

  // Add browser-specific warning for outdated browsers
  if (browserInfo.browser === "ie") {
    return `
      <div className="fixed bottom-0 left-0 right-0 bg-yellow-500 text-black p-4 z-50">
        <div className="container mx-auto">
          You are using an outdated browser. Please upgrade to a modern browser for the best experience.
        </div>
      </div>
    `;
  }

  return null;
};