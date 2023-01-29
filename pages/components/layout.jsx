import Head from 'next/head';

export default function Layout({ children }) {
    return (
        <div>
            <Head>
                <title>TCode Helper</title>
            </Head>
            {children}
        </div>
    );
}