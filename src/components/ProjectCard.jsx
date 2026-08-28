import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

function ProjectCard({ project, index }) {
  const [isOpen, setIsOpen] = useState(false)
  const [showPoster, setShowPoster] = useState(false)

  return (
    <>
      {/* Small Preview Card on Grid */}
      <motion.div
        className="project-card clickable"
        onClick={() => setIsOpen(true)}
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
          <p className="card-summary">{project.description}</p>
          <div className="tech-list">
            {project.tech.map((t) => (
              <span key={t} className="tech-badge">{t}</span>
            ))}
          </div>
          <span className="open-hint">Click to expand →</span>
        </div>
      </motion.div>

      {/* Expanded Project Details Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="poster-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              className="project-modal"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="poster-close" onClick={() => setIsOpen(false)}>✕</button>
              
              <h2>{project.title}</h2>

              {project.demo ? (
                <video
                  className="modal-video"
                  src={project.demo}
                  autoPlay
                  loop
                  controls
                  playsInline
                />
              ) : (
                project.images && (
                  <div className="modal-images">
                    {project.images.map((src, i) => (
                      <img key={i} src={src} alt={`${project.title} ${i + 1}`} />
                    ))}
                  </div>
                )
              )}

              <p className="modal-description">{project.description}</p>

              <div className="tech-list">
                {project.tech.map((t) => (
                  <span key={t} className="tech-badge">{t}</span>
                ))}
              </div>

              <div className="links">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noreferrer">→ Source Code</a>
                )}
                {project.report && (
                  <a href={project.report} target="_blank" rel="noreferrer">→ View Report</a>
                )}
                {project.poster && (
                  <button className="poster-button" onClick={() => setShowPoster(true)}>
                    View Poster
                  </button>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Separate Poster Overlay */}
      <AnimatePresence>
        {showPoster && (
          <motion.div
            className="poster-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ zIndex: 1100 }}
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