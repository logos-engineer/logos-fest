import Hero from '@/components/JusticeTalk/Hero';
import TalkLists from '@/components/JusticeTalk/TalkLists';
import Layout from '@/components/Layout/Layout';

const Talks = () => {
  return (
    <Layout>
      <section id="justice-bootccamp" className="pt-120px w-full">
        <Hero />
        <TalkLists />
      </section>
    </Layout>
  );
};

export default Talks;
