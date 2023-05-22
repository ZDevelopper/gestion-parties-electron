const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electron", {
  saveFile: () => ipcRenderer.send("save-file"),
});
