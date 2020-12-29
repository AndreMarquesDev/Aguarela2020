import React, { FC, useContext } from 'react';
import Image from 'next/image';
import TextsContext from './context/TextsContext';
import Title from './Title';

const BrandsList: FC = () => {
    const { texts } = useContext(TextsContext);

    return (
        <>
            <section className="container">
                <div className="wrapper genericMargins">
                    <Title colored text={texts.myNetwork} />

                    <ul>
                        <li>
                            <a href="https://www.instagram.com/avocadohouselisbon" rel="noreferrer" target="_blank">
                                <Image
                                    alt="avocado logo"
                                    height={150}
                                    src="/images/brandLogos/avocado.jpg"
                                    width={150}
                                />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.pernod-ricard.com" rel="noreferrer" target="_blank">
                                <Image
                                    alt="pernod logo"
                                    height={150}
                                    src="/images/brandLogos/pernod.jpg"
                                    width={150}
                                />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/tudonatjela" rel="noreferrer" target="_blank">
                                <Image
                                    alt="tjela logo"
                                    height={150}
                                    src="/images/brandLogos/tjela.jpg"
                                    width={150}
                                />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/guacamolegmg" rel="noreferrer" target="_blank">
                                <Image
                                    alt="guacamole logo"
                                    height={150}
                                    src="/images/brandLogos/guacamole.jpg"
                                    width={150}
                                />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/kaffeehaus_lisboa" rel="noreferrer" target="_blank">
                                <Image
                                    alt="kaffeehaus logo"
                                    height={150}
                                    src="/images/brandLogos/kaffeehaus.jpg"
                                    width={150}
                                />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/tasteofindiapt" rel="noreferrer" target="_blank">
                                <Image
                                    alt="taste of india logo"
                                    height={150}
                                    src="/images/brandLogos/tasteofindia.jpg"
                                    width={150}
                                />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/icecreamroll.pt" rel="noreferrer" target="_blank">
                                <Image
                                    alt="icecream roll logo"
                                    height={150}
                                    src="/images/brandLogos/icecreamroll.jpg"
                                    width={150}
                                />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/bebemarialimao" rel="noreferrer" target="_blank">
                                <Image
                                    alt="marialimao logo"
                                    height={150}
                                    src="/images/brandLogos/marialimao.jpg"
                                    width={150}
                                />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/biergarten.jardimdacerveja" rel="noreferrer" target="_blank">
                                <Image
                                    alt="biergarten logo"
                                    height={150}
                                    src="/images/brandLogos/biergarten.jpg"
                                    width={150}
                                />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/trattoriadipaola" rel="noreferrer" target="_blank">
                                <Image
                                    alt="trattoria logo"
                                    height={150}
                                    src="/images/brandLogos/trattoria.jpg"
                                    width={150}
                                />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/aamigaesteticista" rel="noreferrer" target="_blank">
                                <Image
                                    alt="a amiga esteticista logo"
                                    height={150}
                                    src="/images/brandLogos/amiga-esteticista.jpg"
                                    width={150}
                                />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/ricemedeli" rel="noreferrer" target="_blank">
                                <Image
                                    alt="rice me deli logo"
                                    height={150}
                                    src="/images/brandLogos/ricemedeli.jpg"
                                    width={150}
                                />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com/4patasde5estrelas" rel="noreferrer" target="_blank">
                                <Image
                                    alt="4 patas de 5 estrelas logo"
                                    height={150}
                                    src="/images/brandLogos/4patas.jpg"
                                    width={150}
                                />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/ricemerestaurante" rel="noreferrer" target="_blank">
                                <Image
                                    alt="rice me logo"
                                    height={150}
                                    src="/images/brandLogos/riceme.jpg"
                                    width={150}
                                />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/becomeluminouscoaching" rel="noreferrer" target="_blank">
                                <Image
                                    alt="luminous logo"
                                    height={150}
                                    src="/images/brandLogos/luminous.jpg"
                                    width={150}
                                />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/madmarycuisine" rel="noreferrer" target="_blank">
                                <Image
                                    alt="mad mary logo"
                                    height={150}
                                    src="/images/brandLogos/madmary.jpg"
                                    width={150}
                                />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/company/harpoon-lda" rel="noreferrer" target="_blank">
                                <Image
                                    alt="harpoon logo"
                                    height={150}
                                    src="/images/brandLogos/harpoon.jpg"
                                    width={150}
                                />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/bovinelisboa" rel="noreferrer" target="_blank">
                                <Image
                                    alt="bovine logo"
                                    height={150}
                                    src="/images/brandLogos/bovine.jpg"
                                    width={150}
                                />
                            </a>
                        </li>
                    </ul>
                </div>
            </section>

            <style jsx>
                {`
                    @import './styles/_vars.scss';

                    .container {
                        background: $white;

                        ul {
                            display: flex;
                            flex-wrap: wrap;

                            li {
                                width: calc(100% / 6);
                                text-align: center;
                                padding: 5rem;
                                transition: transform 0.15s linear;

                                &:hover {
                                    transform: scale(1.05);
                                }

                                @include tablet {
                                    width: calc(100% / 4);
                                }

                                @include mobile {
                                    width: calc(100% / 3);
                                }
                            }
                        }
                    }
                `}
            </style>
        </>
    );
};

export default BrandsList;
