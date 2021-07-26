import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import Title, { TitleProps } from './Title';

const baseProps: TitleProps = {
    text: 'dummy text',
    colored: false,
    marginBottom: null,
};

describe('<Title />', () => {
    test('renders properly', () => {
        const { container } = render(<Title {...baseProps} />);

        expect(screen.getByText(baseProps.text)).toBeInTheDocument();
        expect(container.firstChild).toMatchSnapshot();
    });

    test('renders properly with the colored class', () => {
        const { container } = render(<Title {...baseProps} colored />);

        expect(screen.getByText(baseProps.text)).toBeInTheDocument();
        expect(container.firstChild).toHaveClass('colored');
        expect(container.firstChild).toMatchSnapshot();
    });

    test('renders properly with a custom margin-bottom', () => {
        const { container } = render(<Title {...baseProps} marginBottom={100} />);

        expect(screen.getByText(baseProps.text)).toBeInTheDocument();
        expect(container.firstChild).toMatchSnapshot();
    });
});
