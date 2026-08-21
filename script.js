
const btn=document.querySelector('.menu-btn');
const menu=document.querySelector('.menu');
btn?.addEventListener('click',()=>{
  const open=menu.classList.toggle('open');
  btn.setAttribute('aria-expanded',open?'true':'false');
});
document.querySelectorAll('.menu a').forEach(a=>a.addEventListener('click',()=>{
  menu.classList.remove('open');
  btn?.setAttribute('aria-expanded','false');
}));
