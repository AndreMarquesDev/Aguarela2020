import React, { FC, ReactNode } from 'react';
import Carousel, { CarouselCellAlignProp } from 'nuka-carousel';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { resetTimesTouchedAttribute } from '../utils/generic';

interface NukaCarouselProps {
    children: ReactNode;
    width?: string;
    framePadding?: string;
    slidesToShow?: number;
    cellAlign?: CarouselCellAlignProp;
}

const NukaCarousel: FC<NukaCarouselProps> = ({
    children,
    width,
    framePadding,
    slidesToShow,
    cellAlign,
}) => {
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
            <Carousel
                wrapAround
                cellAlign={cellAlign || 'left'}
                framePadding={framePadding || '0px 30px'}
                renderBottomCenterControls={null}
                renderCenterLeftControls={({ previousSlide }): ReactNode => (
                    <button
                        aria-label="previous slide"
                        type="button"
                        onClick={(): void => handleClickPrev(previousSlide)}
                    >
                        <FaChevronLeft />
                    </button>
                )}
                renderCenterRightControls={({ nextSlide }): ReactNode => (
                    <button
                        aria-label="next slide"
                        type="button"
                        onClick={(): void => handleClickNext(nextSlide)}
                    >
                        <FaChevronRight />
                    </button>
                )}
                slidesToShow={slidesToShow || 1}
                width={width || '100%'}
            >
                {children}
            </Carousel>

            <style jsx>
                {`
                    @import './styles/_vars.scss';

                    button {
                        display: flex;
                        transition: transform 0.15s linear;

                        &:hover {
                            transform: scale(1.1);
                        }
                    }
                `}
            </style>
        </>
    );
};

export default NukaCarousel;
