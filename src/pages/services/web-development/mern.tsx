import Head from 'next/head';
import Navbar from '../../../components/Navbar';

export default function MERNStack() {
  return (
    <>
      <Head>
        <title>MERN Stack - Next.js App</title>
        <meta name="description" content="MERN stack development services" />
      </Head>
      <div className="page">
        <Navbar />
        <main className="main-content">
          <div className="container">
            <h1>MERN Stack Development</h1>
            <p>Build powerful full-stack applications with MongoDB, Express.js, React.js, and Node.js.</p>
            
            <div className="mern-content">
              <div className="tech-overview">
                <h2>Technology Overview</h2>
                <div className="tech-components">
                  <div className="tech-component">
                    <h3>MongoDB</h3>
                    <p>NoSQL database for flexible data storage</p>
                  </div>
                  <div className="tech-component">
                    <h3>Express.js</h3>
                    <p>Web application framework for Node.js</p>
                  </div>
                  <div className="tech-component">
                    <h3>React.js</h3>
                    <p>Frontend library for building user interfaces</p>
                  </div>
                  <div className="tech-component">
                    <h3>Node.js</h3>
                    <p>JavaScript runtime for server-side development</p>
                  </div>
                </div>
              </div>
              
              <div className="benefits">
                <h2>Benefits of MERN Stack</h2>
                <ul>
                  <li>JavaScript throughout the stack</li>
                  <li>Rapid development and prototyping</li>
                  <li>Large community and extensive libraries</li>
                  <li>Scalable and flexible architecture</li>
                  <li>Real-time capabilities</li>
                </ul>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
} 