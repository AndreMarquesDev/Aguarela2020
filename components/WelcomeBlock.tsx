import React, { FC, useContext } from 'react';
import Image from 'next/image';
import TextsContext from './context/TextsContext';
import Title from './Title';

const WelcomeBlock: FC = () => {
    const { texts } = useContext(TextsContext);

    return (
        <>
            <div className="wrapper genericMargins container">
                <figure className="imageBlock">
                    <Image
                        alt="Welcome"
                        height={415}
                        src="https://via.placeholder.com/718x450/5865A2/FFFFFF?text=Welcome"
                        width={718}
                    />
                </figure>
                <div className="textBlock">
                    <Title text={texts.welcome} />
                    <p className="bodyText">{texts.managingSocialNetworks}</p>
                    <p className="bodyText">{texts.monitorAndOptimizeProcessAndStrategy}</p>
                    <p className="bodyText">{texts.throughStrategicPlanning}</p>
                </div>
            </div>

            <style jsx>
                {`
                    @import './styles/_vars.scss';

                    .container {
                        display: flex;

                        > * {
                            width: 50%;
                        }

                        .imageBlock {

                        }

                        .textBlock {
                            position: relative;
                            left: -100px;
                        }
                    }
                `}
            </style>
        </>
    );
};

export default WelcomeBlock;
