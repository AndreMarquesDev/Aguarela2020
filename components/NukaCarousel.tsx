import React, { FC, ReactNode } from 'react';
import Carousel from 'nuka-carousel';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface NukaCarouselProps {
    children: ReactNode;
    width?: string;
    framePadding?: string;
}

const NukaCarousel: FC<NukaCarouselProps> = ({ children, width, framePadding }) => (
    <>
        <Carousel
            wrapAround
            cellAlign="center"
            framePadding={framePadding || '0px 30px'}
            renderBottomCenterControls={null}
            renderCenterLeftControls={({ previousSlide }): ReactNode => (
                <button type="button" onClick={previousSlide}><FaChevronLeft /></button>
            )}
            renderCenterRightControls={({ nextSlide }): ReactNode => (
                <button type="button" onClick={nextSlide}><FaChevronRight /></button>
            )}
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

export default NukaCarousel;
