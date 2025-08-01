import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../../components/Navbar';

export default function Services() {
  return (
    <>
      <Head>
        <title>Services - Next.js App</title>
        <meta name="description" content="Our services" />
      </Head>
      <div className="page">
        <Navbar />
        <main className="main-content">
          <div className="container">
            <h1>Our Services</h1>
            <p>We offer a comprehensive range of digital services to help your business grow.</p>
            
            <div className="services-grid">
              <div className="service-card">
                <h2>Web Development</h2>
                <p>Custom web applications built with modern technologies.</p>
                <Link href="/services/web-development" className="btn btn-secondary">
                  Learn More
                </Link>
              </div>
              
              <div className="service-card">
                <h2>SEO Services</h2>
                <p>Search engine optimization to improve your online visibility.</p>
                <Link href="/services/seo" className="btn btn-secondary">
                  Learn More
                </Link>
              </div>
              
              <div className="service-card">
                <h2>Consulting</h2>
                <p>Strategic consulting to optimize your digital presence.</p>
                <Link href="/services/consulting" className="btn btn-secondary">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
} 