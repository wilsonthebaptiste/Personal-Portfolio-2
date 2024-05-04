// this is for the navbar toggle
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active')
}

// this is for scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');


window.onscroll = () => {
sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop -100
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
        // This will activate navbar links
        navLinks.forEach(links =>{
            links.classList.remove('active');
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        });
        // This will activate animations for sections on scroll
        sec.classList.add('show-animate');
    }
})

    //for a sticky header
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

//this will remove the toggle icon and navbar when a navbar link is clicked
    menuIcon.classList.remove('bx-x')
    navbar.classList.remove('active')

}