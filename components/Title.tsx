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
                    h1 {
                        font-size: 30rem;
                        text-transform: uppercase;
                        margin-bottom: 30rem;
                    }
                `}
            </style>
        </>
    );
};

export default Title;
