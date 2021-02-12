import img_01 from '../img/img_01.png';
import img_02 from '../img/img_02.png';
import img_03 from '../img/img_03.png';
import img_04 from '../img/img_04.png';
import img_05 from '../img/img_05.png';
import img_06 from '../img/img_06.png';
import img_07 from '../img/img_07.png';

/*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   */


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

const offer = {

    socialMedia: {
    
        entry: {
            title: 'Social Media',
            body: 'W Polsce i na świecie z dnia na dzień pojawia się coraz większa liczba użytkowników Mediów Społecznościowych, a przez to obecność w nich jest wręcz obowiązkowa! Wykorzystamy nieograniczone możliwości Facebooka, Instagrama i Linkedina, aby docierać do Twoich klientów. Przygotujemy dla Ciebie strategię marketingową dzięki, której zwiększysz sprzedaż i rozpoznawalność swojej marki.',
            img_01: img_01,
        },
        
        
        list_1: {
            title: 'Jak działamy?',
            elems: [
                'Analizujemy branżę i tworzymy strategię',
                'Poprawiamy ewentualne błędy na profilach',
                'Tworzymy posty i angażujące treści',
                'Realizujemy płatne kampanie reklamowe',
                'Dostarczamy miesięczne raporty',
            ],
        },
        
        
        list_2: {
            title: 'Zalety obecności w Social Media?',
            elems: [
                'Zwiększona rozpoznawalność marki',
                'Zwiększenie sprzedaży',
                'Lepszy kontakt z klientami',
            ],
        },
        
        
        prices: [
            {
                color: 'green',
                amount: '799 zł',
                services: ['prowadzenie Facebook lub Instagram', 'przygotowanie strategii marketingowej', 'tworzenie i publikacja treści', 'zwiększanie zainteresowania',],
            },
            {
                color: 'yellow',
                amount: '1499 zł',
                services: ['prowadzenie Facebook i Instagram', 'zwiększenie zasięgów', 'zdobywanie nowych obserwujących', 'promowanie postów',],
            },
            {
                color: 'blue',
                amount: '2499 zł',
                services: ['prowadzenie Facebook i Instagram', 'pełna obsługa mediów społecznościowych', 'kampanie reklamowe', 'dodatkowa możliwość prowadzenia LinkedIn i Pinterest',],
            },
        ],
    },

    websites: {
    
        entry: {
            title: 'Strony Internetowe',
            body: 'W Polsce i na świecie z dnia na dzień pojawia się coraz większa liczba użytkowników Mediów Społecznościowych, a przez to obecność w nich jest wręcz obowiązkowa! Wykorzystamy nieograniczone możliwości Facebooka, Instagrama i Linkedina, aby docierać do Twoich klientów. Przygotujemy dla Ciebie strategię marketingową dzięki, której zwiększysz sprzedaż i rozpoznawalność swojej marki.',
            img_01: img_02,
        },
        
        
        list_1: {
            title: 'Jak działamy?',
            elems: [
                'Analizujemy branżę i tworzymy strategię',
                'Poprawiamy ewentualne błędy na profilach',
                'Tworzymy posty i angażujące treści',
                'Realizujemy płatne kampanie reklamowe',
                'Dostarczamy miesięczne raporty',
            ],
        },
        
        
        list_2: {
            title: 'Zalety obecności w Social Media?',
            elems: [
                'Zwiększona rozpoznawalność marki',
                'Zwiększenie sprzedaży',
                'Lepszy kontakt z klientami',
            ],
        },
        
        
        prices: [
            {
                color: 'green',
                amount: '799 zł',
                services: ['prowadzenie Facebook lub Instagram', 'przygotowanie strategii marketingowej', 'tworzenie i publikacja treści', 'zwiększanie zainteresowania',],
            },
            {
                color: 'yellow',
                amount: '1499 zł',
                services: ['prowadzenie Facebook i Instagram', 'zwiększenie zasięgów', 'zdobywanie nowych obserwujących', 'promowanie postów',],
            },
            {
                color: 'blue',
                amount: '2499 zł',
                services: ['prowadzenie Facebook i Instagram', 'pełna obsługa mediów społecznościowych', 'kampanie reklamowe', 'dodatkowa możliwość prowadzenia LinkedIn i Pinterest',],
            },
        ],
    },

    googleAds: {
        entry: {
            title: 'Reklamy Google',
            body: 'W Polsce i na świecie z dnia na dzień pojawia się coraz większa liczba użytkowników Mediów Społecznościowych, a przez to obecność w nich jest wręcz obowiązkowa! Wykorzystamy nieograniczone możliwości Facebooka, Instagrama i Linkedina, aby docierać do Twoich klientów. Przygotujemy dla Ciebie strategię marketingową dzięki, której zwiększysz sprzedaż i rozpoznawalność swojej marki.',
            img_01: img_03,
        },
        
        
        list_1: {
            title: 'Jak działamy?',
            elems: [
                'Analizujemy branżę i tworzymy strategię',
                'Poprawiamy ewentualne błędy na profilach',
                'Tworzymy posty i angażujące treści',
                'Realizujemy płatne kampanie reklamowe',
                'Dostarczamy miesięczne raporty',
            ],
        },
        
        
        list_2: {
            title: 'Zalety obecności w Social Media?',
            elems: [
                'Zwiększona rozpoznawalność marki',
                'Zwiększenie sprzedaży',
                'Lepszy kontakt z klientami',
            ],
        },
        
        
        prices: [
            {
                color: 'green',
                amount: '799 zł',
                services: ['prowadzenie Facebook lub Instagram', 'przygotowanie strategii marketingowej', 'tworzenie i publikacja treści', 'zwiększanie zainteresowania',],
            },
            {
                color: 'yellow',
                amount: '1499 zł',
                services: ['prowadzenie Facebook i Instagram', 'zwiększenie zasięgów', 'zdobywanie nowych obserwujących', 'promowanie postów',],
            },
            {
                color: 'blue',
                amount: '2499 zł',
                services: ['prowadzenie Facebook i Instagram', 'pełna obsługa mediów społecznościowych', 'kampanie reklamowe', 'dodatkowa możliwość prowadzenia LinkedIn i Pinterest',],
            },
        ],
    },

    positioning: {
        entry: {
            title: 'Pozycjonowanie Stron',
            body: 'W Polsce i na świecie z dnia na dzień pojawia się coraz większa liczba użytkowników Mediów Społecznościowych, a przez to obecność w nich jest wręcz obowiązkowa! Wykorzystamy nieograniczone możliwości Facebooka, Instagrama i Linkedina, aby docierać do Twoich klientów. Przygotujemy dla Ciebie strategię marketingową dzięki, której zwiększysz sprzedaż i rozpoznawalność swojej marki.',
            img_01: img_04,
        },
        
        
        list_1: {
            title: 'Jak działamy?',
            elems: [
                'Analizujemy branżę i tworzymy strategię',
                'Poprawiamy ewentualne błędy na profilach',
                'Tworzymy posty i angażujące treści',
                'Realizujemy płatne kampanie reklamowe',
                'Dostarczamy miesięczne raporty',
            ],
        },
        
        
        list_2: {
            title: 'Zalety obecności w Social Media?',
            elems: [
                'Zwiększona rozpoznawalność marki',
                'Zwiększenie sprzedaży',
                'Lepszy kontakt z klientami',
            ],
        },
        
        
        prices: [
            {
                color: 'green',
                amount: '799 zł',
                services: ['prowadzenie Facebook lub Instagram', 'przygotowanie strategii marketingowej', 'tworzenie i publikacja treści', 'zwiększanie zainteresowania',],
            },
            {
                color: 'yellow',
                amount: '1499 zł',
                services: ['prowadzenie Facebook i Instagram', 'zwiększenie zasięgów', 'zdobywanie nowych obserwujących', 'promowanie postów',],
            },
            {
                color: 'blue',
                amount: '2499 zł',
                services: ['prowadzenie Facebook i Instagram', 'pełna obsługa mediów społecznościowych', 'kampanie reklamowe', 'dodatkowa możliwość prowadzenia LinkedIn i Pinterest',],
            },
        ],
    },

    graphics: {
        entry: {
            title: 'Projekty graficzne',
            body: 'W Polsce i na świecie z dnia na dzień pojawia się coraz większa liczba użytkowników Mediów Społecznościowych, a przez to obecność w nich jest wręcz obowiązkowa! Wykorzystamy nieograniczone możliwości Facebooka, Instagrama i Linkedina, aby docierać do Twoich klientów. Przygotujemy dla Ciebie strategię marketingową dzięki, której zwiększysz sprzedaż i rozpoznawalność swojej marki.',
            img_01: img_05,
        },
        
        
        list_1: {
            title: 'Jak działamy?',
            elems: [
                'Analizujemy branżę i tworzymy strategię',
                'Poprawiamy ewentualne błędy na profilach',
                'Tworzymy posty i angażujące treści',
                'Realizujemy płatne kampanie reklamowe',
                'Dostarczamy miesięczne raporty',
            ],
        },
        
        
        list_2: {
            title: 'Zalety obecności w Social Media?',
            elems: [
                'Zwiększona rozpoznawalność marki',
                'Zwiększenie sprzedaży',
                'Lepszy kontakt z klientami',
            ],
        },
        
        
        prices: [
            {
                color: 'green',
                amount: '799 zł',
                services: ['prowadzenie Facebook lub Instagram', 'przygotowanie strategii marketingowej', 'tworzenie i publikacja treści', 'zwiększanie zainteresowania',],
            },
            {
                color: 'yellow',
                amount: '1499 zł',
                services: ['prowadzenie Facebook i Instagram', 'zwiększenie zasięgów', 'zdobywanie nowych obserwujących', 'promowanie postów',],
            },
            {
                color: 'blue',
                amount: '2499 zł',
                services: ['prowadzenie Facebook i Instagram', 'pełna obsługa mediów społecznościowych', 'kampanie reklamowe', 'dodatkowa możliwość prowadzenia LinkedIn i Pinterest',],
            },
        ],
    },

    photoViedo: {
        entry: {
            title: 'Video i zdjęcia',
            body: 'W Polsce i na świecie z dnia na dzień pojawia się coraz większa liczba użytkowników Mediów Społecznościowych, a przez to obecność w nich jest wręcz obowiązkowa! Wykorzystamy nieograniczone możliwości Facebooka, Instagrama i Linkedina, aby docierać do Twoich klientów. Przygotujemy dla Ciebie strategię marketingową dzięki, której zwiększysz sprzedaż i rozpoznawalność swojej marki.',
            img_01: img_06,
        },
        
        
        list_1: {
            title: 'Jak działamy?',
            elems: [
                'Analizujemy branżę i tworzymy strategię',
                'Poprawiamy ewentualne błędy na profilach',
                'Tworzymy posty i angażujące treści',
                'Realizujemy płatne kampanie reklamowe',
                'Dostarczamy miesięczne raporty',
            ],
        },
        
        
        list_2: {
            title: 'Zalety obecności w Social Media?',
            elems: [
                'Zwiększona rozpoznawalność marki',
                'Zwiększenie sprzedaży',
                'Lepszy kontakt z klientami',
            ],
        },
        
        
        prices: [
            {
                color: 'green',
                amount: '799 zł',
                services: ['prowadzenie Facebook lub Instagram', 'przygotowanie strategii marketingowej', 'tworzenie i publikacja treści', 'zwiększanie zainteresowania',],
            },
            {
                color: 'yellow',
                amount: '1499 zł',
                services: ['prowadzenie Facebook i Instagram', 'zwiększenie zasięgów', 'zdobywanie nowych obserwujących', 'promowanie postów',],
            },
            {
                color: 'blue',
                amount: '2499 zł',
                services: ['prowadzenie Facebook i Instagram', 'pełna obsługa mediów społecznościowych', 'kampanie reklamowe', 'dodatkowa możliwość prowadzenia LinkedIn i Pinterest',],
            },
        ],
    },

    accessory: {
        entry: {
            title: 'Akcesoria Marketingowe',
            body: 'W Polsce i na świecie z dnia na dzień pojawia się coraz większa liczba użytkowników Mediów Społecznościowych, a przez to obecność w nich jest wręcz obowiązkowa! Wykorzystamy nieograniczone możliwości Facebooka, Instagrama i Linkedina, aby docierać do Twoich klientów. Przygotujemy dla Ciebie strategię marketingową dzięki, której zwiększysz sprzedaż i rozpoznawalność swojej marki.',
            img_01: img_07,
        },
        
        
        list_1: {
            title: 'Jak działamy?',
            elems: [
                'Analizujemy branżę i tworzymy strategię',
                'Poprawiamy ewentualne błędy na profilach',
                'Tworzymy posty i angażujące treści',
                'Realizujemy płatne kampanie reklamowe',
                'Dostarczamy miesięczne raporty',
            ],
        },
        
        
        list_2: {
            title: 'Zalety obecności w Social Media?',
            elems: [
                'Zwiększona rozpoznawalność marki',
                'Zwiększenie sprzedaży',
                'Lepszy kontakt z klientami',
            ],
        },
        
        
        prices: [
            {
                color: 'green',
                amount: '799 zł',
                services: ['prowadzenie Facebook lub Instagram', 'przygotowanie strategii marketingowej', 'tworzenie i publikacja treści', 'zwiększanie zainteresowania',],
            },
            {
                color: 'yellow',
                amount: '1499 zł',
                services: ['prowadzenie Facebook i Instagram', 'zwiększenie zasięgów', 'zdobywanie nowych obserwujących', 'promowanie postów',],
            },
            {
                color: 'blue',
                amount: '2499 zł',
                services: ['prowadzenie Facebook i Instagram', 'pełna obsługa mediów społecznościowych', 'kampanie reklamowe', 'dodatkowa możliwość prowadzenia LinkedIn i Pinterest',],
            },
        ],
    }
};

/*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   */

export { contact, offer, pages, social };