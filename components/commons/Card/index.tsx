import React, { HTMLAttributes } from 'react';
import styles from './style.module.scss';
import cn from 'classnames';

export interface ICardProps extends HTMLAttributes<HTMLDivElement> {
    title: string;
    backgroundColor: string;
    size: 'small' | 'medium' | 'large';
    patternName: 'graphic-design' | 'illustrations' | 'motion-graphics' | 'photography' | 'ui-ux' | 'apps';
}

const Card: React.FC<ICardProps> = ({
                                    title, backgroundColor, size, patternName,
                                    className, ...props
                                }) => {
    return (
        <div className={cn(styles.card, {
            [styles.small]: size === 'small',
            [styles.medium]: size === 'medium',
            [styles.large]: size === 'large',
        }, className)}
             style={{
                 backgroundColor,
             }}
             {...props}
        >
            <div className={styles.patternWrapper}>
                <img src={`/img/patterns/pattern-${patternName}.svg`}
                     alt={''}
                />
            </div>
            {title}
        </div>
    );
};

export default Card;
