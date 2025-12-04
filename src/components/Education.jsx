import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react'
import './Education.css'

const Education = () => {
  const { t } = useTranslation()

  const educationData = t('education.degrees', { returnObjects: true })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.15
      }
    }
  }

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="education" className="education-section">
      <div className="education-bg">
        <div className="education-gradient"></div>
        <div className="particles-container">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="particle"
              initial={{
                x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1920),
                y: Math.random() * 1500,
                scale: Math.random() * 0.5 + 0.5
              }}
              animate={{
                y: [null, Math.random() * 1500],
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
      </div>

      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">
            <GraduationCap className="section-icon" />
            <span className="gradient-text">{t('education.title')}</span>
          </h2>
          <p className="section-subtitle">{t('education.subtitle')}</p>
        </motion.div>

        <motion.div
          className="education-timeline"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              className="education-item"
              variants={itemVariants}
              whileHover={{ x: 10 }}
            >
              <div className="timeline-marker">
                <div className="timeline-dot"></div>
                <div className="timeline-line"></div>
              </div>

              <div className="education-card glass">
                <div className="education-header">
                  <div className="education-icon-wrapper">
                    <Award className="education-icon" />
                  </div>
                  <div className="education-main">
                    <h3 className="education-degree gradient-text">{edu.degree}</h3>
                    <h4 className="education-school">{edu.school}</h4>
                  </div>
                </div>

                <div className="education-meta">
                  <div className="meta-item">
                    <MapPin className="meta-icon" />
                    <span>{edu.location}</span>
                  </div>
                  <div className="meta-item">
                    <Calendar className="meta-icon" />
                    <span>{edu.period}</span>
                  </div>
                </div>

                {edu.skills && edu.skills.length > 0 && (
                  <div className="education-skills">
                    {edu.skills.map((skill, idx) => (
                      <motion.span
                        key={idx}
                        className="skill-badge"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.05 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Section Divider */}
      <div className="section-divider">
        <motion.div
          className="divider-line"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        />
      </div>
    </section>
  )
}

export default Education
