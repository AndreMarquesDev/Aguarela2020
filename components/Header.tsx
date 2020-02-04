import React, { FC } from 'react';
import Link from 'next/link';

const Header: FC = () => (
    <div>
        <Link href="/">
            <a className="HeaderLink">Home</a>
        </Link>
        <Link href="/about">
            <a className="HeaderLink">About</a>
        </Link>

        <style jsx>
            {`
                .HeaderLink {
                    margin-right: 15px;
                }
            `}
        </style>
    </div>
);

export default Header;
