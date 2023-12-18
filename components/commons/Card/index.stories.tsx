import type { Meta, StoryObj } from '@storybook/react';

import Card from './index';
import { COLORS } from 'styles/colors';

const meta: Meta<typeof Card> = {
    title: 'Components/Card',
    component: Card,
    tags: ['autodocs'],
    argTypes: {
        className: { control: 'text' },
    },
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Large: Story = {
    args: {
        title: 'Graphic Design',
        backgroundColor: COLORS.GALACTIC_BLUE,
        patternName: 'graphic-design',
        size: 'large',
    },
};

export const Medium: Story = {
    args: {
        title: 'Illustrations',
        backgroundColor: COLORS.LIGHT_RED,
        patternName: 'illustrations',
        size: 'medium',
    },
};

export const Small: Story = {
    args: {
        title: 'UI/UX',
        backgroundColor: COLORS.SUMMER_YELLOW,
        patternName: 'ui-ux',
        size: 'small',
    },
};
