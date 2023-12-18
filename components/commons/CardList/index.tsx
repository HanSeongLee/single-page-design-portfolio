import React, { HTMLAttributes } from 'react';
import styles from './style.module.scss';
import cn from 'classnames';
import Card, { ICardProps } from 'components/commons/Card';

interface IProps extends HTMLAttributes<HTMLUListElement> {
    items: ICardProps[];
}

const CardList: React.FC<IProps> = ({ items, className, ...props }) => {
    return (
        <ul className={cn(styles.cardList, className)}
            {...props}
        >
            {items.map((item, index) => (
                <li key={index}>
                    <Card {...item} />
                </li>
            ))}
        </ul>
    );
};

export default CardList;
