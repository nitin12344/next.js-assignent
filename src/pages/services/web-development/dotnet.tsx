import Head from 'next/head';
import Navbar from '../../../components/Navbar';

export default function DotNetStack() {
  return (
    <>
      <Head>
        <title>.NET Stack - Next.js App</title>
        <meta name="description" content=".NET stack development services" />
      </Head>
      <div className="page">
        <Navbar />
        <main className="main-content">
          <div className="container">
            <h1>.NET Stack Development</h1>
            <p>Build high-performance applications with ASP.NET Core, C#, and SQL Server.</p>
            
            <div className="dotnet-content">
              <div className="tech-overview">
                <h2>Technology Overview</h2>
                <div className="tech-components">
                  <div className="tech-component">
                    <h3>ASP.NET Core</h3>
                    <p>Cross-platform web framework for .NET</p>
                  </div>
                  <div className="tech-component">
                    <h3>C#</h3>
                    <p>Modern, type-safe programming language</p>
                  </div>
                  <div className="tech-component">
                    <h3>SQL Server</h3>
                    <p>Reliable relational database management system</p>
                  </div>
                  <div className="tech-component">
                    <h3>Entity Framework</h3>
                    <p>Object-relational mapping framework</p>
                  </div>
                </div>
              </div>
              
              <div className="benefits">
                <h2>Benefits of .NET Stack</h2>
                <ul>
                  <li>High performance and scalability</li>
                  <li>Strong typing and compile-time safety</li>
                  <li>Excellent tooling and IDE support</li>
                  <li>Enterprise-grade security features</li>
                  <li>Cross-platform development capabilities</li>
                </ul>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
} 