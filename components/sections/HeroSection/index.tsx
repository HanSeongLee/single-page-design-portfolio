import React, { HTMLAttributes } from 'react';
import styles from './style.module.scss';
import cn from 'classnames';
import Container from 'components/commons/Container';
import Title from 'components/commons/Typography/Title';
import Paragraph from 'components/commons/Typography/Paragraph';
import CardList from 'components/commons/CardList';
import { CARD_LIST_ITEMS } from 'constants/data';

interface IProps extends HTMLAttributes<HTMLDivElement> {

}

const HeroSection: React.FC<IProps> = ({ className, ...props }) => {
    return (
        <section className={cn(styles.heroSection, className)}
             {...props}
        >
            <Container className={styles.container}>
                <Title level={1}
                       size={'large'}
                       textAlign={'center'}
                       marginBottom={[16, 27, 23]}
                >
                    Design solutions made easy
                </Title>
                <Paragraph width={[285, 573, 730]} marginBottom={[32, 64, 80]} textAlign={'center'}>
                    With over ten years of experience in various design disciplines, I’m your one-stop shop for your design needs.
                </Paragraph>

                <CardList items={CARD_LIST_ITEMS} />
            </Container>
        </section>
    );
};

export default HeroSection;
