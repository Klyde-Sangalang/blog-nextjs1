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
        <h2><b>Manifesto for agile Software Development</b></h2><br></br>
              
          <h3>We are uncovering better ways of developing</h3></br>
          <h3>software by doing it and helping others do it.</h3></br>
          <h3>Through this work we have come to value:</h3></br>
    <h2><b>Individuals and interactions</b> over processes and tools<h2></br>
    <h2><b>Working software</b> over comprehensive documentation<h2></br>
    <h2><b>Customer collaboration</b> over contract<h2></br>
    <h2><b>Responding to change</b> over following a plan<h2></br>
    </br>
    <h2>That is, while there is value in the items on </br>
    the right, we value the items on the left more. </h2>
        
      </section>
    </Layout>
  );
}
