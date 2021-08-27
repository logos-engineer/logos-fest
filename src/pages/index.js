import Head from 'next/head';
import Layout from '@/components/Layout/Layout';
import Button from '@/components/Common/Button';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="bg-pink-500 w-full py-20">
          <Button variant="primary">Example</Button>
          <Button variant="secondary" className="ml-4">
            Example
          </Button>
        </div>
      </Layout>
    </div>
  );
}
