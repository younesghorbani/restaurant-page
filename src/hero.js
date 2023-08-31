export function createHeroDivision() {
    const divHero = document.createElement('div');
    divHero.classList.add('hero');

    const header = document.createElement('header');

    const pLogo = document.createElement('p');
    pLogo.classList.add('logo');
    pLogo.textContent = `Slider's`;

    const navMenu = document.createElement('nav');
    navMenu.classList.add('menu');

    const ul = document.createElement('ul');

    const liAbout = document.createElement('li');
    liAbout.classList.add('tab-about');
    liAbout.textContent = 'About';

    const liMenu = document.createElement('li');
    liMenu.classList.add('tab-menu');
    liMenu.textContent = 'Menu';

    const liContact = document.createElement('li');
    liContact.classList.add('tab-contact');
    liContact.textContent = 'Contact';

    const divTel = document.createElement('div');
    divTel.classList.add('tel');
    divTel.textContent = '+1 234-567-8901';

    const divText = document.createElement('div');
    divText.classList.add('text');

    const h1 = document.createElement('h1');
    h1.textContent = 'Meet, Eat and ';

    const span = document.createElement('span');
    span.textContent = 'Enjoy!';

    const buttonCta = document.createElement('button');
    buttonCta.classList.add('cta');
    buttonCta.textContent = 'View Menu';

    h1.append(span);

    divText.append(h1);
    divText.append(buttonCta);

    ul.append(liAbout);
    ul.append(liMenu);
    ul.append(liContact);

    navMenu.append(ul);

    header.append(pLogo);
    header.append(ul);
    header.append(divTel);

    divHero.append(header);
    divHero.append(divText);

    return divHero;
}