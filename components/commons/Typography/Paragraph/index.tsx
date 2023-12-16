import React, { HTMLAttributes } from 'react';
import styles from './style.module.scss';
import cn from 'classnames';
import { COLORS } from 'styles/colors';
import { createResponsiveStyle, ResponsiveValue } from 'types/responsive';

interface IProps extends HTMLAttributes<HTMLParagraphElement> {
    color?: string;
    textAlign?: 'left' | 'center' | 'right';
    width?: ResponsiveValue<number>;
    marginBottom?: ResponsiveValue<number>;
}

const Paragraph: React.FC<IProps> = ({
                                         color = COLORS.MEDIUM_BROWN, textAlign, width, marginBottom,
                                         children, className, ...props
                                     }) => {
    return (
        <p className={cn(styles.paragraph, className)}
           style={{
               color,
               textAlign,
                ...createResponsiveStyle('width', width),
                ...createResponsiveStyle('margin-bottom', marginBottom),
           }}
           {...props}
        >
            {children}
        </p>
    );
};

export default Paragraph;
