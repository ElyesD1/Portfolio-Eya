import { motion } from 'framer-motion'
import { Music, ExternalLink } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import tiktokPfp from '../assets/tiktokpfp.png'
import './TikTokAccountPreview.css'

const TikTokAccountPreview = () => {
  const { t } = useTranslation()

  return (
    <motion.div 
      className="tiktok-preview-wrapper"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <p className="tiktok-cta-text">{t('work.tiktokCTA')}</p>
      
      <motion.a
        href="https://www.tiktok.com/@eyaadarouich"
        target="_blank"
        rel="noopener noreferrer"
        className="tiktok-account-preview glass"
        whileHover={{ scale: 1.02, y: -5 }}
        whileTap={{ scale: 0.98 }}
      >
        <div className="tiktok-preview-content">
          <div className="tiktok-preview-image">
            <img 
              src={tiktokPfp}
              alt="Eya Darouich TikTok"
            />
            <div className="tiktok-icon-badge">
              <Music size={20} />
            </div>
          </div>
          
          <div className="tiktok-preview-info">
            <div className="tiktok-preview-header">
              <h4 className="tiktok-username">eyaadarouich sur TikTok</h4>
              <ExternalLink size={18} className="external-icon" />
            </div>
            <p className="tiktok-handle">@eyaadarouich</p>
            <p className="tiktok-bio">✨ Content Creator | Marketing Digital 🎨</p>
          </div>
        </div>
        
        <div className="tiktok-preview-footer">
          <span className="tiktok-link-text">tiktok.com/@eyaadarouich</span>
        </div>
      </motion.a>
    </motion.div>
  )
}

export default TikTokAccountPreview
