import css from 'styled-jsx/css';
import colors from './colors';
import breakpoints from './breakpoints';

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
        font-family: 'champagne-limousines', sans-serif;
        font-size: 20rem;
        letter-spacing: 3rem;
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
            height: 2rem;
            position: absolute;
            right: 0;
            bottom: -1rem;
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

    .bodyText {
        font-family: 'champagne-limousines', sans-serif;
        font-size: 20rem;
        margin-bottom: 30rem;

        &:last-child {
            margin-bottom: 0;
        }
    }

    .wrapper {
        max-width: 1920rem;
        padding: 0 40rem;
        margin: 0 auto;

        @media (max-width: ${breakpoints.tablet}) {
            padding: 0 20rem;
        }
    }

    .genericMargins {
        padding: 70rem 0;

        @media (max-width: ${breakpoints.tablet}) {
            padding: 35rem 0;
        }
    }
`;

export default genericStyles;
