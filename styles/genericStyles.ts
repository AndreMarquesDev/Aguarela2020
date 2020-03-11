import css from 'styled-jsx/css';
import colors from './colors';

const genericStyles = css.global`
    html {
        width: 100%;
        height: 100%;
        font-size: 1px;
        scroll-behavior: smooth;
    }

    body {
        min-height: 100%;
        height: 100%;
        width: 100%;
        position: relative;
        font-size: 20rem;
        font-family: 'champagne-limousines', sans-serif;
        color: ${colors.black};

        & > * {
            min-height: 100%;
            height: 100%;
        }
    }

    a {
        color: inherit;
        text-decoration: none;
        outline: none;
        cursor: pointer;
    }

    button {
        background: none;
        border: none;
        padding: 0;
        cursor: pointer;
    }

    .link {
        display: inline-block;
        position: relative;
        cursor: pointer;

        &::before {
            content: '';
            width: 0;
            height: 2.5rem;
            position: absolute;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.7);
            transition: width 0.3s ease-out;
        }

        &.active::before,
        &:hover::before,
        &:focus::before,
        &:active::before {
            width: 100%;
            left: 0;
            right: auto;
        }
    }

`;

export default genericStyles;
