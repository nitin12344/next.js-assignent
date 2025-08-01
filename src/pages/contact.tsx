import Head from 'next/head';
import Navbar from '../components/Navbar';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact - Nitin Dekaliya</title>
        <meta name="description" content="Get in touch with Nitin Dekaliya for web development projects and collaborations" />
      </Head>
      <div className="page">
        <Navbar />
        <main className="main-content">
          <div className="container">
            <h1>Get In Touch</h1>
            <p>I'm always excited to discuss new projects, opportunities, or collaborations. Let's connect and bring your ideas to life!</p>
            
            <div className="contact-content">
              <div className="contact-info">
                <h2>Contact Information</h2>
                <div className="contact-item">
                  <strong>Name:</strong> Nitin Dekaliya
                </div>
                <div className="contact-item">
                  <strong>Email:</strong> nitin.dekaliya@example.com
                </div>
                <div className="contact-item">
                  <strong>Phone:</strong> +91 98765 43210
                </div>
                <div className="contact-item">
                  <strong>Location:</strong> Gujarat, India
                </div>
                <div className="contact-item">
                  <strong>Education:</strong> B.Tech CSE, Rai University
                </div>
                <div className="contact-item">
                  <strong>Available for:</strong> Freelance Projects, Internships, Collaborations
                </div>
              </div>
              
              <div className="contact-form">
                <h2>Send Me a Message</h2>
                <form>
                  <div className="form-group">
                    <label htmlFor="name">Your Name *</label>
                    <input type="text" id="name" name="name" placeholder="Enter your full name" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input type="email" id="email" name="email" placeholder="Enter your email address" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="subject">Subject *</label>
                    <input type="text" id="subject" name="subject" placeholder="What is this regarding?" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="project-type">Project Type</label>
                    <select id="project-type" name="project-type">
                      <option value="">Select project type</option>
                      <option value="web-development">Web Development</option>
                      <option value="frontend">Frontend Development</option>
                      <option value="backend">Backend Development</option>
                      <option value="fullstack">Full Stack Development</option>
                      <option value="consultation">Consultation</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="budget">Budget Range</label>
                    <select id="budget" name="budget">
                      <option value="">Select budget range</option>
                      <option value="under-10k">Under ₹10,000</option>
                      <option value="10k-25k">₹10,000 - ₹25,000</option>
                      <option value="25k-50k">₹25,000 - ₹50,000</option>
                      <option value="50k-100k">₹50,000 - ₹1,00,000</option>
                      <option value="over-100k">Over ₹1,00,000</option>
                      <option value="discuss">Let's discuss</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Project Details *</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      rows="6" 
                      placeholder="Please describe your project requirements, goals, and any specific features you need..."
                      required
                    ></textarea>
                  </div>
                  <div className="form-group">
                    <label htmlFor="timeline">Timeline</label>
                    <select id="timeline" name="timeline">
                      <option value="">Select timeline</option>
                      <option value="asap">ASAP</option>
                      <option value="1-2-weeks">1-2 weeks</option>
                      <option value="1-month">1 month</option>
                      <option value="2-3-months">2-3 months</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  </div>
                  <button type="submit" className="btn btn-primary">Send Message</button>
                </form>
              </div>
            </div>
            
            <div className="additional-info">
              <h2>Why Choose Me?</h2>
              <div className="info-grid">
                <div className="info-item">
                  <h3>🎓 Academic Excellence</h3>
                  <p>Currently pursuing B.Tech CSE with strong foundation in computer science principles.</p>
                </div>
                <div className="info-item">
                  <h3>💻 Modern Technologies</h3>
                  <p>Proficient in latest web development technologies including Next.js, React, and more.</p>
                </div>
                <div className="info-item">
                  <h3>🎨 Creative Solutions</h3>
                  <p>Focus on creating innovative, user-friendly, and visually appealing web applications.</p>
                </div>
                <div className="info-item">
                  <h3>🤝 Professional Approach</h3>
                  <p>Clear communication, timely delivery, and ongoing support for all projects.</p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
} 