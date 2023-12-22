import type { NextPage } from 'next';
import styles from './style.module.scss';
import Header from 'components/commons/Header';
import HeroSection from 'components/sections/HeroSection';
import IntroSection from 'components/sections/IntroSection';
import MyWorkSection from 'components/sections/MyWorkSection';
import CTASection from 'components/sections/CTASection';

const Home: NextPage = () => {
    return (
        <>
            <Header />
            <main className={styles.main}>
                <HeroSection />
                <IntroSection />
                <MyWorkSection />
                <CTASection />
            </main>
            <Header type={'footer'} />
        </>
    );
};

export default Home
