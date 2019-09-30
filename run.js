const { app, BrowserWindow } = require('electron')
const path = require('path')
const url = require('url')

function createWindow() {
    // 创建浏览器窗口
    let mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    })
    //
    mainWindow.on('closed', function () {

    });

    // 加载index.html文件
    //mainWindow.loadFile('index.html')
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: false,
        slashes: true
    }))
    //mainWindow.webContents.openDevTools()
}

app.on('ready', createWindow)