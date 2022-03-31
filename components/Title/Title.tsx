import React from 'react';

export interface TitleProps {
    text: string;
    colored?: boolean;
    marginBottom?: number;
}

export const Title = ({ text, colored, marginBottom }: TitleProps): JSX.Element => (
    <>
        <h1 className={colored && 'colored'}>{text}</h1>

        <style jsx>
            {`
                @import './styles/_vars.scss';

                h1 {
                    @include fontL($white, uppercase, bold);
                    text-align: center;
                    margin-bottom: ${marginBottom || 50}rem;
                }

                .colored {
                    color: $pink;
                }
            `}
        </style>
    </>
);
