import classNames from 'classnames';
import React from 'react';

export type TitleProps = {
    text: string;
    colored?: boolean;
    marginBottom?: number;
};

export const Title = ({ text, colored, marginBottom }: TitleProps): JSX.Element => (
    <>
        <h1 className={classNames('fontL', colored ? 'colored' : '')}>{text}</h1>

        <style jsx>
            {`
                h1 {
                    color: var(--white);
                    text-transform: uppercase;
                    font-weight: bold;
                    text-align: center;
                    margin-bottom: ${marginBottom || 50}rem;
                }

                .colored {
                    color: var(--pink);
                }
            `}
        </style>
    </>
);
