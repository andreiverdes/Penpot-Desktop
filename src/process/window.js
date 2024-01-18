const {app, BrowserWindow, ipcMain, ipcRenderer} = require('electron')
const windowStateKeeper = require('electron-window-state')
const path = require('path')

const Menu = require('./menu')
const Platform = require('./platform')

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
      vibrancy: "header",
      // Titlebar
      titleBarStyle: 'hidden',
      trafficLightPosition: { x: 16, y: 12 }, // for macOS
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
        preload: path.join(app.getAppPath(), 'src/process/preload.js'),
        sandbox: false, // App doens't load properly if enabled
        webviewTag: true
      }
    })
    mainWindow.loadFile('src/base/index.html')

    // IPC Functions
    ipcMain.on('ReloadApp', () => {mainWindow.reload(); Platform.CSS()})
    ipcMain.on('MaximizeWindow', () => {mainWindow.maximize()})
    ipcMain.on('UnmaximizeWindow', () => {mainWindow.restore()})
    ipcMain.on('MinimizeWindow', () => {mainWindow.minimize()})

    // Move Tabs when entering or existing fullscreen on macOS
    if (process.platform === 'darwin') {
      mainWindow.on('enter-full-screen', (e, cmd) => {mainWindow.webContents.executeJavaScript(`document.querySelector("tab-group").shadowRoot.querySelector("nav").style.left = '0px'`)})
      mainWindow.on('leave-full-screen', (e, cmd) => {mainWindow.webContents.executeJavaScript(`document.querySelector("tab-group").shadowRoot.querySelector("nav").style.left = '80px'`)})
    }

    // Other Functions
    mainWindowState.manage(mainWindow)
    Menu.MainMenu()
    Platform.CSS()
  }
}