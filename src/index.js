import './styles.css';
import { createHeroDivision } from './hero';
import { createAboutDivision } from './about';
import { createMenuDivision } from './menu';
import { createContactDivision } from './contact';

const divisions = (() => {
    const hero = createHeroDivision();
    const about = createAboutDivision();
    const menu = createMenuDivision();
    const contact = createContactDivision();

    return {
        hero,
        about,
        menu,
        contact
    };
})();

const displayTabsContent = (event) => {
    const content = document.querySelector('#content');
    const tabs = document.querySelectorAll('ul > li');

    for (let i = 0; i < tabs.length; i++) {
        if (tabs[i].classList.contains('selected')) {
            tabs[i].classList.remove('selected');
        }
    }

    if (event.target.classList.value !== 'cta') {    
        event.target.classList.add('selected');
    
        content.lastChild.remove();
    
        if (event.target.classList.contains('tab-about')) content.append(divisions.about);
        if (event.target.classList.contains('tab-menu')) content.append(divisions.menu);
        if (event.target.classList.contains('tab-contact')) content.append(divisions.contact);
    } else {
        const tabMenu = document.querySelector('.tab-menu');

        if (!tabMenu.classList.contains('selected')) {
            tabMenu.classList.add('selected');
            
            content.lastChild.remove();
            content.append(divisions.menu);
        }
    }
};

(() => {
    const content = document.querySelector('#content');

    content.append(divisions.hero);
    content.append(divisions.about);

    const tabAbout = document.querySelector('.tab-about');
    tabAbout.classList.add('selected');

    const tabMenu = document.querySelector('ul');
    const btnMenu = document.querySelector('.cta');
    
    tabMenu.addEventListener('click', displayTabsContent);
    btnMenu.addEventListener('click', displayTabsContent);
})();