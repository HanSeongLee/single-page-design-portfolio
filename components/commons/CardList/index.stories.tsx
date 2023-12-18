import type { Meta, StoryObj } from '@storybook/react';

import CardList from './index';
import { CARD_LIST_ITEMS } from 'constants/data';

const meta: Meta<typeof CardList> = {
    title: 'Components/CardList',
    component: CardList,
    tags: ['autodocs'],
    argTypes: {
        className: { control: 'text' },
    },
};

export default meta;

type Story = StoryObj<typeof CardList>;

export const Default: Story = {
    args: {
        items: CARD_LIST_ITEMS,
    },
};
