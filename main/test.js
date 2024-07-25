import { spawn } from 'node:child_process';

const pythonProcess = spawn('py', ['main.py']);

pythonProcess.stdout.on('data', (data) => {
	console.log(`Received from Python: ${data}`);
});