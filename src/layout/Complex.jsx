import React, { useEffect } from 'react';

import { FaArrowAltCircleDown } from 'react-icons/fa';
import { RiPagesFill, RiPencilRuler2Line, RiToolsFill } from 'react-icons/ri';

import ParticlesBoubles from '../component/ParticlesBoubles';

import ScrollAnim from '../script/ScrollAnim';

import img_dog from '../img/dog.png';

/*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   */

const Complex = () => {

    const scroll = () => {
        window.scrollTo(0, window.innerHeight + 50);
    }

    /*   *   *   *   *   *   *   *   *   *   */

    useEffect(() => {

        const easeIn = new ScrollAnim('.animEaseIn');
        easeIn.setUp('easeIn 1s ease-in-out 1 0.2s normal both');

    }, [])

    /*   *   *   *   *   *   *   *   *   *   */
    
    return(
    <article className='complex'>


        <ParticlesBoubles/>


        <div className='entry'>
            <div className='elem'><h2 className='right'>Pełna obsługa marketingowa - co to takiego?</h2></div>
            <div className='elem'><h2 className='left'>Dobra patrz co dla Ciebie mam!</h2></div>
            <div className='elem img'>
                <img src={img_dog} alt='happy dog'/>
                <button onClick={() => scroll()}><FaArrowAltCircleDown/></button>
            </div>
        </div>

        <section className='grided'>

            <div className='elem __1'>
                <h3>Strategia marketingowa</h3>
                <p className='animEaseIn'>Dobrze przemyślana taktyka to fundament sukcesu! Na początku stworzymy dla Ciebie strategię marketingową dostosowaną do Twoich potrzeb, wdrożymy ją i będziemy stale monitorować przebieg oraz rezultaty kampani.</p>
            </div>


            <div className='elem __2'>
                <h3>Kampanie reklamowe</h3>
                <p className='animEaseIn'>Kampanie Reklamowe to skuteczne wdrożenie naszych planów w życie! Dzięki reklamom na Facebooku, Instagramie, LinkedInie czy Pintereście dotrzemy do tych klientów, którzy faktycznie są zainteresowani Twoimi usługami lub produktami!</p>
            </div>


            <div className='elem __3'>
                <h3>Wizerunek i świadomość marki</h3>
                <p className='animEaseIn'>Sprzedaż sprzedażą, ale klient musi mieć pewność, że warto u Ciebie kupić czy też z Tobą współpracować. Z najwyższą starannością zadbamy o to, żeby nasi towarzysze (klienci) z chęcią odwiedzali Twoją stronę i nawiązywali kontakt! Będziemy odpowiedzialni za:</p>
                <ul>
                    <li className='animEaseIn'>Tworzenie i publikowanie postów!</li>
                    <li className='animEaseIn'>Pozyskiwanie nowych fanów!</li>
                    <li className='animEaseIn'>Zwiększenie zasięgów publikowanych treści!</li>
                </ul>
                <p className='animEaseIn'>Oczywiście wszystko zgodnie z wcześniejszymi ustaleniami!</p>
            </div>


            <div className='elem __4'>
                <h3>Opieka nad stroną internetową</h3>
                <p className='animEaseIn'>Jeśli zależy Ci na wygodzie Twoich klientów i nie życzysz sobie żadnych problemów związanych z Twoją stroną internetową. Trafiłeś w dobre ręce! Cały zespół ludzi zaopiekuje się tą internetową wizytówką - zadbamy o WSZYSTKIE aspekty techniczne, dodatkowo jeśli wpadniemy na ciekawą modernizację damy znać - nie jesteś sam.</p>
            </div>


            <div className='elem __5'>
                <h3>Raporty</h3>
                <p className='animEaseIn'>Ty i ja wiemy, że czasami najlepszy plan może nie wypalić. Na szczęście nawet na to znajdzie się rozwiązanie! Podczas wykonywanych działań jesteśmy ciągle w kontakcie i nie mam tutaj na myśli tylko Ciebie i mnie, ale również Twoich klientów! Myślisz, że żartuję? Raporty pozwalają nam wprowadzać zmiany zgodnie z upodobaniami klientów. Dzięki nim widzimy co trzeba zmienić lub dodać. Optymalizujemy nasze działania i na 1 000 000% wykorzystamy potencjał reklamowy!</p>
                <p className='animEaseIn'>W reklamie jak w wojsku - Ty jesteś generałem ja pułkownikiem. Zdam Ci raport z wykonywanych działań oraz będę odpowiedzialny za powodzenie naszej misji!</p>
            </div>


            <div className='elem __6'>
                <h3>Oprawa graficzna</h3>
                <p className='animEaseIn'>Wszyscy kochamy piękne obrazy. Nie tylko krytycy literatcy lubią oglądać piękne grafiki, ale również Twoi klienci! Na to również się przygotowaliśmy! Tworzymy i projektujemy grafiki reklamowe, na potrzeby strony, na banery. Tworzymy treści, hasła reklamowe i wiele innych jeśli tylko ich potrzebujesz!</p>
            </div>

        </section>

        <footer className='bonus'>

            <h3>Dodatkowo otrzymasz od nas <span>GRATIS</span></h3>

            <ul className='list'>

                <li><RiPencilRuler2Line/><span>Logo</span></li>

                <li><RiPagesFill/><span>3 Landing Page na potrzeby kampanii</span></li>

                <li><RiToolsFill/><span>Wszelkie dodatkowe działania z naszej strony, które mogą pomóc w rozwoju całego projektu od strony marketingowej (Research, analiza konkurencji itd.)</span></li>

            </ul>

            <h3>Podsumowując to wszystko w jednym zdaniu: <span>“Twój własny oddział do spraw marketingu!”</span></h3>

        </footer>

    </article>
)};

/*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   */

export default Complex;