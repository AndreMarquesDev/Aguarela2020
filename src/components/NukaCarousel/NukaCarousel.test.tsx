import '@testing-library/jest-dom';
import React, { ReactNode } from 'react';
import { render, screen, RenderResult } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { NukaCarousel, NukaCarouselProps } from './NukaCarousel';

const children: ReactNode = ['1', '2', '3', '4', '5'].map(child => <div>Slide {child}</div>);

const baseProps: NukaCarouselProps = {
    children,
    width: '90%',
    framePadding: '0px 10px',
    slidesToShow: 3,
    cellAlign: 'center',
};

const renderComponent = (newProps?: Partial<NukaCarouselProps>): RenderResult => {
    return render(<NukaCarousel {...baseProps} {...newProps} />);
};

describe('<NukaCarousel />', () => {
    test('renders properly', () => {
        const { container } = renderComponent();

        const slide1 = screen.getByText('Slide 1');
        const slide2 = screen.getByText('Slide 2');
        const slide3 = screen.getByText('Slide 3');
        const slide4 = screen.getByText('Slide 4');
        const slide5 = screen.getByText('Slide 5');

        const slide6 = screen.queryByText('Slide 6');

        expect(slide1).toBeInTheDocument();
        expect(slide2).toBeInTheDocument();
        expect(slide3).toBeInTheDocument();
        expect(slide4).toBeInTheDocument();
        expect(slide5).toBeInTheDocument();

        expect(slide6).not.toBeInTheDocument();

        expect(container).toMatchSnapshot();
    });

    test('renders properly when width prop is not provided', () => {
        const { container } = renderComponent({ width: undefined });

        expect(container).toMatchSnapshot();
    });

    test('renders properly when framePadding prop is not provided', () => {
        const { container } = renderComponent({ framePadding: undefined });

        expect(container).toMatchSnapshot();
    });

    test('renders properly when slidesToShow prop is not provided', () => {
        const { container } = renderComponent({ slidesToShow: undefined });

        expect(container).toMatchSnapshot();
    });

    test('renders properly when cellAlign prop is not provided', () => {
        const { container } = renderComponent({ cellAlign: undefined });

        expect(container).toMatchSnapshot();
    });

    test('switches to the previous slide when clicking the previous arrow button', () => {
        const { container } = renderComponent();

        const currentSlideText = screen.getByText('Slide 1 of 5');

        expect(currentSlideText).toBeInTheDocument();

        const previousSlideButton = screen.getAllByRole('button')[0];

        userEvent.click(previousSlideButton);

        const currentSlideTextAfterClick = screen.getByText('Slide 5 of 5');

        expect(currentSlideTextAfterClick).toBeInTheDocument();

        expect(container).toMatchSnapshot();
    });

    test('switches to the next slide when clicking the next arrow button', () => {
        const { container } = renderComponent();

        const currentSlideText = screen.getByText('Slide 1 of 5');

        expect(currentSlideText).toBeInTheDocument();

        const nextSlideButton = screen.getAllByRole('button')[1];

        userEvent.click(nextSlideButton);

        const currentSlideTextAfterClick = screen.getByText('Slide 2 of 5');

        expect(currentSlideTextAfterClick).toBeInTheDocument();

        expect(container).toMatchSnapshot();
    });

    test('resets the "data-times-touched" attribute when switching to the previous slide', () => {
        const newChildren: ReactNode = ['1', '2', '3', '4', '5'].map(child => (
            <div data-times-touched="1">Slide {child}</div>
        ));

        renderComponent({ children: newChildren });

        const previousSlideButton = screen.getAllByRole('button')[0];
        const slide1 = screen.getByText('Slide 1');

        expect(slide1).toHaveAttribute('data-times-touched', '1');

        userEvent.click(previousSlideButton);

        expect(slide1).toHaveAttribute('data-times-touched', '0');
    });

    test('resets the "data-times-touched" attribute when switching to the next slide', () => {
        const newChildren: ReactNode = ['1', '2', '3', '4', '5'].map(child => (
            <div data-times-touched="1">Slide {child}</div>
        ));

        renderComponent({ children: newChildren });

        const nextSlideButton = screen.getAllByRole('button')[1];
        const slide1 = screen.getByText('Slide 1');

        expect(slide1).toHaveAttribute('data-times-touched', '1');

        userEvent.click(nextSlideButton);

        expect(slide1).toHaveAttribute('data-times-touched', '0');
    });
});
