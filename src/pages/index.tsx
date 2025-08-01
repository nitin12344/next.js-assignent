import Head from 'next/head';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <>
      <Head>
        <title>Nitin Dekaliya - Full Stack Developer</title>
        <meta name="description" content="Professional portfolio and services by Nitin Dekaliya, B.Tech CSE student at Rai University" />
      </Head>
      <div className="page">
        <Navbar />
        <main className="main-content">
          <div className="container">
            <div className="hero-section">
              <h1>Welcome to My Portfolio</h1>
              <p>Hi, I'm <strong>Nitin Dekaliya</strong>, a passionate B.Tech CSE student at Rai University specializing in Full Stack Development with Next.js.</p>
              <div className="hero-buttons">
                <a href="/about" className="btn btn-primary">About Me</a>
                <a href="/services" className="btn btn-secondary">My Services</a>
              </div>
            </div>
            
            <div className="features-section">
              <h2>My Expertise</h2>
              <div className="features-grid">
                <div className="feature-card">
                  <h3>Full Stack Development</h3>
                  <p>Comprehensive web development solutions using modern technologies and best practices.</p>
                </div>
                <div className="feature-card">
                  <h3>Next.js Applications</h3>
                  <p>Building responsive, scalable applications with Next.js and React ecosystem.</p>
                </div>
                <div className="feature-card">
                  <h3>Modern UI/UX</h3>
                  <p>Creating beautiful, user-friendly interfaces with attention to design and accessibility.</p>
                </div>
                <div className="feature-card">
                  <h3>Professional Solutions</h3>
                  <p>Delivering high-quality, production-ready applications for businesses and individuals.</p>
                </div>
              </div>
            </div>
            
            <div className="cta-section">
              <h2>Ready to Start Your Project?</h2>
              <p>Let's discuss how I can help bring your ideas to life with professional web development solutions.</p>
              <a href="/contact" className="btn btn-primary">Get In Touch</a>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
