import steakSandwichImage from './images/steak-sandwich.jpg';

export function createAboutDivision() {
    const divAbout = document.createElement('div');
    divAbout.classList.add('about');

    const h2 = document.createElement('h2');
    h2.textContent = 'About';

    const divAboutContent = document.createElement('div');
    divAboutContent.classList.add('about-content');

    const divAboutImage = document.createElement('div');
    divAboutImage.classList.add('about-image');

    const img = new Image();
    img.src = steakSandwichImage;
    img.alt = 'Steak sandwich';

    const divAboutText = document.createElement('div');
    divAboutText.classList.add('about-text');

    const h3 = document.createElement('h3');
    h3.textContent = `Slider's`;

    const p1 = document.createElement('p');
    p1.textContent = `At the point when Slider's organizer Tony ventured off 
                    the shorelines of Oahu following a multi-day of surfing with 
                    his Navy pals in the mid-60s, he did what worked out easily for him. 
                    He went hunting down a delicious burger, a hot container of fries, 
                    and a virus drink.`;

    const p2 = document.createElement('p');
    p2.textContent = `After twenty years, in 1982, it was that feeling of peace and fulfillment 
                    he was attempting to reproduce when he took a little piece of 
                    the Slider's and thudded it down right in 
                    the territory of Southern California.
                    Today, Slider's still is consistent with Tony’s unique experience 
                    and his unique vision.`;

    const p3 = document.createElement('p');
    p3.textContent = `Despite everything, we hold fast to the fundamental rationality that new sustenance, 
                    well-disposed administration, and a laid-back air is the ideal end to a hard day of 
                    work or play. We trust you taste it in each chomp.`;

    const p4 = document.createElement('p');
    p4.textContent = `Furthermore, we trust that whether you’re a ravenous surfer or an occupied salesman, 
                    you stroll into Slider's and state to yourself, as Tony did those 
                    numerous years back, `;

    const q = document.createElement('q');
    q.textContent = `Ahh…this is the place I need to be.`;

    p4.append(q);

    divAboutText.append(h3);
    divAboutText.append(p1);
    divAboutText.append(p2);
    divAboutText.append(p3);
    divAboutText.append(p4);

    divAboutImage.append(img);

    divAboutContent.append(divAboutImage);
    divAboutContent.append(divAboutText);

    divAbout.append(h2);
    divAbout.append(divAboutContent);

    return divAbout;
}