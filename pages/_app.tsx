import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
import localFont from "next/font/local";
import { Inter } from 'next/font/google';
import "../styles/global.css";
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';

const interFont = Inter({
    subsets: ["latin"],
    variable: '--inter-font',
    weight: ['400', '500', '600', '700', '800', '900']
});

const raxon = localFont({
    src: [
        {
            path: "../public/raxonRegular.woff2",
        },
    ],
});

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Theme>
                <style jsx global>
                    {`
                    :root {
                    --raxon-font: ${raxon.style.fontFamily};
                    --inter-font: ${interFont.style.fontFamily};
                    }
                `}
                </style>
                <Component {...pageProps} />
            </Theme>
        </>
    )
}