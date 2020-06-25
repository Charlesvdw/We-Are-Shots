const toggleNavigationIcon = (navToggler) => {
    navLinks = document.querySelector('.nav-links');
    bodyZone = document.querySelector('.body-zone');
    home = document.querySelector('.home');
    bodyZone.classList.toggle('toggled');
    home.classList.toggle('toggled');
    navLinks.classList.toggle('toggled');
    navToggler.classList.toggle('toggled');
}

const toggleNavigationIconPortfolio = (navToggler) => {
    navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('toggled');
    navToggler.classList.toggle('toggled');
}