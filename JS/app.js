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
    portfolioFooter = document.querySelector('.port-footer');
    portfolioMain = document.querySelector('.port-main');
    navLinks = document.querySelector('.nav-links');
    portfolioFooter.classList.toggle('toggled');
    portfolioMain.classList.toggle('toggled');
    navLinks.classList.toggle('toggled');
    navToggler.classList.toggle('toggled');
}

const toggleNavigationIconwip = (navToggler) => {
    wipMain = document.querySelector('.wip-main')
    navLinks = document.querySelector('.nav-links');
    wipMain.classList.toggle('toggled');
    navLinks.classList.toggle('toggled');
    navToggler.classList.toggle('toggled');
}