import Head from 'next/head';
import Navbar from '../../../components/Navbar';

export default function MEANStack() {
  return (
    <>
      <Head>
        <title>MEAN Stack - Next.js App</title>
        <meta name="description" content="MEAN stack development services" />
      </Head>
      <div className="page">
        <Navbar />
        <main className="main-content">
          <div className="container">
            <h1>MEAN Stack Development</h1>
            <p>Create robust enterprise applications with MongoDB, Express.js, Angular, and Node.js.</p>
            
            <div className="mean-content">
              <div className="tech-overview">
                <h2>Technology Overview</h2>
                <div className="tech-components">
                  <div className="tech-component">
                    <h3>MongoDB</h3>
                    <p>Document-based NoSQL database</p>
                  </div>
                  <div className="tech-component">
                    <h3>Express.js</h3>
                    <p>Minimal and flexible Node.js web framework</p>
                  </div>
                  <div className="tech-component">
                    <h3>Angular</h3>
                    <p>Comprehensive frontend framework with TypeScript</p>
                  </div>
                  <div className="tech-component">
                    <h3>Node.js</h3>
                    <p>JavaScript runtime for server-side execution</p>
                  </div>
                </div>
              </div>
              
              <div className="benefits">
                <h2>Benefits of MEAN Stack</h2>
                <ul>
                  <li>TypeScript support for better development experience</li>
                  <li>Comprehensive framework with built-in features</li>
                  <li>Excellent for large-scale applications</li>
                  <li>Strong typing and better maintainability</li>
                  <li>Enterprise-grade architecture</li>
                </ul>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
} 