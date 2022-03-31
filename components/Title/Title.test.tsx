import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { Title, TitleProps } from './Title';

const baseProps: TitleProps = {
    text: 'dummy text',
    colored: false,
    marginBottom: null,
};

describe('<Title />', () => {
    test('renders properly', () => {
        render(<Title {...baseProps} />);

        const h1Element = screen.getByText(baseProps.text);

        expect(h1Element).toBeInTheDocument();
        expect(h1Element).toMatchSnapshot();
    });

    test('renders properly with the colored class', () => {
        render(<Title {...baseProps} colored />);

        const h1Element = screen.getByText(baseProps.text);

        expect(h1Element).toBeInTheDocument();
        expect(h1Element).toHaveClass('colored');
        expect(h1Element).toMatchSnapshot();
    });

    test('renders properly with a custom margin-bottom', () => {
        render(<Title {...baseProps} marginBottom={100} />);

        const h1Element = screen.getByText(baseProps.text);

        expect(h1Element).toBeInTheDocument();
        expect(h1Element).toMatchSnapshot();
    });
});
