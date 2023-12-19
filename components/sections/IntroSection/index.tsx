import React, { HTMLAttributes } from 'react';
import styles from './style.module.scss';
import cn from 'classnames';
import Container from 'components/commons/Container';
import Title from 'components/commons/Typography/Title';
import Paragraph from 'components/commons/Typography/Paragraph';
import Button from 'components/commons/Button';
import Image from 'next/image';

interface IProps extends HTMLAttributes<HTMLDivElement> {

}

const IntroSection: React.FC<IProps> = ({ className, ...props }) => {
    return (
        <section className={cn(styles.introSection, className)}
                 {...props}
        >
            <Container className={styles.container}>
                <Image className={styles.avatar}
                       src={'/img/image-amy.webp'}
                       alt={'Amy'}
                       width={890}
                       height={890}
                />
                <div className={styles.content}>
                    <Title level={2}
                           size={'medium'}
                    >
                        I’m Amy, and I’d love to work on your next project
                    </Title>
                    <Paragraph>
                        I love working with others to create beautiful design solutions. I’ve designed everything from
                        brand illustrations to complete mobile apps. I’m also handy with a camera!
                    </Paragraph>
                    <Button variant={'secondary'}>
                        Free Consultation
                    </Button>
                </div>
            </Container>
        </section>
    );
};

export default IntroSection;
