import fs from 'node:fs';
import { exec } from 'node:child_process';
import semver from 'semver';

if (fs.existsSync('./.n-node-version')) {
	let target = fs.readFileSync('./.n-node-version', 'utf8');
	if (target === 'current' || target === 'latest' || target === 'lts') {
		exec(`n lsr ${target}`, (error, stdout) => {
			target = stdout;
		});
	}

	// Check current node version and switch if necessary
	exec('node -v', (error, stdout) => {
		if (!semver.satisfies(stdout, target)) {
			console.log(`Switching to node ${target.startsWith('v') ? target : `v${target}`}`);
			exec(`n auto`);
		}
	});
}
