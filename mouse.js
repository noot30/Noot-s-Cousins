var mouse = document.getElementById('mouse');
document.addEventListener('mousemove',function(e){
    console.log(e.clientX,e.clientY);
    mouse.style.left=e.clientX+'px';
    mouse.style.top=e.clientY+'px';
})
