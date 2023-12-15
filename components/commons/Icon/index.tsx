import React, { HTMLAttributes } from 'react';
import styles from './style.module.scss';
import cn from 'classnames';
import { IconName, ICONS } from 'constants/Icons';

interface IProps extends HTMLAttributes<HTMLSpanElement> {
    name: IconName;
}

const Icon: React.FC<IProps> = ({ name, className, ...props }) => {
    return (
        <span className={cn(styles.icon, className)}
              {...props}
        >
            {ICONS[name]}
        </span>
    );
};

export default Icon;
