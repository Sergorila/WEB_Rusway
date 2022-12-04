const elem = document.getElementsByClassName('burgerandlogo')[0];
const navmenu = document.getElementsByClassName('navmenu')[0];
const exit = document.getElementsByClassName('navmenu__firstpage__exitrow-icon')[0];
const a_toggle = document.getElementsByClassName('menu2')[0];
const secondpage = document.getElementsByClassName('navmenu__secondpage')[0];

elem.addEventListener('click', e => { 
    e.preventDefault();
    navmenu.className = 'navmenu__active';
});

exit.addEventListener('click', e => { 
    e.preventDefault();
    navmenu.className = 'navmenu';
});

a_toggle.addEventListener('click', e => { 
    e.preventDefault();
    if (secondpage.className == 'navmenu__secondpage')
    {
        secondpage.className = 'secondpage__active';
    }
    else
    {
        secondpage.className = 'navmenu__secondpage';
    } 
});