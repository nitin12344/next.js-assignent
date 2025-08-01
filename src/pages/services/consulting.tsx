import Head from 'next/head';
import Navbar from '../../components/Navbar';

export default function ConsultingServices() {
  return (
    <>
      <Head>
        <title>Consulting Services - Next.js App</title>
        <meta name="description" content="Digital consulting services" />
      </Head>
      <div className="page">
        <Navbar />
        <main className="main-content">
          <div className="container">
            <h1>Consulting Services</h1>
            <p>Strategic digital consulting to help your business thrive in the digital landscape.</p>
            
            <div className="consulting-content">
              <div className="consulting-services">
                <h2>Our Consulting Services</h2>
                <div className="service-list">
                  <div className="service-item">
                    <h3>Digital Strategy</h3>
                    <p>Develop comprehensive digital strategies aligned with your business goals.</p>
                  </div>
                  <div className="service-item">
                    <h3>Technology Assessment</h3>
                    <p>Evaluate your current technology stack and recommend improvements.</p>
                  </div>
                  <div className="service-item">
                    <h3>Process Optimization</h3>
                    <p>Streamline your digital processes for maximum efficiency.</p>
                  </div>
                  <div className="service-item">
                    <h3>Digital Transformation</h3>
                    <p>Guide your organization through digital transformation initiatives.</p>
                  </div>
                </div>
              </div>
              
              <div className="consulting-benefits">
                <h2>Why Choose Our Consulting</h2>
                <ul>
                  <li>Expert industry knowledge</li>
                  <li>Proven methodologies</li>
                  <li>Customized solutions</li>
                  <li>Ongoing support and guidance</li>
                  <li>Measurable results</li>
                </ul>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
} 