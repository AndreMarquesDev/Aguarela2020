import css from 'styled-jsx/css';

const genericStyles = css.global`
    html {
        font-size: 1px;
    }

    body {
        font-size: 20rem;
        color: #444242;
        font-family: 'champagne-limousines', sans-serif;
    }

    a {
        color: inherit;
        text-decoration: none;
        outline: none;
        cursor: pointer;
    }

    .link {
        display: inline-block;
        position: relative;
    }

    .link::before {
        content: '';
        width: 0;
        height: 2.5rem;
        position: absolute;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.7);
        transition: width 0.3s ease-out;
    }

    .link:hover::before,
    .link:focus::before,
    .link:active::before {
        width: 100%;
        left: 0;
        right: auto;
    }
`;

export default genericStyles;
