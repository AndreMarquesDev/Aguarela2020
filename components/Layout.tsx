import React, { FC } from 'react';
import Header from './Header';
// import Styles from './Layout.scss';
// import colors from '../../styles/colors';
import breakpoints from '../styles/breakpoints';

const Layout: FC = props => {
    const { children } = props;

    return (
        <div className="Layout">
            <Header />
            <p className="acumin">acumin</p>
            <p className="acuminBold">acuminBold</p>
            <p className="acuminItalic">acuminItalic</p>
            <p className="champagne">champagne</p>
            <p className="champagneBold">champagneBold</p>
            <p className="champagneItalic">champagneItalic</p>
            {children}

            <style jsx>
                {`
                    .Layout {
                        margin: 20px;
                        padding: 20px;
                        border: 1px solid #ddd;
                    }
                    .red {
                        background: red;
                    }

                    @media (max-width: ${breakpoints.mobile}) {
                        .Layout {
                            background: green;
                        }
                    }
                `}
            </style>
        </div>
    );
};

export default Layout;
