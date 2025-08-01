import Head from 'next/head';
import Navbar from '../components/Navbar';

export default function About() {
  return (
    <>
      <Head>
        <title>About - Nitin Dekaliya</title>
        <meta name="description" content="Learn more about Nitin Dekaliya, B.Tech CSE student at Rai University" />
      </Head>
      <div className="page">
        <Navbar />
        <main className="main-content">
          <div className="container">
            <h1>About Me</h1>
            <p>Hello! I'm <strong>Nitin Dekaliya</strong>, a dedicated B.Tech Computer Science and Engineering student at Rai University. I'm passionate about creating innovative web solutions and building the future of technology.</p>
            
            <div className="about-content">
              <div className="about-section">
                <h2>My Background</h2>
                <p>Currently pursuing my B.Tech in Computer Science and Engineering at Rai University, I've developed a strong foundation in programming, web development, and software engineering principles. My academic journey has equipped me with both theoretical knowledge and practical skills needed in today's dynamic tech industry.</p>
              </div>
              
              <div className="about-section">
                <h2>Technical Skills</h2>
                <ul>
                  <li><strong>Frontend:</strong> React.js, Next.js, HTML5, CSS3, JavaScript/TypeScript</li>
                  <li><strong>Backend:</strong> Node.js, Express.js, Python, Java</li>
                  <li><strong>Database:</strong> MongoDB, MySQL, PostgreSQL</li>
                  <li><strong>Tools:</strong> Git, VS Code, Postman, Figma</li>
                  <li><strong>Other:</strong> RESTful APIs, Responsive Design, UI/UX Principles</li>
                </ul>
              </div>
              
              <div className="about-section">
                <h2>My Approach</h2>
                <p>I believe in writing clean, maintainable code and creating user-centric solutions. Every project I work on is an opportunity to learn, grow, and deliver exceptional results. I'm committed to staying updated with the latest technologies and best practices in web development.</p>
              </div>
              
              <div className="about-section">
                <h2>Education</h2>
                <div className="education-item">
                  <h3>Bachelor of Technology in Computer Science and Engineering</h3>
                  <p><strong>Institution:</strong> Rai University</p>
                  <p><strong>Duration:</strong> 2021 - 2025 (Expected)</p>
                  <p><strong>Focus Areas:</strong> Web Development, Software Engineering, Database Management</p>
                </div>
              </div>
              
              <div className="about-section">
                <h2>What I Offer</h2>
                <ul>
                  <li>Custom web application development</li>
                  <li>Responsive and modern UI/UX design</li>
                  <li>Full-stack development solutions</li>
                  <li>Performance optimization and best practices</li>
                  <li>Ongoing support and maintenance</li>
                </ul>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
} 