const {contextBridge, ipcRenderer} = require('electron')

contextBridge.exposeInMainWorld('MainAPI', {
  closeWindow(){
    ipcRenderer.send('closeWindow')
  },
  minimizeWindow(){
    ipcRenderer.send('minWindow')
  }
})