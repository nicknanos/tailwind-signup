//DOM Selectors
const page = document.querySelector('html');
const darkButton = document.querySelector('.toggle-dark');

darkButton.addEventListener('click',(e)=>{
    e.preventDefault();
    page.classList.toggle('dark');
})