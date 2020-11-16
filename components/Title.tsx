import React, { FC } from 'react';

interface TitleProps {
    text: string;
    colored: boolean;
    marginBottom?: number;
}

const Title: FC<TitleProps> = ({ text, colored, marginBottom }) => (
    <>
        <h1 className={colored && 'colored'}>
            {text}
        </h1>

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

export default Title;
