import React, { HTMLAttributes } from 'react';
import styles from './style.module.scss';
import cn from 'classnames';
import Container from 'components/commons/Container';
import CTABox from 'components/commons/CTABox';

interface IProps extends HTMLAttributes<HTMLDivElement> {

}

const CTASection: React.FC<IProps> = ({ className, ...props }) => {
    return (
        <section className={cn(styles.ctaSection, className)}
                 {...props}
        >
            <Container>
                <CTABox />
            </Container>
        </section>
    );
};

export default CTASection;
