import type { RenderResult } from '@testing-library/react';
import type { SkillItemProps } from './SkillItem';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { SkillItem } from './SkillItem';
import '@testing-library/jest-dom';

const baseProps: SkillItemProps = {
    icon: 'strategy',
    title: 'Título',
    description: 'Descrição',
};

const renderComponent = (newProps?: Partial<SkillItemProps>): RenderResult => {
    return render(<SkillItem {...baseProps} {...newProps} />);
};

describe('<SkillItem />', () => {
    it('renders properly', () => {
        const { container } = renderComponent();

        expect(screen.getByText(baseProps.title)).toBeInTheDocument();
        expect(screen.getByText(baseProps.description)).toBeInTheDocument();

        expect(container).toMatchSnapshot();
    });
});
