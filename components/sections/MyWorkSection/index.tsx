import React, { HTMLAttributes } from 'react';
import styles from './style.module.scss';
import cn from 'classnames';
import Title from 'components/commons/Typography/Title';
import Container from 'components/commons/Container';
import Slider from 'components/commons/Slider';
import Image from 'next/image';

interface IProps extends HTMLAttributes<HTMLDivElement> {

}

const MyWorkSection: React.FC<IProps> = ({ className, ...props }) => {
    return (
        <div className={cn(styles.myWorkSection, className)} {...props}>
            <Container className={styles.container}>
                <Title level={3}
                       size={'small'}
                       textAlign={'center'}
                >
                    My Work
                </Title>
            </Container>
            <div>
                <Slider settings={{
                    initialSlide: 2,
                }}>
                    {Array.from({ length: 5 }).map((_, index) => (
                        <div className={styles.slide}
                             key={index}
                        >
                            <Image className={styles.image}
                                   src={`/img/slides/image-slide-${index+1}.jpg`}
                                   alt={''}
                                   width={540}
                                   height={360}
                            />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default MyWorkSection;
