import { app, BrowserWindow } from 'electron';
import serve from 'electron-serve';
import path from 'path';
import { exec } from 'node:child_process';

const appServe = app.isPackaged
  ? serve({
      directory: path.join('../', '../out')
    })
  : null;

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join('D:\\Projects\\MARCEL\\Application\\main\\preload.js')
    }
  });

  win.setMenu(null);

  win.webContents.openDevTools();

  const pythonProcess = exec(
    `py D:\\Projects\\MARCEL\\Application\\main\\chat.py`
  );

  pythonProcess.stdout.on('data', (data) => {
    const output = JSON.parse(data.toString());

    console.log(output['message']);

    win.webContents.send(output['type'], output['message']);
  });

  if (app.isPackaged) {
    appServe(win).then(() => {
      win.loadURL('app://-');
    });
  } else {
    win.loadURL('http://localhost:3000');
    win.webContents.openDevTools();
    win.webContents.on('did-fail-load', (e, code, desc) => {
      win.webContents.reloadIgnoringCache();
    });
  }
};

app.on('ready', () => {
  createWindow();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
