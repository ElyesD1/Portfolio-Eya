import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Mail, Linkedin, MapPin, Calendar, Sparkles, Send, Heart } from 'lucide-react'
import './Contact.css'

const Contact = () => {
  const { t } = useTranslation()

  const contactInfo = [
    {
      icon: Mail,
      label: t('contact.email'),
      value: 'eya.darouich15@gmail.com',
      link: 'mailto:eya.darouich15@gmail.com',
      color: 'purple'
    },
    {
      icon: Linkedin,
      label: t('contact.linkedin'),
      value: 'Eya Darouich',
      link: 'https://linkedin.com/in/eya-darouich-b09b90224',
      color: 'blue'
    },
    {
      icon: MapPin,
      label: t('contact.location'),
      value: 'Puteaux, Île-de-France',
      link: null,
      color: 'pink'
    },
    {
      icon: Calendar,
      label: t('contact.availability'),
      value: t('contact.availabilityValue'),
      link: null,
      color: 'gold'
    }
  ]

  const interests = t('contact.interests', { returnObjects: true })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const floatVariants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  return (
    <section id="contact" className="contact-section">
      <div className="contact-bg">
        <div className="contact-gradient"></div>
        <div className="particles-container">
          {[...Array(60)].map((_, i) => (
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

        {/* Floating shapes */}
        <motion.div
          className="floating-shape shape-1"
          variants={floatVariants}
          animate="animate"
        />
        <motion.div
          className="floating-shape shape-2"
          variants={floatVariants}
          animate="animate"
          transition={{ delay: 0.5 }}
        />
        <motion.div
          className="floating-shape shape-3"
          variants={floatVariants}
          animate="animate"
          transition={{ delay: 1 }}
        />
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
            <Send className="section-icon" />
            <span className="gradient-text">{t('contact.title')}</span>
          </h2>
          <p className="section-subtitle">{t('contact.subtitle')}</p>
        </motion.div>

        <motion.div
          className="contact-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Contact Cards Grid */}
          <div className="contact-grid">
            {contactInfo.map((item, index) => {
              const IconComponent = item.icon
              const content = (
                <motion.div
                  className={`contact-card glass ${item.color}`}
                  variants={itemVariants}
                  whileHover={{ y: -10, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="contact-card-inner">
                    <div className={`contact-icon-wrapper ${item.color}`}>
                      <IconComponent className="contact-icon" />
                      <div className="icon-glow"></div>
                    </div>
                    <div className="contact-info">
                      <span className="contact-label">{item.label}</span>
                      <span className="contact-value">{item.value}</span>
                    </div>
                    {item.link && (
                      <div className="contact-arrow">
                        <Send size={16} />
                      </div>
                    )}
                  </div>
                </motion.div>
              )

              return item.link ? (
                <a
                  key={index}
                  href={item.link}
                  target={item.link.startsWith('http') ? '_blank' : undefined}
                  rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="contact-card-link"
                >
                  {content}
                </a>
              ) : (
                <div key={index} className="contact-card-link">
                  {content}
                </div>
              )
            })}
          </div>

          {/* CTA Section */}
          <motion.div
            className="cta-section glass"
            variants={itemVariants}
          >
            <div className="cta-content">
              <Sparkles className="cta-icon" />
              <h3 className="cta-title gradient-text">{t('contact.cta.title')}</h3>
              <p className="cta-description">{t('contact.cta.description')}</p>
              <a 
                href="mailto:eya.darouich15@gmail.com" 
                className="cta-button"
              >
                <Mail size={20} />
                <span>{t('contact.cta.button')}</span>
                <div className="button-shine"></div>
              </a>
            </div>
          </motion.div>

          {/* Interests Section */}
          <motion.div
            className="interests-section"
            variants={itemVariants}
          >
            <div className="interests-header">
              <Heart className="interests-icon" />
              <h3 className="interests-title gradient-text">{t('contact.interestsTitle')}</h3>
            </div>
            <div className="interests-grid">
              {interests.map((interest, index) => (
                <motion.div
                  key={index}
                  className="interest-tag glass"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, rotate: 2 }}
                >
                  <span className="interest-emoji">{interest.emoji}</span>
                  <span className="interest-name">{interest.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Footer */}
        <motion.div
          className="contact-footer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="footer-text">
            {t('contact.footer.made')} <Heart size={16} className="heart-pulse" /> {t('contact.footer.by')} <span className="gradient-text">Eya Darouich</span>
          </p>
          <p className="footer-year">© 2025</p>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
