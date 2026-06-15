import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

function ProjectCard({ project, index }) {
  const [showPoster, setShowPoster] = useState(false)

  return (
    <>
      <motion.div
        className="project-card"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: index * 0.1 }}
      >
        <div className="card-header">
          <span className="traffic-light tl-red"></span>
          <span className="traffic-light tl-yellow"></span>
          <span className="traffic-light tl-green"></span>
        </div>

        {project.demo ? (
          <video
            className="card-video"
            src={project.demo}
            autoPlay
            loop
            muted
            playsInline
          />
        ) : (
          project.images && project.images.length > 0 && (
            <div className="card-images">
              {project.images.map((src, i) => (
                <img key={i} src={src} alt={`${project.title} screenshot ${i + 1}`} />
              ))}
            </div>
          )
        )}

        <div className="card-body">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <div className="tech-list">
            {project.tech.map((t) => (
              <span key={t} className="tech-badge">{t}</span>
            ))}
          </div>
          <div className="links">
            <a href={project.github} target="_blank" rel="noreferrer">→ Source</a>
            {project.poster && (
              <button className="poster-button" onClick={() => setShowPoster(true)}>
                View poster
              </button>
            )}
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {showPoster && (
          <motion.div
            className="poster-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowPoster(false)}
          >
            <motion.div
              className="poster-modal"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="poster-close" onClick={() => setShowPoster(false)}>✕</button>
              <iframe src={project.poster} title={`${project.title} poster`} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default ProjectCard