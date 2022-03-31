import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { SkillItem, SkillItemProps } from './SkillItem';

const baseProps: SkillItemProps = {
    icon: 'strategy',
    title: 'Título',
    description: 'Descrição',
};

describe('<SkillItem />', () => {
    test('renders properly', () => {
        const { container } = render(<SkillItem {...baseProps} />);

        expect(screen.getByText(baseProps.title)).toBeInTheDocument();
        expect(screen.getByText(baseProps.description)).toBeInTheDocument();

        expect(container).toMatchSnapshot();
    });
});
