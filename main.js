const { app, BrowserWindow } = require('electron')

const fs = require("fs");
const path = require("path");

const dialogSaveOptions = {
    title: "Sélectionner un fichier",
    buttonLabel: "Enregistrer",
    filters: [{ name: "Textes", extensions: ["txt"] }],
    defaultPath: "C:\\Users\\jb\\Desktop\\hello.txt",
  };

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, "preload.js"),
        },
    })

    win.loadFile('./src/index.html');

    ipcMain.on("save-file", (event, arg) => {
        dialog.showSaveDialog(win, dialogSaveOptions).then((result) => {
          fs.writeFile(result.filePath, "Coucou!", (err) => {
            if (err) console.log(err);
            console.log("The file has been saved!");
          });
        });
      });
}

app.whenReady().then(() => {
    createWindow()

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow()
        }
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})