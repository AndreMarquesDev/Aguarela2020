import React, { ReactNode } from 'react';
import Carousel, { CellAlign } from 'nuka-carousel';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { resetTimesTouchedAttribute } from '../../utils/generic';
import {
    nukaCarouselPrevButtonDataTestId,
    nukaCarouselNextButtonDataTestId,
} from '../../utils/dataTestIds';

export interface NukaCarouselProps {
    children: ReactNode;
    width?: string;
    slidesToShow?: number;
    cellAlign?: CellAlign;
}

export const NukaCarousel = ({
    children,
    width,
    slidesToShow,
    cellAlign,
}: NukaCarouselProps): JSX.Element => {
    const carouselContainerMargin = '30rem';

    const handleClickPrev = (goToPrevSlide: () => void): void => {
        resetTimesTouchedAttribute();
        goToPrevSlide();
    };

    const handleClickNext = (goToNextSlide: () => void): void => {
        resetTimesTouchedAttribute();
        goToNextSlide();
    };

    return (
        <>
            <div className="nukaCarouselContainer">
                <Carousel
                    enableKeyboardControls
                    wrapAround
                    cellAlign={cellAlign || 'left'}
                    renderBottomCenterControls={null}
                    renderCenterLeftControls={({ previousSlide }): ReactNode => (
                        <button
                            aria-label="previous slide"
                            className="previousButton"
                            data-testid={nukaCarouselPrevButtonDataTestId}
                            type="button"
                            onClick={(): void => handleClickPrev(previousSlide)}
                        >
                            <FaChevronLeft />
                        </button>
                    )}
                    renderCenterRightControls={({ nextSlide }): ReactNode => (
                        <button
                            aria-label="next slide"
                            className="nextButton"
                            data-testid={nukaCarouselNextButtonDataTestId}
                            type="button"
                            onClick={(): void => handleClickNext(nextSlide)}
                        >
                            <FaChevronRight />
                        </button>
                    )}
                    slidesToShow={slidesToShow || 1}
                >
                    {children}
                </Carousel>
            </div>

            <style jsx>
                {`
                    @import './src/styles/_vars.scss';

                    .nukaCarouselContainer {
                        width: ${width || '100%'};
                        padding: 0px ${carouselContainerMargin};
                    }

                    .previousButton,
                    .nextButton {
                        display: flex;
                        position: relative;
                        transition: transform 0.15s linear;

                        &:hover {
                            transform: scale(1.1);
                        }
                    }

                    .previousButton {
                        right: ${carouselContainerMargin};
                    }

                    .nextButton {
                        left: ${carouselContainerMargin};
                    }
                `}
            </style>
        </>
    );
};
