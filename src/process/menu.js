const {app, Menu} = require('electron')
let Platform = require('./platform')

module.exports = {
    MainMenu: function () {
        const template = [
            ...(process.platform === 'darwin' ? [{
            label: app.name,
            submenu: [
                { role: 'about' },
                { type: 'separator' },
                { role: 'services' },
                { type: 'separator' },
                { role: 'hide' },
                { role: 'hideOthers' },
                { role: 'unhide' },
                { type: 'separator' },
                { role: 'quit' }
            ]
            }] : []),
            {
            label: 'File',
            submenu: [
                {
                    label: "New Tab",
                    accelerator: "CmdOrCtrl+T",
                    click: () => {
                        mainWindow.webContents.executeJavaScript(`document.querySelector("tab-group").shadowRoot.querySelector("div > nav > div.buttons > button").click()`)
                    }
                },
                {
                    label: "Close Tab",
                    accelerator: "CmdOrCtrl+W",
                    click: () => {
                        mainWindow.webContents.executeJavaScript(`document.querySelector("tab-group").shadowRoot.querySelector("div > nav > div.tabs > div.tab.visible.active > span.tab-close > button").click()`)
                    }
                }
            ]
            },
            {
            label: 'Edit',
            submenu: [
                { role: 'undo' },
                { role: 'redo' },
                { type: 'separator' },
                { role: 'cut' },
                { role: 'copy' },
                { role: 'paste' },
                ...(process.platform === 'darwin' ? [
                { role: 'pasteAndMatchStyle' },
                { role: 'delete' },
                { role: 'selectAll' },
                { type: 'separator' },
                {
                    label: 'Speech',
                    submenu: [
                    { role: 'startSpeaking' },
                    { role: 'stopSpeaking' }
                    ]
                }
                ] : [
                { role: 'delete' },
                { type: 'separator' },
                { role: 'selectAll' }
                ])
            ]
            },
            {
            label: 'View',
            submenu: [
                {
                label: 'Reload Tab',
                accelerator: 'CmdOrCtrl+R',
                click: async () => {
                    mainWindow.webContents.executeJavaScript(`document.querySelector("tab-group").shadowRoot.querySelector("webview.visible").reload()`)
                    setTimeout(() => {Platform.CSS()}, 1000)
                }
                },
                {
                label: 'Reload Window',
                accelerator: 'CmdOrCtrl+Shift+R',
                click: async () => {
                    mainWindow.reload()
                    setTimeout(() => {Platform.CSS()}, 1000)
                }
                },
                { role: 'toggleDevTools' },
                {
                label: 'Open Tab Developer Tools',
                accelerator: 'CmdOrCtrl+Shift+D',
                click: () => {
                    mainWindow.webContents.executeJavaScript(`document.querySelector("body > tab-group").shadowRoot.querySelector("div > div > webview.visible").openDevTools()`)
                }},
                { type: 'separator' },
                { role: 'resetZoom' },
                { role: 'zoomIn' },
                { role: 'zoomOut' },
                { type: 'separator' },
                { role: 'togglefullscreen' }
            ]
            },
            {
            label: 'Window',
            submenu: [
                { role: 'minimize' },
                { role: 'zoom' },
                ...(process.platform === 'darwin' ? [
                { type: 'separator' },
                { role: 'front' },
                { type: 'separator' },
                {
                    role: 'close',
                    accelerator: "CmdOrCtrl+Shift+W"
                }
                ] : [
                {
                    role: 'close',
                    accelerator: "CmdOrCtrl+Shift+W"
                }
                ])
            ]
            },
            {
            role: 'help',
            submenu: [
                {
                    label: 'User Guide',
                    click: async () => {
                        const { shell } = require('electron')
                        await shell.openExternal('https://help.penpot.app/user-guide/')
                    }
                },
                {
                    label: 'FAQ',
                    click: async () => {
                        const { shell } = require('electron')
                        await shell.openExternal('https://help.penpot.app/faqs')
                    }
                },
                {
                    label: 'Learn to Self-host',
                    click: async () => {
                        const { shell } = require('electron')
                        await shell.openExternal('https://penpot.app/self-host')
                    }
                },
                {
                    label: 'Penpot Community',
                    click: async () => {
                        const { shell } = require('electron')
                        await shell.openExternal('https://community.penpot.app/')
                    }
                },
                { type: 'separator'},
                {
                    label: 'Source Code',
                    click: async () => {
                        const { shell } = require('electron')
                        await shell.openExternal('https://sudovanilla.com/code/Korbs/Penpot-Desktop/-/tree/main')
                    }
                }
            ]
            }
        ]

        const menu = Menu.buildFromTemplate(template)
        Menu.setApplicationMenu(menu)
    }
}