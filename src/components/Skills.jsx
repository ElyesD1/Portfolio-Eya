import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Sparkles, TrendingUp, Users, BarChart, Globe2, Palette, Target, Megaphone, Layers, Search, LineChart, Mail, ShoppingCart, MessageSquare, Heart, Users2, Clock, Lightbulb, Instagram, Linkedin, Facebook, Twitter } from 'lucide-react'
import './Skills.css'

const Skills = () => {
  const { t } = useTranslation()

  // Skill icons mapping
  const skillIcons = {
    // Marketing Digital
    'Stratégie Marketing': Target,
    'Marketing Strategy': Target,
    'Communication': Megaphone,
    'Brand Content': Layers,
    'Marketing Digital': TrendingUp,
    'Digital Marketing': TrendingUp,
    'Webmarketing': Globe2,
    'Web Marketing': Globe2,
    'Gestion de projet': Users2,
    'Project Management': Users2,
    
    // Content Creation
    'Canva': Palette,
    'Figma': Layers,
    'Adobe Photoshop': Palette,
    'CapCut': Layers,
    'InShot': Layers,
    'TikTok': MessageSquare,
    'Création visuelle': Palette,
    'Visual Creation': Palette,
    'Montage vidéo': Layers,
    'Video Editing': Layers,
    
    // Social Networks
    'Instagram': Instagram,
    'LinkedIn': Linkedin,
    'Facebook': Facebook,
    'Pinterest': Heart,
    'Twitter': Twitter,
    'Community Management': MessageSquare,
    
    // Digital Acquisition
    'Google Ads': TrendingUp,
    'Meta Ads': Target,
    'TikTok Ads': TrendingUp,
    'LinkedIn Ads': Linkedin,
    'SEO': Search,
    'SEA': Search,
    'Analytics': LineChart,
    
    // Tools & Software
    'Google Analytics': BarChart,
    'HubSpot': Mail,
    'ActiveCampaign': Mail,
    'Waalaxy': Users,
    'Microsoft Office 365': Layers,
    'Shopify': ShoppingCart,
    'Meta Business Suite': BarChart,
    'Mailchimp': Mail,
    
    // Soft Skills
    'Autonomie': Target,
    'Autonomy': Target,
    'Créativité': Lightbulb,
    'Creativity': Lightbulb,
    'Organisation': Clock,
    'Organization': Clock,
    'Esprit d\'équipe': Users,
    'Teamwork': Users,
    'Adaptabilité': Sparkles,
    'Adaptability': Sparkles,
    'Gestion du temps': Clock,
    'Time Management': Clock
  }

  const skillCategories = [
    {
      key: 'marketing',
      icon: TrendingUp,
      skills: t('skills.categories.marketing.items', { returnObjects: true })
    },
    {
      key: 'content',
      icon: Palette,
      skills: t('skills.categories.content.items', { returnObjects: true })
    },
    {
      key: 'social',
      icon: Users,
      skills: t('skills.categories.social.items', { returnObjects: true })
    },
    {
      key: 'digital',
      icon: Globe2,
      skills: t('skills.categories.digital.items', { returnObjects: true })
    },
    {
      key: 'tools',
      icon: BarChart,
      skills: t('skills.categories.tools.items', { returnObjects: true })
    },
    {
      key: 'soft',
      icon: Sparkles,
      skills: t('skills.categories.soft.items', { returnObjects: true })
    }
  ]

  const getSkillIcon = (skillName) => {
    const icon = skillIcons[skillName]
    if (!icon) return null
    
    // All icons are now Lucide components
    const IconComponent = icon
    return <IconComponent className="skill-icon" />
  }

  const languages = t('skills.languages', { returnObjects: true })

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

  return (
    <section id="skills" className="skills-section">
      <div className="skills-bg">
        <div className="skills-gradient"></div>
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
            <Sparkles className="section-icon" />
            <span className="gradient-text">{t('skills.title')}</span>
          </h2>
          <p className="section-subtitle">{t('skills.subtitle')}</p>
        </motion.div>

        <motion.div
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {skillCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon
            return (
              <motion.div
                key={category.key}
                className="skill-category glass"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="category-header">
                  <div className="category-icon-wrapper">
                    <IconComponent className="category-icon" />
                  </div>
                  <h3 className="category-title gradient-text">
                    {t(`skills.categories.${category.key}.title`)}
                  </h3>
                </div>
                <div className="skills-list">
                  {category.skills.map((skill, index) => (
                    <motion.div
                      key={index}
                      className="skill-tag"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.05 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {getSkillIcon(skill)}
                      <span className="skill-name">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Languages Section */}
        <motion.div
          className="languages-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="languages-title gradient-text">{t('skills.languagesTitle')}</h3>
          <div className="languages-grid">
            {languages.map((lang, index) => (
              <motion.div
                key={index}
                className="language-card glass"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="language-name">{lang.name}</div>
                <div className="language-level gradient-text">{lang.level}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
