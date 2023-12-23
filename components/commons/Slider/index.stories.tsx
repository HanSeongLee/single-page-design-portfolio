import type { Meta, StoryObj } from '@storybook/react';

import Slider from './index';
import Image from 'next/image';
import React from 'react';

const meta: Meta<typeof Slider> = {
    title: 'Components/Slider',
    component: Slider,
    tags: ['autodocs'],
    argTypes: {
        className: { control: 'text' },
    },
};

export default meta;

type Story = StoryObj<typeof Slider>;

const children = Array.from({ length: 5 }).map((_, index) => (
    <div key={index}>
        <Image src={`/img/slides/image-slide-${index + 1}.jpg`}
               alt={''}
               width={540}
               height={360}
        />
    </div>
));

export const Default: Story = {
    args: {
        children,
        settings: {
            initialSlide: 2,
        }
    }
};
