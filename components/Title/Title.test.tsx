import '@testing-library/jest-dom';
import React from 'react';
import { render, RenderResult, screen } from '@testing-library/react';
import { Title, TitleProps } from './Title';

const baseProps: TitleProps = {
    text: 'dummy text',
    colored: false,
    marginBottom: undefined,
};

const renderComponent = (newProps?: Partial<TitleProps>): RenderResult => {
    return render(<Title {...baseProps} {...newProps} />);
};

describe('<Title />', () => {
    test('renders properly', () => {
        renderComponent();

        const h1Element = screen.getByText(baseProps.text);

        expect(h1Element).toBeInTheDocument();
        expect(h1Element).toMatchSnapshot();
    });

    test('renders properly with the colored class', () => {
        renderComponent({ colored: true });

        const h1Element = screen.getByText(baseProps.text);

        expect(h1Element).toBeInTheDocument();
        expect(h1Element).toHaveClass('colored');
        expect(h1Element).toMatchSnapshot();
    });

    test('renders properly with a custom margin-bottom', () => {
        renderComponent({ marginBottom: 100 });

        const h1Element = screen.getByText(baseProps.text);

        expect(h1Element).toBeInTheDocument();
        expect(h1Element).toMatchSnapshot();
    });
});
