import {build} from 'esbuild';
import {mkdir,cp} from 'node:fs/promises';
import {execFileSync} from 'node:child_process';
await mkdir('dist/assets',{recursive:true});await cp('public','dist',{recursive:true});await cp('index.html','dist/index.html');
await build({entryPoints:['src/main.jsx'],outfile:'dist/assets/app.js',bundle:true,minify:true,format:'esm',jsx:'automatic',define:{'process.env.NODE_ENV':'"production"'}});
execFileSync('./node_modules/.bin/tailwindcss',['-i','src/style.css','-o','dist/assets/style.css','--minify'],{stdio:'inherit'});
