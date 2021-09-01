import Layout from '@/components/Layout/Layout';
import Hero from '@/components/Speaker/Hero';
import ListSpeaker from '@/components/Speaker/ListSpeaker';
import React from 'react';

const Speakers = () => {
  return (
    <Layout>
      <section id="speaker-logos" className="pt-120px w-full">
        <Hero />
        <ListSpeaker />
      </section>
    </Layout>
  );
};

export default Speakers;
