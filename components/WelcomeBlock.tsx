import React, { FC, useContext } from 'react';
import TextsContext from './context/TextsContext';
import Title from './Title';

const WelcomeBlock: FC = () => {
    const { texts } = useContext(TextsContext);

    return (
        <>
            <div>
                <Title text={texts.welcome} />
                <p>{texts.managingSocialNetworks}</p>
                <p>{texts.monitorAndOptimizeProcessAndStrategy}</p>
                <p>{texts.throughStrategicPlanning}</p>
            </div>

            <style jsx>
                {`
                    @import './styles/_vars.scss';

                    h1 {
                        @include fontL(uppercase)
                        margin-bottom: 30rem;
                    }
                `}
            </style>
        </>
    );
};

export default WelcomeBlock;
