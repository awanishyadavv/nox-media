const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Build the Next.js app
console.log('Building Next.js app...');
execSync('npm run build', { stdio: 'inherit' });

// Copy worker files to the standalone directory
console.log('Copying Worker files to standalone directory...');
fs.copyFileSync('worker.js', '.next/standalone/worker.js');
fs.copyFileSync('fetch.js', '.next/standalone/fetch.js');
fs.copyFileSync('wrangler.toml', '.next/standalone/wrangler.toml');

// Change to the standalone directory and deploy
console.log('Deploying from standalone directory...');
process.chdir('.next/standalone');
execSync('npx wrangler deploy', { stdio: 'inherit' });