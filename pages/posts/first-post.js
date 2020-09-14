import Link from 'next/link'
import Head from 'next/head'

export default function FirstPost() {
    return (
        <>
            <div>
                <Head>
                    <title>First Post</title>
                    <meta property="og:title" content="My page title" key="title" />
                </Head>
                <Head>
                    <meta property="og:title" content="My new title" key="title" />
                </Head>
                <Head>
                    <script src="https://cdn.jwplayer.com/libraries/RFtywljC.js"></script>
                </Head>
                <p>Hello world!</p>
                <h1>First Post</h1>
                <h2>
                    <Link href="/">
                        <a>Back to home</a>
                    </Link>
                </h2>
            </div>
        </>
    )
}