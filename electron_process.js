// Basic init
const electron = require('electron')
const {app, BrowserWindow} = electron

// Let electron reloads by itself when webpack watches changes in ./src/
if(process.env.ELECTRON_START_URL){
require('electron-reload')(__dirname)
}

const path = require('path');
const url = require('url');
// To avoid being garbage collected
let mainWindow

app.on('ready', () => {

    mainWindow = new BrowserWindow({width: 900, height: 600})
    const startUrl = process.env.ELECTRON_START_URL || url.format({
        pathname: path.join(__dirname, './index.html'),
        protocol: 'file:',
        slashes: true
    });
    mainWindow.loadURL(startUrl);

})
