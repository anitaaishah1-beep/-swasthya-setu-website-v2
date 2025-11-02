
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('.menu-btn');
  const menu = document.querySelector('.mobile-menu');
  if(btn && menu){
    btn.addEventListener('click', () => {
      menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
    });
  }
});
