import React, { FC, useContext } from 'react';
import Image from 'next/image';
import TextsContext from './context/TextsContext';
import Title from './Title';

const ProjectsList: FC = () => {
    const { texts } = useContext(TextsContext);

    return (
        <>
            <section className="container">
                <div className="wrapper genericMargins">
                    <Title colored text={texts.projects} />
                    <ul>
                        <li>
                            <Image
                                alt="Logo"
                                height={400}
                                src="/images/tjela.jpg"
                                width={400}
                            />
                            <div>
                                <a className="brand link" href="https://www.instagram.com/tudonatjela" rel="noreferrer" target="_blank">@tudonatjela</a>
                                <p className="description">{texts.socialNetworkManagementAndContentCreation}</p>
                                <p className="date">
                                    {texts.since}
                                    {' '}
                                    2020
                                </p>
                                <small>
                                    *
                                    {' '}
                                    {texts.inPartnershipWith}
                                </small>
                            </div>
                        </li>
                        <li>
                            <Image
                                alt="Logo"
                                height={400}
                                src="/images/kaffeehaus.jpg"
                                width={400}
                            />
                            <div>
                                <a className="brand link" href="https://www.instagram.com/kaffeehaus_lisboa" rel="noreferrer" target="_blank">@kaffeehaus_lisboa</a>
                                <p className="description">{texts.socialNetworkManagementAndContentCreation}</p>
                                <p className="date">
                                    {texts.since}
                                    {' '}
                                    2018
                                </p>
                            </div>
                        </li>
                        <li>
                            <Image
                                alt="Logo"
                                height={400}
                                src="/images/guacamole.jpg"
                                width={400}
                            />
                            <div>
                                <a className="brand link" href="https://www.instagram.com/guacamolegmg" rel="noreferrer" target="_blank">@guacamolegmg</a>
                                <p className="description">{texts.socialNetworkManagementAndContentCreation}</p>
                                <p className="date">
                                    {texts.since}
                                    {' '}
                                    2019
                                </p>
                                <small>
                                    *
                                    {' '}
                                    {texts.inPartnershipWith}
                                </small>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>

            <style jsx>
                {`
                    @import './styles/_vars.scss';

                    .container {
                        background: $white;

                        .wrapper {
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                        }

                        ul {
                            width: 100%;
                            display: flex;
                            justify-content: space-between;

                            li {
                                max-height: 400rem;
                                position: relative;
                                margin-right: 2%;

                                &:last-child {
                                    margin-right: 0;
                                }

                                &:hover {
                                    div {
                                        display: flex;
                                    }
                                }

                                div {
                                    background: $pink;
                                    display: none;
                                    position: absolute;
                                    top: 0;
                                    left: 0;
                                    width: 100%;
                                    height: 100%;
                                    flex-direction: column;
                                    justify-content: center;
                                    align-items: center;
                                    text-align: center;
                                    padding: 10rem;

                                    .brand, .date {
                                        @include fontM($yellow, uppercase);
                                        margin-bottom: 20rem;

                                        @include desktop {
                                            @include fontS($yellow, uppercase);
                                        }
                                    }

                                    .description {
                                        @include fontM($yellow);
                                        margin-bottom: 20rem;

                                        @include desktop {
                                            @include fontS($yellow);
                                        }
                                    }

                                    small {
                                        @include fontXS($yellow);
                                    }
                                }
                            }
                        }
                    }

                `}
            </style>
        </>
    );
};

export default ProjectsList;
