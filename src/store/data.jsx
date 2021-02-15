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
            img: img_01,
        },
        
        
        services: {
            title: 'Jak działamy?',
            elems: [
                'Analizujemy branżę i tworzymy strategię',
                'Poprawiamy ewentualne błędy na profilach',
                'Tworzymy posty i angażujące treści',
                'Realizujemy płatne kampanie reklamowe',
            ],
        },
        
        
        quality: {
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
            body: 'Strona internetowa to często pierwszy kontakt klienta z Twoją firmą. Profesjonalna witryna zachęci go do skorzystania z Twoich usług. Tworzymy od zera i modernizujemy już istniejące strony internetowe.',
            img: img_02,
        },
        
        
        services: {
            title: 'Jak działamy?',
            elems: [
                'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            ],
        },
        
        
        quality: {
            title: 'Zalety posiadania strony internetowej?',
            elems: [
                '?',
                '?',
                '?',
            ],
        },
        
        
        prices: [
            {
                amount: '1500 zł',
                services: ['strona do 5 sekcji', 'galeria zdjęć (wraz z ich optymalizacją)', 'podpięcie map Google', 'formularz kontaktowy', 'brak podstron', 'aktywne numery telefonów', 'prosta, uniwersalna polityka prywatności', 'ustawione informacje o cookies',],
            },
            {
                amount: '2500 zł',
                services: ['wszystkie opcje jak w stronie wizytówce', 'podstrony', 'kalendarz zajęć (google)', 'lista obiektów', 'portfolio', 'indywidualne dostosowania',],
            },
        ],
    },

    googleAds: {
        entry: {
            title: 'Reklamy Google',
            body: 'Kampanie Google Ads należą do jednych z najefektowniejszych kampanii marketingowych. Dokładnie analizujemy ofertę i efektywnie wykorzystujemy ustalony budżet, dostosowując przekaz do grupy odbiorców, która jest rzeczywiście zainteresowana danym produktem lub usługą - czyli Twoich potencjalnych klientów. Dodatkową korzyścią jest pełna mierzalność efektów dzięki, którym cały czas mamy pełną kontrolę nad tym co się dzieje. Po zakończeniu kampanii przygotowywujemy raport i dokładnie analizujemy nasze działania.',
            img: img_03,
        },
        
        
        services: {
            title: 'Jak działamy?',
            elems: [
                'Analizujemy działalność i tworzymy strategię',
                'Przygotowujemy materiały reklamowe',
                'Tworzymy posty i angażujące treści',
                'Realizujemy wyznaczone cele ciągle kontrolując efekty',
            ],
        },
        
        
        quality: {
            title: 'Zalety kampanii Google Ads?',
            elems: [
                'Szybkie efekty',
                'Pełna mierzalność i kontrola',
                'Wiele możliwości dotarcia do klienta',
            ],
        },
        
        
        prices: [
            {
                amount: '??? zł',
                services: ['?', '?', '?',],
            },
            {
                amount: '??? zł',
                services: ['?', '?', '?',],
            },
            {
                amount: '??? zł',
                services: ['?', '?', '?',],
            },
        ],
    },

    positioning: {
        entry: {
            title: 'Pozycjonowanie Stron',
            body: 'SEO to działania, które mają na celu zwiększenie zauważalności twojej strony w wyszukiwarkach internetowych. Kompleksowo zajmujemy się wszystkimi aspektami technicznymi dzięki, którym Twoja witryna zostanie zauważona i pojawi się wysoko w przeglądarkach.',
            img: img_04,
        },
        
        
        services: {
            title: 'Jak działamy?',
            elems: [
                'Ustalamy cel i strategię marketingową',
                'Tworzymy specjalistyczny audyt',
                'Realizujemy ustalone cele',
                'Dostarczamy miesięczne raporty',
            ],
        },
        
        
        quality: {
            title: 'Zalety pozycjonowania stron?',
            elems: [
                'Wzrost odwiedzin strony przez potencjalnych klientów',
                'Zwiększona rozpoznawalność',
                'Przewaga nad konkurencją',
            ],
        },
        
        
        prices: [
            {
                amount: '699 zł',
                services: ['pełny raport wykrytych błędów', 'propozycja strategii pozycjonowania', 'analiza konkurencji',],
            },
            {
                amount: '1199 zł',
                services: ['pełny audyt i poprawa działania strony pod względem technicznym', 'zwiększenie zasięgów', 'zdobywanie nowych obserwujących', 'promowanie postów',],
            },
        ],
    },

    graphics: {
        entry: {
            title: 'Projekty graficzne',
            body: '“Jak Cię widzą - tak Cię piszą”, a jakie masz grafiki - takie masz wyniki.Nasze projekty graficzne zapadają w pamięć i wzbudzają zainteresowanie. To oryginalne i pomysłowe prace wykonane według najnowszych trendów.',
            img: img_05,
        },
        
        
        services: {
            title: 'Jak działamy?',
            elems: [
                'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            ],
        },
        
        
        quality: {
            title: 'Zalety ???',
            elems: [
                '?',
                '?',
                '?',
            ],
        },
        
        
        prices: [
            {
                amount: '??? zł',
                services: ['?', '?', '?',],
            },
            {
                amount: '??? zł',
                services: ['?', '?', '?',],
            },
            {
                amount: '??? zł',
                services: ['?', '?', '?',],
            },
        ],
    },

    photoViedo: {
        entry: {
            title: 'Video i zdjęcia',
            body: 'Efektowny spot reklamowy to skuteczny sposób na pozyskanie klienta i promocję marki. Produkujemy wysokiej jakości materiały video oraz wykonujemy sesje zdjęciowe.',
            img: img_06,
        },
        
        
        services: {
            title: 'Jak działamy?',
            elems: [
                'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            ],
        },
        
        
        quality: {
            title: 'Zalety ???',
            elems: [
                '?',
                '?',
                '?',
            ],
        },
        
        
        prices: [
            {
                amount: '??? zł',
                services: ['?', '?', '?',],
            },
            {
                amount: '??? zł',
                services: ['?', '?', '?',],
            },
            {
                amount: '??? zł',
                services: ['?', '?', '?',],
            },
        ],
    },

    accessory: {
        entry: {
            title: 'Akcesoria Marketingowe',
            body: 'Oferujemy różnorodne akcesoria marketingowe, w tym m.in. plakaty, ulotki, roll-upy, koszulki, kubki, długopisy. Są to wysokiej jakości gadżety promocyjne, które wykorzystać można podczas kampanii reklamowych lub jako upominki dla klientów.',
            img: img_07,
        },
        
        
        services: {
            title: 'Jak działamy?',
            elems: [
                'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            ],
        },
        
        
        quality: {
            title: 'Zalety ???',
            elems: [
                '?',
                '?',
                '?',
            ],
        },
        
        
        prices: [
            {
                amount: '??? zł',
                services: ['?', '?', '?',],
            },
            {
                amount: '??? zł',
                services: ['?', '?', '?',],
            },
            {
                amount: '??? zł',
                services: ['?', '?', '?',],
            },
        ],
    }
};

/*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   */

export { contact, offer, pages, social };