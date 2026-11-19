window.recordingPreview={fullscreen:()=>document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen()};
const canvas=document.getElementById('picture'),ctx=canvas.getContext('2d',{alpha:false});
let frame=0;
function render(){if(!window.opener||window.opener.closed){document.title='プレビュー元の画面が閉じられました';return;}const source=window.opener.document.getElementById('video');if(source){ctx.drawImage(source,0,0,1920,1080);canvas.dataset.ready='true';}frame=requestAnimationFrame(render);}
frame=requestAnimationFrame(render);
window.addEventListener('keydown',e=>{if(e.key==='Escape')window.close();else if(e.code==='Space'||e.code==='KeyS'){e.preventDefault();if(!e.repeat)window.opener.document.getElementById(e.code==='Space'?'preview-toggle':'preview-rewind').click();}else if(e.key==='F11'){e.preventDefault();void window.recordingPreview.fullscreen();}});
document.addEventListener('dblclick',()=>void window.recordingPreview.fullscreen());
window.addEventListener('beforeunload',()=>{cancelAnimationFrame(frame);try{window.opener?.document.getElementById('preview-stop')?.click();}catch{}});
