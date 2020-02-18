import React, { FC } from 'react';

const NoContentErrorBlock: FC = () => (
    <div>
        <p>There was an error loading this page. Please refresh, clean your cache or try again later</p>

        <style jsx>
            {`
                div {
                    display: flex;
                    justify-content: center;
                }
            `}
        </style>
    </div>
);

export default NoContentErrorBlock;
