import React, { FC } from 'react';

interface ITitleProps {
    text: string;
}

const Title: FC<ITitleProps> = props => {
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
