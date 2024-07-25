import { app, BrowserWindow } from 'electron';
import serve from 'electron-serve';
import path from 'path';
import { spawn } from 'node:child_process';

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
			preload: path.join('../', 'preload.js')
		}
	});

	win.setMenu(null);

	win.webContents.openDevTools();

	const pythonProcess = spawn('py', [path.join(process.cwd(), 'main/main.py')]);

	pythonProcess.stdin.write('Hello from Node.js\n');
	pythonProcess.stdin.end();

	pythonProcess.stdout.on('data', (data) => {
		console.log(`Received from Python: ${data}`);
	});

	pythonProcess.stderr.on('data', (data) => {
		console.error(`Error from Python: ${data}`);
	});

	pythonProcess.on('close', (code) => {
		console.log(`Python process exited with code ${code}`);
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

	const pythonProcess = spawn('py', ['main.py']);

	pythonProcess.stdout.on('data', (data) => {
		console.log(`Received from Python: ${data}`);
	});
});

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});
