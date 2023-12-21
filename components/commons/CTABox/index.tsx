import React, { HTMLAttributes } from 'react';
import styles from './style.module.scss';
import cn from 'classnames';
import Title from 'components/commons/Typography/Title';
import Paragraph from 'components/commons/Typography/Paragraph';
import Button from 'components/commons/Button';
import { COLORS } from 'styles/colors';

interface IProps extends HTMLAttributes<HTMLDivElement> {

}

const CTABox: React.FC<IProps> = ({ className, ...props }) => {
    return (
        <div className={cn(styles.box, className)}
             {...props}
        >
            <div className={styles.content}>
                <Title level={3}
                       size={'medium'}
                       color={COLORS.LIGHT_CREAM}
                >
                    Book a call with me
                </Title>
                <Paragraph color={COLORS.LIGHT_CREAM}>
                    I’d love to have a chat to see how I can help you. The best first step is for us to discuss your
                    project during a free consultation. Then we can move forward from there.
                </Paragraph>
            </div>
            <Button variant={'secondary'}>
                Free Consultation
            </Button>
        </div>
    );
};

export default CTABox;
