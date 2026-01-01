import React from 'react';
import './LandingPage.css';

const LandingPage = () => {
  // Function to handle the "Get Started Today" button click
  const handleGetStarted = () => {
    // You can add any functionality here, for example:
    alert('Welcome! Let\'s get started with your journey.');
  };

  return (
    <main className="landing-page">
      {/* Hero Section */}
      <img src="/assets/adult-kid-reading.jpg" alt="Kids Studying" className="landing-img" />
      <section className="hero" id="home">
        <div className="hero-content">
          <div className="hero-text">
          <h2 className="everyone-read">Where brilliant minds come to light</h2>
          </div>
          <p className="hero-subtitle">
            Professional, evidence-based tutoring services designed specifically for students with dyslexia
          </p>
          <div className="hero-buttons">
            <button className="cta-button primary" onClick={handleGetStarted}>Get Started Today</button>
            <button className="cta-button secondary">Learn More</button>
          </div>
        </div>
      </section>

      {/* About Dyslexia Section */}
      <section className="about-dyslexia" id="about">
        <div className="container">
          <h2>Understanding Dyslexia</h2>
          <div className="dyslexia-info">
            <div className="info-card">
              <h3>What is Dyslexia?</h3>
              <p>
                Dyslexia is a specific learning difference that affects reading, writing, and spelling. 
                It is neurological in origin and characterized by difficulties with accurate and fluent 
                word recognition and poor spelling abilities.
              </p>
            </div>
            
            <div className="info-card">
              <h3>Common Signs</h3>
              <ul>
                <li>Difficulty reading words accurately</li>
                <li>Slow, effortful reading</li>
                <li>Trouble with spelling</li>
                <li>Difficulty with phonological awareness</li>
                <li>Challenges with working memory</li>
                <li>Difficulty organizing thoughts in writing</li>
              </ul>
            </div>
            
            <div className="info-card">
              <h3>Key Facts</h3>
              <ul>
                <li>Affects 1 in 5 people</li>
                <li>Is genetic and hereditary</li>
                <li>Is not related to intelligence</li>
                <li>Can be successfully managed with proper support</li>
                <li>Often comes with unique strengths</li>
                <li>Is a lifelong condition</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="services-overview" id="services">
        <div className="container">
          <h2>Our Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <h3>Individual Tutoring</h3>
              <p>One-on-one sessions tailored to your child's specific needs and learning style.</p>
            </div>
            
            <div className="service-card">
              <h3>Assessment & Evaluation</h3>
              <p>Comprehensive assessments to identify strengths and areas for improvement.</p>
            </div>
            
            <div className="service-card">
              <h3>Orton-Gillingham Method</h3>
              <p>Evidence-based, structured literacy approach proven effective for dyslexia.</p>
            </div>
            
            <div className="service-card">
              <h3>Family Support</h3>
              <p>Guidance and resources for parents to support their child's learning journey.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="container">
          <h2>Ready to Get Started?</h2>
          <p>Take the first step towards unlocking your child's potential with our expert dyslexia support.</p>
          <button className="cta-button primary large">Contact Us</button>
        </div>
      </section>
    </main>
  );
};

export default LandingPage;