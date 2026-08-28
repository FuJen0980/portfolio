import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Projects from './components/Projects'

function App() {
  const certifications = [
    {
      title: "AWS Certified Solutions Architect – Associate",
      issuer: "Amazon Web Services",
      date: "2026",
      badgeClass: "badge-aws-saa",
      // Optional: replace with your Credly verification link
      verifyUrl: "https://www.credly.com/badges/db3f6ae2-4513-489d-b4af-5b5f2793168a/public_url" 
    },
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "2025",
      badgeClass: "badge-aws-cp",
      verifyUrl: "https://www.credly.com/badges/2b1cf5e5-0729-483e-b900-8f391fbc5c72/public_url"
    }
  ]

  return (
    <>
      <Navbar />
      <main>
        <section id="home" className="hero">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="eyebrow">open to opportunities</div>
            <h1>Hi, I'm <span className="highlight">Jeff Chiang</span> —<br />a software developer.</h1>
            <p>Recent Computing Science grad from Simon Fraser University, focused on
              full-stack development, machine learning, and robotics.</p>
          </motion.div>
        </section>

        <Projects />

        <section id="about">
          <div className="section-eyebrow">// 03 about</div>
          <h2>About Me</h2>
          <p>I'm a Computing Science new graduate from Simon Fraser University, specializing in software engineering, machine learning, and AI robotics.</p>
          <p>I enjoy working across the stack — from building REST APIs with Spring Boot and React frontends, to fine-tuning transformer models for NLP, to building deep learning computer vision pipelines, to implementing autonomous motion planning algorithms in ROS2. Recent projects include a geospatial OSM Proximity Population analyzer for Greater Vancouver, an AI framework for predicting Image Dependent Annotation Variability in medical segmentation, a ROS2/C++ motion planning system evaluating RRT, RRT*, PRM, and goal-biased path planners, a fine-tuned BART model for emotion-controlled text rewriting, and the Fraser International College Scheduler platform that cut admin setup time by 50%.</p>
          <p>
            I'm comfortable with Python, C/C++, Java, JavaScript/TypeScript, and tools like PyTorch, ROS2, Docker, and AWS. I hold AWS Solutions Architect – Associate and AWS Cloud Practitioner certifications, and I am always looking for opportunities to apply machine learning and software engineering to real-world problems.
          </p>
        </section>

        <section id="certifications">
          <div className="section-eyebrow">// 04 certifications</div>
          <h2>Certifications</h2>
          <div className="certifications-grid">
            {certifications.map((cert, index) => (
              <a 
                key={index}
                href={cert.verifyUrl}
                target="_blank"
                rel="noreferrer"
                className="cert-card"
              >
                <div className="cert-badge-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="8" r="7"></circle>

                    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>

                  </svg>
                </div>
                <div className="cert-info">
                  <h3>{cert.title}</h3>
                  <p>{cert.issuer} · {cert.date}</p>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section id="contact">
          <div className="section-eyebrow">// 05 contact</div>
          <h2>Get in Touch</h2>
          <p>Email: chiangjeff23@gmail.com</p>
          <p>
            <a href="https://github.com/FuJen0980" target="_blank" rel="noreferrer">GitHub</a>
            {' '}·{' '}
            <a href="https://www.linkedin.com/in/jeff-chiang-5b7025253/" target="_blank" rel="noreferrer">LinkedIn</a>
          </p>
        </section>
      </main>
    </>
  )
}

export default App