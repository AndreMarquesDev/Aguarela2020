import React, { FC } from 'react';
import colors from '../styles/colors';

const Separator: FC = () => (
    <>
        <hr />

        <style jsx>
            {`
                hr {
                    width: 150rem;
                    height: 1rem;
                    margin: 0 auto;
                    background: ${colors.black};
                    border: none;
                }
            `}
        </style>
    </>
);

export default Separator;
