// this is for scroll sections
window.onscroll = () => {
    //for a sticky header
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);
    
}