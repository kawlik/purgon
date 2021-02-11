import React from 'react';

import icon_1 from '../../img/icon_1.png';
import icon_2 from '../../img/icon_2.png';

/*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   */

const SocialMedia = () => {

    /*   *   *   *   *   *   *   *   *   *   */
    
    return(
    <article className='offer container'>
    

        <div className='row m-5'>
            <h2 className='col-md-6 display-4 title '>Social Media</h2>
        </div>


        <div className='row m-5'>
            <p  className='col-12 paragraph lead'>W Polsce i na świecie z dnia na dzień pojawia się coraz większa liczba użytkowników Mediów Społecznościowych, a przez to obecność w nich jest wręcz obowiązkowa! Wykorzystamy nieograniczone możliwości Facebooka, Instagrama i Linkedina, aby docierać do Twoich klientów. Przygotujemy dla Ciebie strategię marketingową dzięki, której zwiększysz sprzedaż i rozpoznawalność swojej marki.</p>
        </div>


        <div className='row m-5'>


            <div className='col-lg-8 list'>
                <h2>Jak działamy?</h2>
                <ol className='lead'>
                    <li>Analizujemy branżę i tworzymy strategię.</li>
                    <li>Poprawiamy ewentualne błędy na profilach.</li>
                    <li>Tworzymy posty i angażujące treści.</li>
                    <li>Realizujemy płatne kampanie reklamowe.</li>
                    <li>Dostarczamy miesięczne raporty.</li>
                </ol>
            </div>

            <div className='col-lg-4 list'><img className='img-fluid mx-auto d-block' src={icon_1} alt='icon'/></div>

        </div>


        <div className='row m-5'>

            <div className='col-lg-4 list'><img className='img-fluid mx-auto d-block ' src={icon_2} alt='icon'/></div>

            <div className='col-lg-8 list'>
                <h3>Jakie są zalety obecności w Mediach Społecznościowych?</h3>
                <ol className='lead'>
                    <li>Zwiększona rozpoznawalność marki.</li>
                    <li>Zwiększenie sprzedaży.</li>
                    <li>Lepszy kontakt z klientami.</li>
                </ol>
            </div>

        </div>



        <div className='row m-5'>

            <h3>Cennik</h3>

            <div className='col-sm-6 col-lg-4 price'></div>

            <div className='col-sm-6 col-lg-4 price'></div>

            <div className='col-sm-6 col-lg-4 price'></div>

        </div>


    </article>
)};

/*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   */

export default SocialMedia;