import '@testing-library/jest-dom';
import React from 'react';
import { render, RenderResult, screen } from '@testing-library/react';
import { SkillItem, SkillItemProps } from './SkillItem';

const baseProps: SkillItemProps = {
    icon: 'strategy',
    title: 'Título',
    description: 'Descrição',
};

const renderComponent = (newProps?: Partial<SkillItemProps>): RenderResult => {
    return render(<SkillItem {...baseProps} {...newProps} />);
};

describe('<SkillItem />', () => {
    test('renders properly', () => {
        const { container } = renderComponent();

        expect(screen.getByText(baseProps.title)).toBeInTheDocument();
        expect(screen.getByText(baseProps.description)).toBeInTheDocument();

        expect(container).toMatchSnapshot();
    });
});
