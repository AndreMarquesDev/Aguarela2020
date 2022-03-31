import React from 'react';
import Image from 'next/image';

export interface SkillItemProps {
    icon: string;
    title: string;
    description: string;
}

export const SkillItem = ({ icon, title, description }: SkillItemProps): JSX.Element => (
    <>
        <Image
            alt={title}
            className="imageOpacity"
            height={130}
            layout="fixed"
            src={`/images/icons/${icon}.svg`}
            width={160}
        />
        <strong>{title}</strong>
        <p>{description}</p>

        <style jsx>
            {`
                @import './styles/_vars.scss';

                strong {
                    @include fontM($fontWeight: 500);
                    letter-spacing: 5rem;
                    margin: 40rem 0 15rem;
                }

                p {
                    @include fontXS;
                    letter-spacing: 1rem;
                    line-height: 19rem;
                }
            `}
        </style>
    </>
);
