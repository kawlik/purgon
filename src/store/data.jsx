const contact = {
    phone1: '+48 662 619 164',
    phone2: '+48 730 223 819',
    email: 'kontakt@pugon.pl',
};

/*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   */

const pages = {
    home: {id: 1, path: '', name: 'Home',},
    offer: {
        id: 2, path: 'oferta', name: 'Oferta',
        pages: [
            {path: 'social-media', name: 'Social media',},
            {path: 'strony-internetowe', name: 'Strony internetowe',},
            {path: 'google-ads', name: 'Google ADS',},
            {path: 'pozycjonowanie', name: 'Pozycjonowanie',},
            {path: 'grafika', name: 'Grafika',},
            {path: 'zdjecia-filmy', name: 'Zdjęcia i filmy',},
            {path: 'akcesoria', name: 'Akcesoria',},
        ],
    },
    complex: {id: 3, path: 'kompleksowa-obsługa', name: 'Kompleksowa obsługa',},
    contact: {id: 4, path: 'kontakt', name: 'Kontakt',},
};

/*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   */

const social = {
    facebook: 'https://www.facebook.com/pugonmedia',
    instagram: 'https://www.instagram.com',
    linkedin: 'https://www.linkedin.com',
};

/*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   */

export { contact, pages, social };