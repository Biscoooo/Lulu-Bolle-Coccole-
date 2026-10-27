import {build} from 'esbuild';
import {mkdir,cp} from 'node:fs/promises';
import {execFileSync} from 'node:child_process';
await mkdir('dist/assets',{recursive:true});await cp('public','dist',{recursive:true});await cp('index.html','dist/index.html');
await build({entryPoints:['src/main.jsx'],outfile:'dist/assets/app.js',bundle:true,minify:true,format:'esm',jsx:'automatic',define:{'process.env.NODE_ENV':'"production"'}});
execFileSync('./node_modules/.bin/tailwindcss',['-i','src/style.css','-o','dist/assets/style.css','--minify'],{stdio:'inherit'});

// Nomi diversi a ogni modifica evitano che il browser mostri bundle precedenti.
const {readFile,copyFile}=await import('node:fs/promises');
const {createHash}=await import('node:crypto');
let html=await readFile('dist/index.html','utf8');
for(const name of ['app.js','style.css']){
  const digest=createHash('sha256').update(await readFile('dist/assets/'+name)).digest('hex').slice(0,12);
  const dot=name.lastIndexOf('.');
  const hashed=name.slice(0,dot)+'.'+digest+name.slice(dot);
  await copyFile('dist/assets/'+name,'dist/assets/'+hashed);
  html=html.replaceAll('./assets/'+name,'./assets/'+hashed);
}
const {writeFile:writeHtml}=await import('node:fs/promises');
await writeHtml('dist/index.html',html);

await mkdir('docs',{recursive:true});
await cp('dist','docs',{recursive:true});
const {writeFile}=await import('node:fs/promises');
await writeFile('docs/.nojekyll','');
