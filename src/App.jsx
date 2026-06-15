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
          <p>I'm a Computing Science new graduate at Simon Fraser University,
            with a focus on full-stack development, machine learning, and robotics.</p>
          <p>I enjoy working across the stack — from building REST APIs with Spring Boot and
            React frontends, to fine-tuning transformer models for NLP tasks, to implementing
            autonomous motion planning algorithms for robots in ROS2 and Gazebo. Recent projects
            include a course scheduling system that cut admin scheduling time by 50%, a
            fine-tuned BART model for emotion-controlled text generation, and a TurtleBot3
            navigation system comparing RRT, RRT*, and PRM path planners.</p>
          <p>
            I'm comfortable with Python, Java, C/C++, JavaScript/TypeScript, and tools like
            PyTorch, TensorFlow, Docker, and AWS. I hold an AWS Cloud Practitioner certification
            and am always looking for opportunities to apply machine learning and software
            engineering to real-world problems.
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