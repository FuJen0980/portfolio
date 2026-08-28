import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Projects from './components/Projects'

function App() {
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

        <section id="contact">
          <div className="section-eyebrow">// 04 contact</div>
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