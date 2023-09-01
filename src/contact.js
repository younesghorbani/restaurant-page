import mapMarkerOutlineImage from './images/map-marker-outline.svg';
import clockOutlineImage from './images/clock-outline.svg';
import earthImage from './images/earth.svg';
import twitterxImage from './images/twitterx.svg';
import youtubeImage from './images/youtube.svg';
import instagramImage from './images/instagram.svg';
import facebookImage from './images/facebook.svg';

export function createContactDivision() {
    const divContact = document.createElement('div');
    divContact.classList.add('contact');

    const h2 = document.createElement('h2');
    h2.textContent = 'Contact';

    const divContactContent = document.createElement('div');
    divContactContent.classList.add('contact-content');

    const divAddress = document.createElement('div');
    divAddress.classList.add('address');

    const divTitle1 = document.createElement('div');
    divTitle1.classList.add('title');

    const img1 = new Image();
    img1.src = mapMarkerOutlineImage;
    img1.alt = '';

    const h3_1 = document.createElement('h3');
    h3_1.textContent = 'Address';

    const p = document.createElement('p');
    p.textContent = '2179 Maple Street, Anaheim CA 92805';

    const divHours = document.createElement('div');
    divHours.classList.add('hours');

    const divTitle2 = document.createElement('div');
    divTitle2.classList.add('title');

    const img2 = new Image();
    img2.src = clockOutlineImage;
    img2.alt = '';

    const h3_2 = document.createElement('h3');
    h3_2.textContent = 'Open Hours';

    const div1 = document.createElement('div');

    const spanDay = document.createElement('span');
    spanDay.classList.add('day');
    spanDay.textContent = 'Day: ';

    const span1 = document.createElement('span');
    span1.textContent = 'Monday - Friday';

    const div2 = document.createElement('div');

    const spanTime = document.createElement('span');
    spanTime.classList.add('time');
    spanTime.textContent = 'Time: ';

    const span2 = document.createElement('span');
    span2.textContent = '10:30am - 1:00am';

    const divSocial = document.createElement('social');
    divSocial.classList.add('social');

    const divTitle3 = document.createElement('div');
    divTitle3.classList.add('title');

    const img3 = new Image();
    img3.src = earthImage;
    img3.alt = '';

    const h3_3 = document.createElement('h3');
    h3_3.textContent = 'Find Us On';

    const divSocialIcons = document.createElement('div');
    divSocialIcons.classList.add('social-icons');

    const img4 = new Image();
    img4.src = twitterxImage;
    img4.alt = 'Twitter';

    const img5 = new Image();
    img5.src = youtubeImage;
    img5.alt = 'Youtube';

    const img6 = new Image();
    img6.src = instagramImage;
    img6.alt = 'Instagram';

    const img7 = new Image();
    img7.src = facebookImage;
    img7.alt = 'Facebook';

    divSocialIcons.append(img4);
    divSocialIcons.append(img5);
    divSocialIcons.append(img6);
    divSocialIcons.append(img7);

    divTitle3.append(img3);
    divTitle3.append(h3_3);

    divSocial.append(divTitle3);
    divSocial.append(divSocialIcons);

    div2.append(spanTime);
    div2.append(span2);

    div1.append(spanDay);
    div1.append(span1);

    divTitle2.append(img2);
    divTitle2.append(h3_2);

    divHours.append(divTitle2);
    divHours.append(div1);
    divHours.append(div2);

    divTitle1.append(img1);
    divTitle1.append(h3_1);

    divAddress.append(divTitle1);
    divAddress.append(p);

    divContactContent.append(divAddress);
    divContactContent.append(divHours);
    divContactContent.append(divSocial);

    divContact.append(h2);
    divContact.append(divContactContent);

    return divContact;
}