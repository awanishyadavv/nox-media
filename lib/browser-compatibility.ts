// Browser detection and compatibility fixes
export const detectBrowser = () => {
  if (typeof window === "undefined") return null

  const userAgent = window.navigator.userAgent
  let browser = null

  // Detect browser
  if (userAgent.indexOf("MSIE ") > -1 || userAgent.indexOf("Trident/") > -1) {
    browser = "ie"
  } else if (userAgent.indexOf("Edge/") > -1 || userAgent.indexOf("Edg/") > -1) {
    browser = "edge"
  } else if (userAgent.indexOf("Chrome/") > -1) {
    browser = "chrome"
  } else if (userAgent.indexOf("Safari/") > -1 && userAgent.indexOf("Chrome/") === -1) {
    browser = "safari"
  } else if (userAgent.indexOf("Firefox/") > -1) {
    browser = "firefox"
  }

  // Detect OS
  let os = null
  if (userAgent.indexOf("Windows") > -1) {
    os = "windows"
  } else if (userAgent.indexOf("Mac") > -1) {
    os = "mac"
  } else if (userAgent.indexOf("Linux") > -1) {
    os = "linux"
  } else if (userAgent.indexOf("Android") > -1) {
    os = "android"
  } else if (userAgent.indexOf("iPhone") > -1 || userAgent.indexOf("iPad") > -1 || userAgent.indexOf("iPod") > -1) {
    os = "ios"
  }

  // Detect mobile
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)

  return { browser, os, isMobile }
}

// Apply browser-specific fixes
export const applyBrowserFixes = () => {
  if (typeof window === "undefined") return

  const { browser, os } = detectBrowser() || {}

  // Add browser and OS classes to body
  if (browser) document.body.classList.add(`browser-${browser}`)
  if (os) document.body.classList.add(`os-${os}`)

  // IE11 fixes
  if (browser === "ie") {
    // Add polyfills for IE11
    import("core-js/stable")
    import("regenerator-runtime/runtime")

    // Fix for flexbox issues in IE11
    const style = document.createElement("style")
    style.innerHTML = `
      .flex { display: -ms-flexbox; display: flex; }
      .flex-col { -ms-flex-direction: column; flex-direction: column; }
      .items-center { -ms-flex-align: center; align-items: center; }
      .justify-center { -ms-flex-pack: center; justify-content: center; }
      .justify-between { -ms-flex-pack: justify; justify-content: space-between; }
    `
    document.head.appendChild(style)
  }

  // iOS Safari fixes
  if (os === "ios" && browser === "safari") {
    // Fix for 100vh issue on iOS Safari
    const style = document.createElement("style")
    style.innerHTML = `
      .min-h-screen { min-height: -webkit-fill-available; }
      .h-screen { height: -webkit-fill-available; }
    `
    document.head.appendChild(style)

    // Fix for sticky positioning
    document.addEventListener("touchmove", () => {}, { passive: true })
  }
}

