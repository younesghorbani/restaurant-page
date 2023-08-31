import elkBurgerImage from './images/elk-burger.jpg';
import bisonBurgerImage from './images/bison-burger.jpg';
import butterBurgerImage from './images/butter-burger.jpg';
import chiliBurgerImage from './images/chili-burger.jpg';

export function createMenuDivision() {
    const divMenu = document.createElement('div');
    divMenu.classList.add('menu');

    const h2 = document.createElement('h2');
    h2.textContent = 'Menu';

    const divMenuContent = document.createElement('div');
    divMenuContent.classList.add('menu-content');

    const divItem1 = document.createElement('div');
    divItem1.classList.add('item');

    const divItemImage1 = document.createElement('div');
    divItemImage1.classList.add('item-image');

    const img1 = new Image();
    img1.src = elkBurgerImage;
    img1.alt = 'Elk burger';

    const divItemText1 = document.createElement('div');
    divItemText1.classList.add('item-text');

    const h3_1 = document.createElement('h3');
    h3_1.textContent = 'Elk Burger';

    const div1 = document.createElement('div');

    const p1 = document.createElement('p');
    p1.textContent = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident eaque dolore 
                    iusto, quia impedit error dignissimos sint, ipsam in ratione reprehenderit 
                    saepe debitis enim aperiam modi, molestiae cum voluptatem voluptas?`;
    
    const spanPrice1 = document.createElement('span');
    spanPrice1.classList.add('price');
    spanPrice1.textContent = '$ 14.99';

    const divItem2 = document.createElement('div');
    divItem2.classList.add('item');

    const divItemImage2 = document.createElement('div');
    divItemImage2.classList.add('item-image');

    const img2 = new Image();
    img2.src = bisonBurgerImage;
    img2.alt = 'Bison burger';

    const divItemText2 = document.createElement('div');
    divItemText2.classList.add('item-text');

    const h3_2 = document.createElement('h3');
    h3_2.textContent = 'Bison Burger';

    const div2 = document.createElement('div');

    const p2 = document.createElement('p');
    p2.textContent = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex ratione sunt impedit 
                    officia natus eligendi delectus porro, dolor a possimus saepe id veritatis 
                    voluptates ut quod distinctio explicabo quibusdam minus?`;
    
    const spanPrice2 = document.createElement('span');
    spanPrice2.classList.add('price');
    spanPrice2.textContent = '$ 14.99';

    const divItem3 = document.createElement('div');
    divItem3.classList.add('item');

    const divItemImage3 = document.createElement('div');
    divItemImage3.classList.add('item-image');

    const img3 = new Image();
    img3.src = butterBurgerImage;
    img3.alt = 'Butter burger';

    const divItemText3 = document.createElement('div');
    divItemText3.classList.add('item-text');

    const h3_3 = document.createElement('h3');
    h3_3.textContent = 'Butter Burger';

    const div3 = document.createElement('div');

    const p3 = document.createElement('p');
    p3.textContent = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam molestiae quaerat 
                    esse! Facilis beatae iusto quas quo quaerat, laboriosam odit quisquam nobis quia 
                    mollitia illum? Mollitia, iure animi! Iusto, eaque?`;
    
    const spanPrice3 = document.createElement('span');
    spanPrice3.classList.add('price');
    spanPrice3.textContent = '$ 14.99';

    const divItem4 = document.createElement('div');
    divItem4.classList.add('item');

    const divItemImage4 = document.createElement('div');
    divItemImage4.classList.add('item-image');

    const img4 = new Image();
    img4.src = chiliBurgerImage;
    img4.alt = 'Chili burger';

    const divItemText4 = document.createElement('div');
    divItemText4.classList.add('item-text');

    const h3_4 = document.createElement('h3');
    h3_4.textContent = 'Chili Burger';

    const div4 = document.createElement('div');

    const p4 = document.createElement('p');
    p4.textContent = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis, ducimus itaque 
                    architecto odio recusandae iure adipisci impedit accusamus placeat voluptatum 
                    expedita natus non odit voluptates ullam, tempore, quia sed earum!`;
    
    const spanPrice4 = document.createElement('span');
    spanPrice4.classList.add('price');
    spanPrice4.textContent = '$ 14.99';

    div1.append(p1);
    div1.append(spanPrice1);

    divItemText1.append(h3_1);
    divItemText1.append(div1);

    divItemImage1.append(img1);

    divItem1.append(divItemImage1);
    divItem1.append(divItemText1);

    divMenuContent.append(divItem1);

    div2.append(p2);
    div2.append(spanPrice2);

    divItemText2.append(h3_2);
    divItemText2.append(div2);

    divItemImage2.append(img2);

    divItem2.append(divItemImage2);
    divItem2.append(divItemText2);

    divMenuContent.append(divItem2);

    div3.append(p3);
    div3.append(spanPrice3);

    divItemText3.append(h3_3);
    divItemText3.append(div3);

    divItemImage3.append(img3);

    divItem3.append(divItemImage3);
    divItem3.append(divItemText3);

    divMenuContent.append(divItem3);

    div4.append(p4);
    div4.append(spanPrice4);

    divItemText4.append(h3_4);
    divItemText4.append(div4);

    divItemImage4.append(img4);

    divItem4.append(divItemImage4);
    divItem4.append(divItemText4);

    divMenuContent.append(divItem4);

    divMenu.append(h2);
    divMenu.append(divMenuContent);

    return divMenu;
}