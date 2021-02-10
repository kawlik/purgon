import React from 'react';

import PageBanner from '../component/PageBanner';
import SimpleCard from '../component/SimpleCard';

import icon from '../img/logo_min.png';
import icon_1 from '../img/icon_1.png';
import icon_2 from '../img/icon_2.png';
import icon_3 from '../img/icon_3.png';
import icon_4 from '../img/icon_4.png';
import icon_5 from '../img/icon_5.png';
import icon_6 from '../img/icon_6.png';
import icon_7 from '../img/icon_7.png';

/*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   */

const cardsSimple = [
    {id: 1, title: 'Gwarancję skuteczności', body: 'Niezależnie od tego jak ambitne cele biznesowe Ci przyświecają, z nami zrealizujesz je w całości.', icon: icon,},
    {id: 2, title: 'Wsparcie zawodowców', body: 'Bogate know-how przekuwamy na Twoje wyniki biznesowe. Jesteśmy doświadczonym zespołem, który zna tajniki marketingu i jest w stanie znaleźć remedium na każdy problem.', icon: icon,},
    {id: 3, title: 'Rozwiązania szyte na miarę', body: 'Nasze działania dostosowujemy do Twoich potrzeb oraz budżetu, wykorzystując narzędzia, które pozwalają skutecznie dotrzeć do grupy docelowej.', icon: icon,},
    {id: 4, title: 'Nieszablonowe podejście', body: 'Stale szukamy innowacyjnych rozwiązań, które pozwolą Tobie wyróżnić się na tle innych firm i osiągnąć przewagę konkurencyjną. Skontaktuj się z nami i dołącz do grona klientów, którzy przekonali się, że marketing można robić lepiej. Sprzedawaj skuteczniej i działaj online!', icon: icon,},
];

const cardsService = [
    {id: 1, title: 'Social Media', body: 'Stały kontakt z klientami, budowanie zaufania oraz poszerzanie grona odbiorców - to wszystko możesz osiągnąć działając w mediach społecznościowych. Tworzymy atrakcyjne wpisy, które przyciągają klienta i zwiększają zapytania ofertowe.', icon: icon_1,},
    {id: 2, title: 'Strony Internetowe', body: 'to często pierwszy kontakt klienta z Twoją firmą. Profesjonalna witryna zachęci go do skorzystania z Twoich usług. Tworzymy od zera i modernizujemy już istniejące strony internetowe. Dokładnie analizujemy potrzeby klienta i dostosowujemy do nich nasze projekty.', icon: icon_2,},
    {id: 3, title: 'Reklamy Google', body: 'Google Ads to gwarancja zwiększenia wizyt na stronie internetowej, które przekładają się na wzrost sprzedaży. Efektywnie wykorzystujemy ustalony budżet, dostosowując przekaz do grupy odbiorców, która jest rzeczywiście zainteresowana danym produktem lub usługą.', icon: icon_3,},
    {id: 4, title: 'Pozycjonowanie stron', body: 'Działania SEO pomagają Twoim potencjalnym klientom znaleźć Twoją firmę w wyszukiwarkach internetowych. Działamy kompleksowo – zajmujemy się każdym aspektem, który wpływa na pozycję strony www w wynikach wyszukiwania.', icon: icon_4,},
    {id: 5, title: 'Projekty graficzne', body: '“Jak Cię widzą - tak Cię piszą”, a jakie masz grafiki - takie masz wyniki. Nasze projekty graficzne zapadają w pamięć i wzbudzają zainteresowanie. To oryginalne i pomysłowe prace wykonane według najnowszych trendów.', icon: icon_5,},
    {id: 6, title: 'Video i zdjęcia', body: 'Efektowny spot reklamowy to skuteczny sposób na pozyskanie klienta i promocję marki. Produkujemy wysokiej jakości materiały video oraz wykonujemy sesje zdjęciowe.', icon: icon_6,},
    {id: 7, title: 'Akcesoria Marketingowe', body: 'Oferujemy różnorodne akcesoria marketingowe, w tym m.in. plakaty, ulotki roll-upy, koszulki, kubki, długopisy. To wysokiej jakości gadżety promocyjne, które wykorzystać można podczas kampanii reklamowych lub jako upominki dla klientów.', icon: icon_7,},
];

const listServise = [
    'Zwiększamy sprzedaż i ruch na stronie internetowej',
    'Pozyskujemy nowych klientów',
    'Pomagamy w zbudowaniu wizerunku eksperta w sieci',
    'Poprawiamy widoczność oferty w sieci',
    'Aktywujemy klientów',
    'Usprawniamy procesy zakupowe.',
];

/*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   */

const Home = () => {

    const allSimpleCards = cardsSimple.map(elem => <SimpleCard key={elem.id} type='simple-card animEaseIn' title={elem.title} body={elem.body} icon={elem.icon} />);

    const allServiceCards = cardsService.map(elem => <SimpleCard key={elem.id} type='service-card animEaseIn' title={elem.title} body={elem.body} icon={elem.icon} />);

    const allServices = listServise.map((elem, index) => <li className='animEaseIn' key={index}>{elem}</li>)

    /*   *   *   *   *   *   *   *   *   *   */
    
    return(
    <>

        <PageBanner/>

        <section className='home'>
        <div className='entry-text animEaseIn'>
            Potrzebujesz <span>marketingu</span>, który wyróżni Cię na tle <span>konkurencji?</span> Chcesz <span>zaistnieć</span> w sieci, a może działasz <span>online</span>, jednak nie przynosi to widocznych <span>efektów?</span> Nasza agencja marketingowa to odpowiedź na <span>Twoje potrzeby.</span> Sprawdź, co możesz <span>zyskać współpracując z nami!</span>
        </div>

        <div className='simple-cards'>
            {allSimpleCards}
        </div>

        <div className='simple-list'>
            <h2 className='animEaseIn'>Naszymi działaniami:</h2>
            <ul>{allServices}</ul>
        </div>

        <div className='service-cards'>

            <div className='card-row'>{allServiceCards.slice(0, 3)}</div>

            <div className='card-row'>{allServiceCards.slice(3, 5)}</div>

            <div className='card-row'>{allServiceCards.slice(5, 7)}</div>

        </div>
        </section>
    </>
)};

/*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   */

export default Home;