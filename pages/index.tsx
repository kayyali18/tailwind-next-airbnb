import Banner from '@/components/Banner';
import LargeCard from '@/components/Cards/LargeCard';
import MediumCard from '@/components/Cards/MediumCard';
import SmallCard from '@/components/Cards/SmallCard';
import Header from '@/components/Header/';
import type { NextPage } from 'next';
import Head from 'next/head';

export type ExploreDataType = {
  img: string;
  location: string;
  distance: string;
};

export type CardsDataType = {
  img: string;
  title: string;
};

export type LargeCardDataType = {
  img: string;
  title: string;
  description: string;
  btnText: string;
};
export interface IHomePageWithData {
  exploreData: ExploreDataType[];
  cardsData: CardsDataType[];
}

const Home: NextPage<IHomePageWithData> = ({ exploreData, cardsData }) => {
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

      <main className="mx-auto max-w-7xl px-8 sm:px-16">
        {/* Explore Data */}
        <section className="pt-5">
          <h2 className="pb-5 text-4xl font-semibold">Explore Nearby</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map((item) => (
              <SmallCard key={item.location} {...item} />
            ))}
          </div>
        </section>

        {/* Cards Data */}

        <section className="">
          <h2 className="py-8 text-4xl font-semibold">Live Anywhere</h2>

          <div className="-ml-3 flex space-x-3 overflow-scroll p-3 scrollbar-hide">
            {cardsData?.map((item) => (
              <MediumCard key={item.title} {...item} />
            ))}
          </div>
        </section>

        {/* Large Cards */}
        <LargeCard
          img="https://images.unsplash.com/photo-1598997898925-cfb4b5106f4b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
          title="The Great Outdoors"
          description="Bamboo Forest - Kyoto, Japan"
          btnText="Get Inspired"
        />
      </main>
    </div>
  );
};

export default Home;

export async function getStaticProps() {
  let exploreData = await fetch('https://www.jsonkeeper.com/b/4G1G');
  exploreData = await exploreData.json();

  let cardsData = await fetch('https://www.jsonkeeper.com/b/VHHT');
  cardsData = await cardsData.json();

  return {
    props: {
      exploreData,
      cardsData,
    },
  };
}
