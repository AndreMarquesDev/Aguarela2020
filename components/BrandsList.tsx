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
                            <Image
                                alt="avocado logo"
                                height={150}
                                src="/images/brandLogos/avocado.jpg"
                                width={150}
                            />
                        </li>
                        <li>
                            <Image
                                alt="pernod logo"
                                height={150}
                                src="/images/brandLogos/pernod.jpg"
                                width={150}
                            />
                        </li>
                        <li>
                            <Image
                                alt="tjela logo"
                                height={150}
                                src="/images/brandLogos/tjela.jpg"
                                width={150}
                            />
                        </li>
                        <li>
                            <Image
                                alt="guacamole logo"
                                height={150}
                                src="/images/brandLogos/guacamole.jpg"
                                width={150}
                            />
                        </li>
                        <li>
                            <Image
                                alt="kaffeehaus logo"
                                height={150}
                                src="/images/brandLogos/kaffeehaus.jpg"
                                width={150}
                            />
                        </li>
                        <li>
                            <Image
                                alt="taste of india logo"
                                height={150}
                                src="/images/brandLogos/tasteofindia.jpg"
                                width={150}
                            />
                        </li>
                        <li>
                            <Image
                                alt="icecream roll logo"
                                height={150}
                                src="/images/brandLogos/icecreamroll.jpg"
                                width={150}
                            />
                        </li>
                        <li>
                            <Image
                                alt="marialimao logo"
                                height={150}
                                src="/images/brandLogos/marialimao.jpg"
                                width={150}
                            />
                        </li>
                        <li>
                            <Image
                                alt="biergarten logo"
                                height={150}
                                src="/images/brandLogos/biergarten.jpg"
                                width={150}
                            />
                        </li>
                        <li>
                            <Image
                                alt="trattoria logo"
                                height={150}
                                src="/images/brandLogos/trattoria.jpg"
                                width={150}
                            />
                        </li>
                        <li>
                            <Image
                                alt="a amiga esteticista logo"
                                height={150}
                                src="/images/brandLogos/amiga-esteticista.jpg"
                                width={150}
                            />
                        </li>
                        <li>
                            <Image
                                alt="rice me deli logo"
                                height={150}
                                src="/images/brandLogos/ricemedeli.jpg"
                                width={150}
                            />
                        </li>
                        <li>
                            <Image
                                alt="4 patas de 5 estrelas logo"
                                height={150}
                                src="/images/brandLogos/4patas.jpg"
                                width={150}
                            />
                        </li>
                        <li>
                            <Image
                                alt="rice me logo"
                                height={150}
                                src="/images/brandLogos/riceme.jpg"
                                width={150}
                            />
                        </li>
                        <li>
                            <Image
                                alt="luminous logo"
                                height={150}
                                src="/images/brandLogos/luminous.jpg"
                                width={150}
                            />
                        </li>
                        <li>
                            <Image
                                alt="mad mary logo"
                                height={150}
                                src="/images/brandLogos/madmary.jpg"
                                width={150}
                            />
                        </li>
                        <li>
                            <Image
                                alt="harpoon logo"
                                height={150}
                                src="/images/brandLogos/harpoon.jpg"
                                width={150}
                            />
                        </li>
                        <li>
                            <Image
                                alt="bovine logo"
                                height={150}
                                src="/images/brandLogos/bovine.jpg"
                                width={150}
                            />
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
