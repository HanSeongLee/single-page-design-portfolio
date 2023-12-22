import type { Meta, StoryObj } from '@storybook/react';

import CTABox from './index';

const meta: Meta<typeof CTABox> = {
    title: 'Components/CTABox',
    component: CTABox,
    tags: ['autodocs'],
    argTypes: {
        className: { control: 'text' },
    },
};

export default meta;

type Story = StoryObj<typeof CTABox>;

export const Default: Story = {
    args: {
    }
};
