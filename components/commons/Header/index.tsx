import React, { createElement, HTMLAttributes } from 'react';
import styles from './style.module.scss';
import cn from 'classnames';
import Container from 'components/commons/Container';
import Logo from 'components/commons/Logo';
import Button from 'components/commons/Button';

interface IProps extends HTMLAttributes<HTMLHeadElement> {
    type?: 'header' | 'footer';
}

const Header: React.FC<IProps> = ({ type = 'header', children, className, ...props }) => {
    return createElement(type, {
        className: cn({
            [styles.header]: type === 'header',
            [styles.footer]: type === 'footer',
        }, className),
        ...props,
        children: (
            <Container className={styles.container}>
                <Logo />
                <Button>
                    Free Consultation
                </Button>
            </Container>
        ),
    })
};

export default Header;
