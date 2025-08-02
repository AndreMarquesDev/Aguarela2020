import type { RenderResult } from '@testing-library/react';
import type { ReactNode } from 'react';
import type { NukaCarouselProps } from './NukaCarousel';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { NukaCarousel } from './NukaCarousel';
import '@testing-library/jest-dom';

const children: ReactNode = ['1', '2', '3', '4', '5'].map(child => (
    <div>
        Slide
        {' '}
        {child}
    </div>
));

const baseProps: NukaCarouselProps = {
    children,
    width: '90%',
    slidesToShow: 3,
    cellAlign: 'center',
};

const renderComponent = (newProps?: Partial<NukaCarouselProps>): RenderResult => {
    return render(<NukaCarousel {...baseProps} {...newProps} />);
};

describe('<NukaCarousel />', () => {
    test('renders properly', () => {
        const { container } = renderComponent();

        // nukaCarousel adds two extra slides, a '.prev-cloned' and a '.next-cloned', so each slide is triplicated
        const slide1 = screen.getAllByText('Slide 1')[0];
        const slide2 = screen.getAllByText('Slide 2')[0];
        const slide3 = screen.getAllByText('Slide 3')[0];
        const slide4 = screen.getAllByText('Slide 4')[0];
        const slide5 = screen.getAllByText('Slide 5')[0];

        const slide6 = screen.queryByText('Slide 6');

        expect(slide1).toBeInTheDocument();
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

    test('renders properly when slidesToShow prop is not provided', () => {
        const { container } = renderComponent({ slidesToShow: undefined });

        expect(container).toMatchSnapshot();
    });

    test('renders properly when cellAlign prop is not provided', () => {
        const { container } = renderComponent({ cellAlign: undefined });

        expect(container).toMatchSnapshot();
    });

    test('switches to the previous slide when clicking the previous arrow button', async () => {
        const user = userEvent.setup();

        const { container } = renderComponent();

        const currentSlideText = screen.getByText('Slide 1 of 5');

        expect(currentSlideText).toBeInTheDocument();

        const previousSlideButton = screen.getAllByRole('button')[0];

        await user.click(previousSlideButton);

        const currentSlideTextAfterClick = screen.getByText('Slide 5 of 5');

        expect(currentSlideTextAfterClick).toBeInTheDocument();

        expect(container).toMatchSnapshot();
    });

    test('switches to the next slide when clicking the next arrow button', async () => {
        const user = userEvent.setup();

        const { container } = renderComponent();

        const currentSlideText = screen.getByText('Slide 1 of 5');

        expect(currentSlideText).toBeInTheDocument();

        const nextSlideButton = screen.getAllByRole('button')[1];

        await user.click(nextSlideButton);

        const currentSlideTextAfterClick = screen.getByText('Slide 2 of 5');

        expect(currentSlideTextAfterClick).toBeInTheDocument();

        expect(container).toMatchSnapshot();
    });

    test('resets the "data-times-touched" attribute when switching to the previous slide', async () => {
        const newChildren: ReactNode = ['1', '2', '3', '4', '5'].map(child => (
            <div data-times-touched="1">
                Slide
                {' '}
                {child}
            </div>
        ));
        const user = userEvent.setup();

        renderComponent({ children: newChildren });

        const previousSlideButton = screen.getAllByRole('button')[0];
        const slide1 = screen.getAllByText('Slide 1')[0]; // nukaCarousel adds two extra slides, a '.prev-cloned' and a '.next-cloned', so each slide is triplicated

        expect(slide1).toHaveAttribute('data-times-touched', '1');

        await user.click(previousSlideButton);

        expect(slide1).toHaveAttribute('data-times-touched', '0');
    });

    test('resets the "data-times-touched" attribute when switching to the next slide', async () => {
        const newChildren: ReactNode = ['1', '2', '3', '4', '5'].map(child => (
            <div data-times-touched="1">
                Slide
                {' '}
                {child}
            </div>
        ));

        const user = userEvent.setup();

        renderComponent({ children: newChildren });

        const nextSlideButton = screen.getAllByRole('button')[1];
        const slide1 = screen.getAllByText('Slide 1')[0]; // nukaCarousel adds two extra slides, a '.prev-cloned' and a '.next-cloned', so each slide is triplicated

        expect(slide1).toHaveAttribute('data-times-touched', '1');

        await user.click(nextSlideButton);

        expect(slide1).toHaveAttribute('data-times-touched', '0');
    });
});
