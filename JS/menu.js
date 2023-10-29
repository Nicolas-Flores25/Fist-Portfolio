(function(){
    const openButton = document.querySelector('.nav_menu');
    const menu = document.querySelector('.nav_link');
    const closeMenu = document.querySelector('.nav_close');
    const menuLinks = menu.querySelectorAll('a'); // Selecciona tolos los links

    openButton.addEventListener('click', () => {
        menu.classList.add('nav_link--show');
    });

    closeMenu.addEventListener('click', () => {
        menu.classList.remove('nav_link--show');
    });

    menuLinks.forEach((link) => {
        link.addEventListener('click', () => {
            menu.classList.remove('nav_link--show');
        });
    });
})();
