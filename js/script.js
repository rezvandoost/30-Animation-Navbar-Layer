const openIt = document.querySelector('.menuOpen');
const closeIt = document.querySelector('.menuClose');
const layer = document.querySelector('.layer1');

openIt.onclick = () => {
   layer.classList.add('active');
}

closeIt.onclick = () => {
   layer.classList.remove('active');
}