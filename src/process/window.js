const {app, BrowserWindow, ipcMain, ipcRenderer} = require('electron')
const windowStateKeeper = require('electron-window-state')
const path = require('path')

module.exports = {
  create: function () {
    let mainWindowState = windowStateKeeper({defaultWidth: 1400,defaultHeight: 900})
    mainWindow = new BrowserWindow({
      // Size
      x: mainWindowState.x,
      y: mainWindowState.y,
      width: mainWindowState.width,
      height: mainWindowState.height,
      minWidth: 1000,
      minHeight: 400,
      // Theme
      darkTheme: true,
      transparent: global.transparent,
      vibrancy: "sidebar",
      // Titlebar
      titleBarStyle: 'hidden',
      trafficLightPosition: { x: 10, y: 12 }, // for macOS
      titleBarOverlay: { // For Windows
        color: '#1f1f1f',
        symbolColor: 'white',
        height: 40,
      },
      // Other Options
      autoHideMenuBar: true,
      frame: false,
      icon: global.AppIcon,
      webPreferences: {
        // preload: path.join(app.getAppPath(), '/src/process/preload.js'),
        sandbox: false, // App doens't load properly if enabled
        webviewTag: true
      }
    })
    mainWindow.loadFile('src/base/index.html')

    // Other Functions
    mainWindowState.manage(mainWindow)
  }
}