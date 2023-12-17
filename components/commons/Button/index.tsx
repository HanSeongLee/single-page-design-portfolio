import React, { ButtonHTMLAttributes } from 'react';
import styles from './style.module.scss';
import cn from 'classnames';
import { IconName } from 'constants/Icons';
import Icon from 'components/commons/Icon';

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'icon';
    iconName?: IconName;
}

const Button: React.FC<IProps> = ({
                                      variant = 'primary', iconName, children, className,
                                      ...props
                                  }) => {
    return (
        <button className={cn(styles.button, {
            [styles.primary]: variant === 'primary',
            [styles.secondary]: variant === 'secondary',
            [styles.icon]: variant === 'icon',
        }, className)}
                type={'button'}
                {...props}
        >
            {iconName ? <Icon name={iconName} /> : children}
        </button>
    );
};

export default Button;
