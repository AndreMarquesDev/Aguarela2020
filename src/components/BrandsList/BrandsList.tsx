import React, { useContext } from 'react';
import Image from 'next/image';
import { TextsContext } from '../context/TextsContext';
import { Title } from '../Title/Title';
import { brandsListSectionDataTestId } from '../../utils/dataTestIds';
import {
    avocadoInstagramUrl,
    pernodWebsiteUrl,
    tjelaInstagramUrl,
    guacamoleInstagramUrl,
    kaffeehausInstagramUrl,
    tasteOfIndiaInstagramUrl,
    icecreamRollInstagramUrl,
    mariaLimaoInstagramUrl,
    biergartenInstagramUrl,
    trattoriaInstagramUrl,
    aAmigaEsteticistaInstagramUrl,
    riceMeDeliInstagramUrl,
    quatroPatasDe5EstrelasInstagramUrl,
    riceMeInstagramUrl,
    luminousInstagramUrl,
    madMaryInstagramUrl,
    harpoonLinkedInUrl,
    bovineInstagramUrl,
} from '../../utils/urls';
import { mobileMediaQuery, tabletMediaQuery } from '../../styles/mediaQueries';

export const BrandsList = (): JSX.Element => {
    const { texts } = useContext(TextsContext);

    return (
        <>
            <section className="container" data-testid={brandsListSectionDataTestId}>
                <div className="wrapper genericMargins">
                    <Title colored text={texts.myNetwork} />

                    <ul>
                        <li>
                            <a
                                aria-label="avocado"
                                href={avocadoInstagramUrl}
                                rel="noreferrer"
                                target="_blank"
                            >
                                <Image
                                    alt="avocado logo"
                                    height={150}
                                    src="/images/brandLogos/avocado.jpg"
                                    width={150}
                                />
                            </a>
                        </li>
                        <li>
                            <a
                                aria-label="pernod"
                                href={pernodWebsiteUrl}
                                rel="noreferrer"
                                target="_blank"
                            >
                                <Image
                                    alt="pernod logo"
                                    height={150}
                                    src="/images/brandLogos/pernod.jpg"
                                    width={150}
                                />
                            </a>
                        </li>
                        <li>
                            <a
                                aria-label="tjela"
                                href={tjelaInstagramUrl}
                                rel="noreferrer"
                                target="_blank"
                            >
                                <Image
                                    alt="tjela logo"
                                    height={150}
                                    src="/images/brandLogos/tjela.jpg"
                                    width={150}
                                />
                            </a>
                        </li>
                        <li>
                            <a
                                aria-label="guacamole"
                                href={guacamoleInstagramUrl}
                                rel="noreferrer"
                                target="_blank"
                            >
                                <Image
                                    alt="guacamole logo"
                                    height={150}
                                    src="/images/brandLogos/guacamole.jpg"
                                    width={150}
                                />
                            </a>
                        </li>
                        <li>
                            <a
                                aria-label="kaffeehaus"
                                href={kaffeehausInstagramUrl}
                                rel="noreferrer"
                                target="_blank"
                            >
                                <Image
                                    alt="kaffeehaus logo"
                                    height={150}
                                    src="/images/brandLogos/kaffeehaus.jpg"
                                    width={150}
                                />
                            </a>
                        </li>
                        <li>
                            <a
                                aria-label="taste of india"
                                href={tasteOfIndiaInstagramUrl}
                                rel="noreferrer"
                                target="_blank"
                            >
                                <Image
                                    alt="taste of india logo"
                                    height={150}
                                    src="/images/brandLogos/tasteofindia.jpg"
                                    width={150}
                                />
                            </a>
                        </li>
                        <li>
                            <a
                                aria-label="icecream roll"
                                href={icecreamRollInstagramUrl}
                                rel="noreferrer"
                                target="_blank"
                            >
                                <Image
                                    alt="icecream roll logo"
                                    height={150}
                                    src="/images/brandLogos/icecreamroll.jpg"
                                    width={150}
                                />
                            </a>
                        </li>
                        <li>
                            <a
                                aria-label="marialimao"
                                href={mariaLimaoInstagramUrl}
                                rel="noreferrer"
                                target="_blank"
                            >
                                <Image
                                    alt="marialimao logo"
                                    height={150}
                                    src="/images/brandLogos/marialimao.jpg"
                                    width={150}
                                />
                            </a>
                        </li>
                        <li>
                            <a
                                aria-label="biergarten"
                                href={biergartenInstagramUrl}
                                rel="noreferrer"
                                target="_blank"
                            >
                                <Image
                                    alt="biergarten logo"
                                    height={150}
                                    src="/images/brandLogos/biergarten.jpg"
                                    width={150}
                                />
                            </a>
                        </li>
                        <li>
                            <a
                                aria-label="trattoria"
                                href={trattoriaInstagramUrl}
                                rel="noreferrer"
                                target="_blank"
                            >
                                <Image
                                    alt="trattoria logo"
                                    height={150}
                                    src="/images/brandLogos/trattoria.jpg"
                                    width={150}
                                />
                            </a>
                        </li>
                        <li>
                            <a
                                aria-label="a amiga esteticista"
                                href={aAmigaEsteticistaInstagramUrl}
                                rel="noreferrer"
                                target="_blank"
                            >
                                <Image
                                    alt="a amiga esteticista logo"
                                    height={150}
                                    src="/images/brandLogos/amiga-esteticista.jpg"
                                    width={150}
                                />
                            </a>
                        </li>
                        <li>
                            <a
                                aria-label="rice me deli"
                                href={riceMeDeliInstagramUrl}
                                rel="noreferrer"
                                target="_blank"
                            >
                                <Image
                                    alt="rice me deli logo"
                                    height={150}
                                    src="/images/brandLogos/ricemedeli.jpg"
                                    width={150}
                                />
                            </a>
                        </li>
                        <li>
                            <a
                                aria-label="4 patas de 5 estrelas"
                                href={quatroPatasDe5EstrelasInstagramUrl}
                                rel="noreferrer"
                                target="_blank"
                            >
                                <Image
                                    alt="4 patas de 5 estrelas logo"
                                    height={150}
                                    src="/images/brandLogos/4patas.jpg"
                                    width={150}
                                />
                            </a>
                        </li>
                        <li>
                            <a
                                aria-label="rice me"
                                href={riceMeInstagramUrl}
                                rel="noreferrer"
                                target="_blank"
                            >
                                <Image
                                    alt="rice me logo"
                                    height={150}
                                    src="/images/brandLogos/riceme.jpg"
                                    width={150}
                                />
                            </a>
                        </li>
                        <li>
                            <a
                                aria-label="luminous"
                                href={luminousInstagramUrl}
                                rel="noreferrer"
                                target="_blank"
                            >
                                <Image
                                    alt="luminous logo"
                                    height={150}
                                    src="/images/brandLogos/luminous.jpg"
                                    width={150}
                                />
                            </a>
                        </li>
                        <li>
                            <a
                                aria-label="mad mary"
                                href={madMaryInstagramUrl}
                                rel="noreferrer"
                                target="_blank"
                            >
                                <Image
                                    alt="mad mary logo"
                                    height={150}
                                    src="/images/brandLogos/madmary.jpg"
                                    width={150}
                                />
                            </a>
                        </li>
                        <li>
                            <a
                                aria-label="harpoon"
                                href={harpoonLinkedInUrl}
                                rel="noreferrer"
                                target="_blank"
                            >
                                <Image
                                    alt="harpoon logo"
                                    height={150}
                                    src="/images/brandLogos/harpoon.jpg"
                                    width={150}
                                />
                            </a>
                        </li>
                        <li>
                            <a
                                aria-label="bovine"
                                href={bovineInstagramUrl}
                                rel="noreferrer"
                                target="_blank"
                            >
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
                    .container {
                        background: var(--white);

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

                                @media (${tabletMediaQuery}) {
                                    width: calc(100% / 4);
                                }

                                @media (${mobileMediaQuery}) {
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
