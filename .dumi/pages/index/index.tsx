import React from 'react';
import Banner from './components/Banner';
import BannerRecommends from './components/BannerRecommends';

const Homepage: React.FC = () => {
  return (
    <section
      style={{
        minHeight: 'calc(100vh - 128px)',
      }}
    >
      <Banner />
      <BannerRecommends />
    </section>
  );
};

export default Homepage;
