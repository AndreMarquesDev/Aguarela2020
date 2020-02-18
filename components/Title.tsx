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
                    margin-bottom: 20rem;
                }
            `}
            </style>
        </>
    );
};

export default Title;
