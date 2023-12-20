import React, { HTMLAttributes } from 'react';
import styles from './style.module.scss';
import cn from 'classnames';
import ReactSlick, { Settings } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Button from 'components/commons/Button';
import { IconName } from 'constants/Icons';

interface IProps extends HTMLAttributes<HTMLDivElement> {
    settings?: Settings;
}

const Slider: React.FC<IProps> = ({ settings = {}, className, children, ...props }) => {
    const slickRef = React.useRef<ReactSlick>(null);
    const initialSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        variableWidth: true,
        adaptiveHeight: true,
        ...settings,
        arrows: false,
    };

    const handlePrevious = () => {
        slickRef.current?.slickPrev();
    };

    const handleNext = () => {
        slickRef.current?.slickNext();
    };

    return (
        <div className={cn(styles.slider, className)}
             {...props}
        >
            <ReactSlick ref={slickRef}
                        {...initialSettings}
            >
                {children}
            </ReactSlick>
            <div className={styles.buttonContainer}>
                <Button variant={'icon'}
                        iconName={IconName.ArrowLeft}
                        aria-label={'Previous'}
                        onClick={handlePrevious}
                />
                <Button variant={'icon'}
                        iconName={IconName.ArrowRight}
                        aria-label={'Next'}
                        onClick={handleNext}
                />
            </div>
        </div>
    );
};

export default Slider;
