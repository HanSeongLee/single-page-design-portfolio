import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { Plus_Jakarta_Sans } from 'next/font/google';

const PlusJakartaSansFont = Plus_Jakarta_Sans({
  weight: ['500', '700'],
  subsets: ['latin-ext'],
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <>
        <style jsx global>{`
            :root {
              --plus-jakarta-sans-font: ${PlusJakartaSansFont.style.fontFamily};
            }
        `}
        </style>
        <Component {...pageProps} />
      </>
  );
}

export default MyApp
