const sidebar = document.querySelector('aside');
const showSidebarBtn = document.querySelector('#show__sidebar-btn')
const hideSidebarBtn = document.querySelector('#hide__sidebar-btn')

const showSidebar = () => {
    sidebar.style.left = '0';
    showSidebarBtn.style.display = 'none';
    hideSidebarBtn.style.display ='inline-block'
}

const hideSidebar = () => {
    sidebar.style.left = '-100%';
    showSidebarBtn.style.display = 'inline-block';
    hideSidebarBtn.style.display ='none'
}



showSidebarBtn.addEventListener('click', showSidebar)
hideSidebarBtn.addEventListener('click', hideSidebar)


// ==============Nav =========================//
const navItems = document.querySelector('.nav__items');
const navOpenBtn = document.querySelector('#open__btn');
const navCloseBtn = document.querySelector('#close__btn');



const openNav = () => {
    navItems.style.display = 'flex';
    navOpenBtn.style.display = 'none';
    navCloseBtn.style.display = 'inline-block';
}

const closeNav = ()=> {
    navItems.style.display = 'none';
    navOpenBtn.style.display = 'inline-block';
    navCloseBtn.style.display = 'none';
}

navOpenBtn.addEventListener('click', openNav);
navCloseBtn.addEventListener('click', closeNav)

