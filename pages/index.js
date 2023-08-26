import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>What is your first impression as a 3rd year CPE Student?</p>
        <p>My first impression as  a 3rd year CPE student is that I would be working
          more on the major subjects and trying to implement the learning to a real life
          scenarios.
        </p>
        <p>
          I know now how to update my website!
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}