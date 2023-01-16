import Banner from '@/components/Banner';
import Header from '@/components/Header/';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>HawaHotels</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header />
      {/* Banner */}
      <Banner />
    </div>
  );
};

export default Home;
