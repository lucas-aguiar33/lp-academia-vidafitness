const btn_menu = document.querySelector("#btn-menu");
const btn_close = document.querySelector("#btn-close");
const sidebar = document.querySelector('.sidebar');
const main = document.querySelector(".main");
const header = document.querySelector(".header");

const links = [...document.getElementsByTagName('a')];

btn_menu.addEventListener('click', () => {
    sidebar.classList.toggle('active');
    main.style.opacity = '0.3';
    header.style.opacity = '0.3';
    document.documentElement.style.overflowY = 'hidden';
})

btn_close.addEventListener('click', () => {
    sidebar.classList.remove("active");
    main.style.opacity = '1';
    header.style.opacity = '1';
    document.documentElement.style.overflowY = 'auto';

})

links.forEach((el) => {
    el.addEventListener('click', () => {
        sidebar.classList.remove('active');
        main.style.opacity = '1';
        header.style.opacity = '1';
        document.documentElement.style.overflowY = 'auto';

    })
})
// script das animações
AOS.init();