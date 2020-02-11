/* stylelint-disable-line declaration-colon-newline-after */

import css from 'styled-jsx/css';

const typography = css.global`
    @font-face {
        font-family: 'acumin-pro';
        src: url('https://use.typekit.net/af/46da36/00000000000000003b9acaf6/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3') format('woff2'), url('https://use.typekit.net/af/46da36/00000000000000003b9acaf6/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3') format('woff'), url('https://use.typekit.net/af/46da36/00000000000000003b9acaf6/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3') format('opentype'); /* stylelint-disable-line declaration-colon-newline-after */
        font-display: auto;
        font-style: normal;
        font-weight: 400;
    }

    @font-face {
        font-family: 'acumin-pro-bold';
        src: url('https://use.typekit.net/af/6d4bb2/00000000000000003b9acafc/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3') format('woff2'), url('https://use.typekit.net/af/6d4bb2/00000000000000003b9acafc/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3') format('woff'), url('https://use.typekit.net/af/6d4bb2/00000000000000003b9acafc/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3') format('opentype'); /* stylelint-disable-line declaration-colon-newline-after */
        font-display: auto;
        font-style: normal;
        font-weight: 700;
    }

    @font-face {
        font-family: 'acumin-pro-italic';
        src: url('https://use.typekit.net/af/aa5b59/00000000000000003b9acaf7/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3') format('woff2'), url('https://use.typekit.net/af/aa5b59/00000000000000003b9acaf7/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3') format('woff'), url('https://use.typekit.net/af/aa5b59/00000000000000003b9acaf7/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3') format('opentype'); /* stylelint-disable-line declaration-colon-newline-after */
        font-display: auto;
        font-style: italic;
        font-weight: 400;
    }

    @font-face {
        font-family: 'champagne-limousines';
        src: url('../fonts/Champagne-Limousines.ttf');
        font-display: auto;
        font-style: normal;
        font-weight: 400;
    }

    @font-face {
        font-family: 'champagne-limousines-bold';
        src: url('../fonts/Champagne-Limousines-Bold.ttf');
        font-display: auto;
        font-style: normal;
        font-weight: 700;
    }

    @font-face {
        font-family: 'champagne-limousines-Italic';
        src: url('../fonts/Champagne-Limousines-Italic.ttf');
        font-display: auto;
        font-style: italic;
        font-weight: 400;
    }
`;

export const acumin = css.global`
    .acumin {
        font-family: 'acumin-pro', sans-serif;
    }
`;

export const acuminBold = css.global`
    .acuminBold {
        font-family: 'acumin-pro-bold', sans-serif;
    }
`;

export const acuminItalic = css.global`
    .acuminItalic {
        font-family: 'acumin-pro-italic', sans-serif;
    }
`;

export const champagne = css.global`
    .champagne {
        font-family: 'champagne-limousines', sans-serif;
    }
`;

export const champagneItalic = css.global`
    .champagneItalic {
        font-family: 'champagne-limousines-Italic', sans-serif;
    }
`;

export const champagneBold = css.global`
    .champagneBold {
        font-family: 'champagne-limousines-bold', sans-serif;
    }
`;

export default typography;
