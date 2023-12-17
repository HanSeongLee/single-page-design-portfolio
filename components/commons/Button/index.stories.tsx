import type { Meta, StoryObj } from '@storybook/react';

import Button from './index';
import { IconName } from 'constants/Icons';

const meta: Meta<typeof Button> = {
    title: 'Components/Button',
    component: Button,
    tags: ['autodocs'],
    argTypes: {
        className: { control: 'text' },
    },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    args: {
        variant: 'primary',
        children: 'Free Consultation'
    },
};

export const Secondary: Story = {
    args: {
        variant: 'secondary',
        children: 'Free Consultation',
    },
};

export const Icon: Story = {
    args: {
        variant: 'icon',
        iconName: IconName.ArrowLeft,
    },
};
