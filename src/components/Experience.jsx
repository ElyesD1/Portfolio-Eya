import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react'
import './Experience.css'

const Experience = () => {
  const { t } = useTranslation()

  const experiences = [
    {
      id: 1,
      title: t('experience.experiences.exp1.title'),
      company: t('experience.experiences.exp1.company'),
      location: t('experience.experiences.exp1.location'),
      period: t('experience.experiences.exp1.period'),
      type: "Alternance",
      current: true,
      responsibilities: t('experience.experiences.exp1.responsibilities', { returnObjects: true }),
      skills: t('experience.experiences.exp1.skills', { returnObjects: true })
    },
    {
      id: 2,
      title: t('experience.experiences.exp2.title'),
      company: t('experience.experiences.exp2.company'),
      location: t('experience.experiences.exp2.location'),
      period: t('experience.experiences.exp2.period'),
      type: "Stage",
      current: false,
      responsibilities: t('experience.experiences.exp2.responsibilities', { returnObjects: true }),
      skills: t('experience.experiences.exp2.skills', { returnObjects: true })
    },
    {
      id: 3,
      title: t('experience.experiences.exp3.title'),
      company: t('experience.experiences.exp3.company'),
      location: t('experience.experiences.exp3.location'),
      period: t('experience.experiences.exp3.period'),
      type: "Stage",
      current: false,
      responsibilities: t('experience.experiences.exp3.responsibilities', { returnObjects: true }),
      skills: t('experience.experiences.exp3.skills', { returnObjects: true })
    },
    {
      id: 4,
      title: t('experience.experiences.exp4.title'),
      company: t('experience.experiences.exp4.company'),
      location: t('experience.experiences.exp4.location'),
      period: t('experience.experiences.exp4.period'),
      type: "Alternance",
      current: false,
      responsibilities: t('experience.experiences.exp4.responsibilities', { returnObjects: true }),
      skills: t('experience.experiences.exp4.skills', { returnObjects: true })
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="experience" className="experience-section">
      <div className="experience-bg">
        <div className="experience-gradient"></div>
        <div className="particles-container">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="particle"
              initial={{
                x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1920),
                y: Math.random() * 2000,
                scale: Math.random() * 0.5 + 0.5
              }}
              animate={{
                y: [null, Math.random() * 2000],
                x: [null, Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1920)],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                ease: "linear",
                delay: Math.random() * 5
              }}
            />
          ))}
        </div>
        <div className="floating-shapes-exp">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className={`floating-shape-exp shape-exp-${i + 1}`}
              animate={{
                y: [-20, 20, -20],
                x: [-10, 10, -10],
                rotate: [0, 5, -5, 0]
              }}
              transition={{
                duration: 8 + i,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5
              }}
            />
          ))}
        </div>
      </div>

      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <h2 className="section-title">
            <Briefcase className="section-icon" />
            <span className="gradient-text">{t('experience.title')}</span>
          </h2>
          <p className="section-subtitle">{t('experience.subtitle')}</p>
        </motion.div>

        <motion.div
          className="timeline"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className={`timeline-item ${exp.current ? 'current' : ''}`}
              variants={itemVariants}
            >
              <div className="timeline-marker">
                <motion.div 
                  className="timeline-dot"
                  whileHover={{ scale: 1.3 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {exp.current && (
                    <motion.div
                      className="pulse-ring"
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.8, 0, 0.8]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  )}
                </motion.div>
                {index < experiences.length - 1 && (
                  <div className="timeline-line"></div>
                )}
              </div>

              <motion.div 
                className="timeline-content"
                whileHover={{ x: 10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="experience-card glass">
                  <div className="experience-header">
                    <div className="experience-title-row">
                      <h3 className="experience-title">{exp.title}</h3>
                    </div>
                    <div className="experience-meta">
                      <div className="meta-item">
                        <Briefcase size={16} />
                        <span className="company-name gradient-text">{exp.company}</span>
                      </div>
                      <div className="meta-item">
                        <MapPin size={16} />
                        <span>{exp.location}</span>
                      </div>
                      <div className="meta-item">
                        <Calendar size={16} />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                  </div>

                  <div className="experience-body">
                    <ul className="responsibilities-list">
                      {exp.responsibilities.map((resp, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.1 }}
                        >
                          <ChevronRight size={16} className="list-icon" />
                          <span>{resp}</span>
                        </motion.li>
                      ))}
                    </ul>

                    <div className="skills-tags">
                      {exp.skills.map((skill, idx) => (
                        <motion.span
                          key={idx}
                          className="skill-tag"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.05 }}
                          whileHover={{ scale: 1.05 }}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
