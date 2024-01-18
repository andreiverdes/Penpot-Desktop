// Varaibles
var Preload = './scripts/webviews/preload.js'

// LocalStorage
const Instance = localStorage.getItem('Instance')

// Tab Group
setTimeout(() => {
  // Select tab-group
  const TabGroup = document.querySelector("tab-group")

  // New Tab - When "+" is clicked
  TabGroup.setDefaultTab({
    src: Instance,
    active: true,
    webviewAttributes: {
      preload: Preload,
      allowpopups: true,
    },
    ready: function (tab) {
      TabGroup.on("tab-removed", (tab, tabGroup) => {ATWC()})
      const webview = tab.webview
      webview.addEventListener('page-title-updated', () => {
        const newTitle = webview.getTitle()
        tab.setTitle(newTitle)
      })
    }
  })

  // Default Tab - On Launch
  const tab = TabGroup.addTab({
    src: Instance,
    active: true,
    webviewAttributes: {
      preload: Preload,
      allowpopups: true,
    },
    ready: function (tab) {
      TabGroup.on("tab-removed", (tab, tabGroup) => {ATWC()})
      const webview = tab.webview
      webview.addEventListener('page-title-updated', () => {
        const newTitle = webview.getTitle()
        tab.setTitle(newTitle)
      })
    }
  })
}, 1000)
