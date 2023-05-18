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
            src={`/images/icons/${icon}.svg`}
            width={160}
        />
        <strong className="fontM">{title}</strong>
        <p className="fontXS">{description}</p>

        <style jsx>
            {`
                strong {
                    font-weight: 500;
                    letter-spacing: 5rem;
                    margin: 40rem 0 15rem;
                }

                p {
                    letter-spacing: 1rem;
                    line-height: 19rem;
                }
            `}
        </style>
    </>
);
