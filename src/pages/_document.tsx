import { Html, Head, Main, NextScript } from 'next/document';

const MyDocument = () => {
  return (
    <Html className='h-[100%] bg-[#f3ebdf]'>
      <Head>
        <meta name='application-name' content='MyApp' />
      </Head>
      <body className='h-[100%]'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default MyDocument;
