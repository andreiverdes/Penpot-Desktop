const {app} = require('electron')
const {autoUpdater} = require("electron-updater")
const {MessageChannel, ProcessManager} = require('electron-re')
// ProcessManager.openWindow()

// Import Files
let MainWindow = require('./window')

// Launch
app.whenReady().then(() => {
    autoUpdater.checkForUpdatesAndNotify()
    MainWindow.create()
})