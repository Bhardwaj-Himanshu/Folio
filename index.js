const hamburgerMenu=document.querySelector('.hamburger-icon');
const hamburgerMenuLinks=document.querySelector('.hamburger-menu-links');

hamburgerMenu.addEventListener('click',()=>{
  if(hamburgerMenu.classList.contains('cross') && hamburgerMenuLinks.style.display=="flex"){
    hamburgerMenu.classList.remove('cross');
    hamburgerMenuLinks.style.display="none";
  }
  else{
    hamburgerMenuLinks.style.display="flex";
    hamburgerMenu.classList.add('cross');
  }
})