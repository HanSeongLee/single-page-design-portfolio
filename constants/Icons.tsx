import React from 'react';
import ArrowLeftIcon from 'public/icons/icon-arrow-left.svg';
import ArrowRightIcon from 'public/icons/icon-arrow-right.svg';

export enum IconName {
    ArrowLeft = 'arrow-left',
    ArrowRight = 'arrow-right',
}

export const ICONS: { [key in IconName]: React.ReactNode } = {
    [IconName.ArrowLeft]: <ArrowLeftIcon />,
    [IconName.ArrowRight]: <ArrowRightIcon />,
};
