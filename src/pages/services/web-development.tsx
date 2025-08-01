import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../../components/Navbar';

export default function WebDevelopment() {
  return (
    <>
      <Head>
        <title>Web Development - Next.js App</title>
        <meta name="description" content="Web development services" />
      </Head>
      <div className="page">
        <Navbar />
        <main className="main-content">
          <div className="container">
            <h1>Web Development Services</h1>
            <p>We specialize in creating modern, responsive web applications using cutting-edge technologies.</p>
            
            <div className="web-dev-content">
              <div className="tech-stack">
                <h2>Our Technology Stacks</h2>
                <div className="tech-grid">
                  <div className="tech-card">
                    <h3>MERN Stack</h3>
                    <p>MongoDB, Express.js, React.js, Node.js</p>
                    <ul>
                      <li>Full-stack JavaScript development</li>
                      <li>Real-time applications</li>
                      <li>Scalable architecture</li>
                    </ul>
                    <Link href="/services/web-development/mern" className="btn btn-secondary">
                      Learn More
                    </Link>
                  </div>
                  
                  <div className="tech-card">
                    <h3>MEAN Stack</h3>
                    <p>MongoDB, Express.js, Angular, Node.js</p>
                    <ul>
                      <li>Enterprise-grade applications</li>
                      <li>TypeScript support</li>
                      <li>Robust framework</li>
                    </ul>
                    <Link href="/services/web-development/mean" className="btn btn-secondary">
                      Learn More
                    </Link>
                  </div>
                  
                  <div className="tech-card">
                    <h3>.NET Stack</h3>
                    <p>ASP.NET Core, C#, SQL Server</p>
                    <ul>
                      <li>Microsoft ecosystem</li>
                      <li>High performance</li>
                      <li>Enterprise security</li>
                    </ul>
                    <Link href="/services/web-development/dotnet" className="btn btn-secondary">
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
} 