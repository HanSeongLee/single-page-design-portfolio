import type { Meta, StoryObj } from '@storybook/react';

import Title from './index';

const meta: Meta<typeof Title> = {
    title: 'Components/Typography/Title',
    component: Title,
    tags: ['autodocs'],
    argTypes: {
        className: { control: 'text' },
    },
};

export default meta;

type Story = StoryObj<typeof Title>;

export const Large: Story = {
    args: {
        level: 1,
        children: 'Heading (L)',
        size: 'large',
    },
};

export const Medium: Story = {
    args: {
        level: 1,
        children: 'Heading (M)',
        size: 'medium',
    },
};

export const Small: Story = {
    args: {
        level: 1,
        children: 'Heading (S)',
        size: 'small',
    },
};
