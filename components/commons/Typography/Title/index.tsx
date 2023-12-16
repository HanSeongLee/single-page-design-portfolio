import React, { createElement, HTMLAttributes } from 'react';
import styles from './style.module.scss';
import cn from 'classnames';
import { COLORS } from 'styles/colors';
import { createResponsiveStyle, ResponsiveValue } from 'types/responsive';

interface IProps extends HTMLAttributes<HTMLHeadingElement> {
    level: 1 | 2 | 3 | 4 | 5 | 6;
    size: 'small' | 'medium' | 'large';
    color?: string;
    textAlign?: 'left' | 'center' | 'right';
    marginBottom?: ResponsiveValue<number>;
}

const Title: React.FC<IProps> = ({
                                     level, size, color = COLORS.BLACK, textAlign,
                                     marginBottom, children, className, ...props
                                 }) => {
    return createElement(`h${level}`, {
        className: cn(styles.title, {
            [styles.small]: size === 'small',
            [styles.medium]: size === 'medium',
            [styles.large]: size === 'large',
        }, className),
        style: {
            color,
            textAlign,
            ...createResponsiveStyle('margin-bottom', marginBottom)
        },
        ...props,
        children,
    });
};

export default Title;
