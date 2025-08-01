import Head from 'next/head';
import Navbar from '../../components/Navbar';

export default function SEOServices() {
  return (
    <>
      <Head>
        <title>SEO Services - Next.js App</title>
        <meta name="description" content="SEO optimization services" />
      </Head>
      <div className="page">
        <Navbar />
        <main className="main-content">
          <div className="container">
            <h1>SEO Services</h1>
            <p>Improve your website's visibility and ranking in search engines with our comprehensive SEO services.</p>
            
            <div className="seo-content">
              <div className="seo-services">
                <h2>Our SEO Services</h2>
                <div className="service-list">
                  <div className="service-item">
                    <h3>Technical SEO</h3>
                    <p>Optimize your website's technical foundation for better search engine crawling and indexing.</p>
                  </div>
                  <div className="service-item">
                    <h3>On-Page SEO</h3>
                    <p>Optimize content, meta tags, and internal linking structure.</p>
                  </div>
                  <div className="service-item">
                    <h3>Off-Page SEO</h3>
                    <p>Build quality backlinks and improve domain authority.</p>
                  </div>
                  <div className="service-item">
                    <h3>Local SEO</h3>
                    <p>Optimize for local search results and Google My Business.</p>
                  </div>
                </div>
              </div>
              
              <div className="seo-benefits">
                <h2>Benefits of SEO</h2>
                <ul>
                  <li>Increased organic traffic</li>
                  <li>Better search engine rankings</li>
                  <li>Improved user experience</li>
                  <li>Long-term sustainable results</li>
                  <li>Cost-effective marketing strategy</li>
                </ul>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
} 