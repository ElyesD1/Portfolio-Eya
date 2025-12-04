import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Download, Mail, Sparkles } from 'lucide-react'
import profileImage from '../assets/eya1.jpg'
import cvFile from '../assets/CV_2025-12-02_EYA_DAROUICH (3).pdf'
import './Hero.css'

const Hero = () => {
  const { t, i18n } = useTranslation()
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  
  const dynamicWords = [
    t('hero.subtitle1'),
    t('hero.subtitle2'),
    t('hero.subtitle3'),
    t('hero.subtitle4'),
    t('hero.subtitle5')
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % dynamicWords.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [i18n.language, dynamicWords.length])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  const floatingVariants = {
    animate: {
      y: [-20, 20, -20],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  return (
    <section id="hero" className="hero">
      <div className="hero-bg">
        <div className="hero-gradient"></div>
        <div className="particles-container">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="particle"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                scale: Math.random() * 0.5 + 0.5
              }}
              animate={{
                y: [null, Math.random() * window.innerHeight],
                x: [null, Math.random() * window.innerWidth],
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
        <div className="floating-shapes">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className={`floating-shape shape-${i + 1}`}
              variants={floatingVariants}
              animate="animate"
              transition={{ delay: i * 0.5 }}
            />
          ))}
        </div>
      </div>

      <div className="container hero-container">
        <motion.div
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Profile Image */}
          <motion.div
            className="hero-image"
            variants={itemVariants}
            whileHover={{ scale: 1.05, rotate: 5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="image-placeholder glass">
              <div className="image-ring ring-1"></div>
              <div className="image-ring ring-2"></div>
              <div className="image-ring ring-3"></div>
              <div className="profile-img">
                <img 
                  src={profileImage} 
                  alt="Eya Darouich" 
                  className="profile-photo"
                />
              </div>
            </div>
          </motion.div>

          {/* Main Content */}
          <div className="hero-text">
            <motion.p 
              className="hero-greeting"
              variants={itemVariants}
            >
              {t('hero.greeting')} 👋
            </motion.p>

            <motion.h1 
              className="hero-name"
              variants={itemVariants}
            >
              <span className="gradient-text">{t('hero.name')}</span>
            </motion.h1>

            <motion.div 
              className="hero-title-container"
              variants={itemVariants}
            >
              <h2 className="hero-title">
                <span className="static-text">{t('hero.title')}</span>
              </h2>
              <motion.h3
                key={currentWordIndex}
                className="hero-subtitle gradient-text"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                {dynamicWords[currentWordIndex]}
              </motion.h3>
            </motion.div>

            <motion.p 
              className="hero-description"
              variants={itemVariants}
            >
              {t('hero.description')}
            </motion.p>

            <motion.div 
              className="hero-stats"
              variants={itemVariants}
            >
              <div className="stat">
                <span className="stat-number gradient-text">4</span>
                <span className="stat-label">{t('hero.stats.experience')}</span>
              </div>
              <div className="stat">
                <span className="stat-number gradient-text">5</span>
                <span className="stat-label">{t('hero.stats.networks')}</span>
              </div>
              <div className="stat">
                <span className="stat-number gradient-text">5+</span>
                <span className="stat-label">{t('hero.stats.launches')}</span>
              </div>
            </motion.div>

            <motion.div 
              className="hero-actions"
              variants={itemVariants}
            >
              <motion.a
                href="#contact"
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                <Mail size={20} />
                {t('hero.cta')}
              </motion.a>

              <motion.a
                href={cvFile}
                download="CV_Eya_Darouich.pdf"
                className="btn btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download size={20} />
                {t('hero.downloadCV')}
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
