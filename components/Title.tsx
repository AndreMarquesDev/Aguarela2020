import React, { FC } from 'react';

interface TitleProps {
    text: string;
}

const Title: FC<TitleProps> = props => {
    const {
        text,
    } = props;

    return (
        <>
            <h1 className="champagneBold">
                {text}
            </h1>

            <style jsx>
                {`
                    @import './styles/_vars.scss';

                    h1 {
                        @include fontL($textTransform: uppercase)
                        margin-bottom: 30rem;
                    }
                `}
            </style>
        </>
    );
};

export default Title;
