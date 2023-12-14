import React, { AnchorHTMLAttributes } from 'react';
import styles from './style.module.scss';
import cn from 'classnames';
import Link from 'next/link';

import LogoSvg from 'public/logo.svg';

interface IProps extends AnchorHTMLAttributes<HTMLAnchorElement> {

}

const Logo: React.FC<IProps> = ({ className, ...props }) => {
    return (
        <Link className={cn(styles.logo, className)}
              href={'/'}
              title={process?.env?.NEXT_PUBLIC_TITLE}
        >
            <LogoSvg />
        </Link>
    );
};

export default Logo;
