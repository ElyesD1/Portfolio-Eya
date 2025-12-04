import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Briefcase, X, ChevronLeft, ChevronRight, Play, FileText } from 'lucide-react'
import './Work.css'

// Import academic projects
import academic1 from '../assets/academic1.mp4'
import academic2 from '../assets/academic2.mov'
import academic3 from '../assets/academic3.mp4'

// Import alternance projects
import alternance1 from '../assets/alternance1.pdf'
import alternance2 from '../assets/alternance2.jpg'
import alternance3 from '../assets/alternance3.jpg'
import alternance4 from '../assets/alternance4.jpg'
import alternance5 from '../assets/alternance5.jpg'
import alternance6 from '../assets/alternance6.jpg'
import alternance7 from '../assets/alternance7.jpg'
import alternance8 from '../assets/alternance8.jpg'
import alternance9 from '../assets/alternance9.jpg'
import alternance10 from '../assets/alternance10.jpg'
import alternance11 from '../assets/alternance11.jpg'
import alternance12 from '../assets/alternance12.jpg'
import pochette from '../assets/pochette.mp4'
import montage from '../assets/montage.mp4'

// Import formation projects
import formation1 from '../assets/formation1.jpg'
import formation2 from '../assets/formation2.jpg'
import formationbefore1 from '../assets/formationbefore1.jpg'
import formationafter1 from '../assets/formationafter1.jpg'
import formationbefore2 from '../assets/formationbefore2.jpg'
import formationafter2 from '../assets/formationafter2.jpg'

const Work = () => {
  const { t } = useTranslation()
  const [selectedItem, setSelectedItem] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [sliderPositions, setSliderPositions] = useState({})

  const workCategories = [
    {
      key: 'academic',
      title: t('work.categories.academic.title'),
      items: [
        {
          id: 'academic1',
          type: 'video',
          src: academic1,
          title: t('work.categories.academic.items.academic1.title'),
          category: t('work.categories.academic.items.academic1.category')
        },
        {
          id: 'academic2',
          type: 'video',
          src: academic2,
          title: t('work.categories.academic.items.academic2.title'),
          category: t('work.categories.academic.items.academic2.category')
        },
        {
          id: 'academic3',
          type: 'video',
          src: academic3,
          title: t('work.categories.academic.items.academic3.title'),
          category: t('work.categories.academic.items.academic3.category')
        }
      ]
    },
    {
      key: 'alternance',
      title: t('work.categories.alternance.title'),
      subsections: [
        {
          key: 'images',
          items: [
        {
          id: 'alternance1',
          type: 'pdf',
          src: alternance1,
          title: t('work.categories.alternance.items.alternance1.title'),
          category: t('work.categories.alternance.items.alternance1.category')
        },
        {
          id: 'alternance2',
          type: 'image',
          src: alternance2,
          title: t('work.categories.alternance.items.alternance2.title'),
          category: t('work.categories.alternance.items.alternance2.category')
        },
        {
          id: 'alternance3',
          type: 'image',
          src: alternance3,
          title: t('work.categories.alternance.items.alternance3.title'),
          category: t('work.categories.alternance.items.alternance3.category')
        },
        {
          id: 'alternance4',
          type: 'image',
          src: alternance4,
          title: t('work.categories.alternance.items.alternance4.title'),
          category: t('work.categories.alternance.items.alternance4.category')
        },
        {
          id: 'alternance5',
          type: 'image',
          src: alternance5,
          title: t('work.categories.alternance.items.alternance5.title'),
          category: t('work.categories.alternance.items.alternance5.category')
        },
        {
          id: 'alternance6',
          type: 'image',
          src: alternance6,
          title: t('work.categories.alternance.items.alternance6.title'),
          category: t('work.categories.alternance.items.alternance6.category')
        },
        {
          id: 'alternance7',
          type: 'image',
          src: alternance7,
          title: t('work.categories.alternance.items.alternance7.title'),
          category: t('work.categories.alternance.items.alternance7.category')
        },
        {
          id: 'alternance8',
          type: 'image',
          src: alternance8,
          title: t('work.categories.alternance.items.alternance8.title'),
          category: t('work.categories.alternance.items.alternance8.category')
        },
        {
          id: 'alternance9',
          type: 'image',
          src: alternance9,
          title: t('work.categories.alternance.items.alternance9.title'),
          category: t('work.categories.alternance.items.alternance9.category')
        },
        {
          id: 'alternance10',
          type: 'image',
          src: alternance10,
          title: t('work.categories.alternance.items.alternance10.title'),
          category: t('work.categories.alternance.items.alternance10.category')
        },
        {
          id: 'alternance11',
          type: 'image',
          src: alternance11,
          title: t('work.categories.alternance.items.alternance11.title'),
          category: t('work.categories.alternance.items.alternance11.category')
        },
        {
          id: 'alternance12',
          type: 'image',
          src: alternance12,
          title: t('work.categories.alternance.items.alternance12.title'),
          category: t('work.categories.alternance.items.alternance12.category')
        }
          ]
        },
        {
          key: 'videos',
          title: t('work.categories.alternance.subsections.videos'),
          items: [
            {
              id: 'pochette',
              type: 'video',
              src: pochette,
              title: t('work.categories.alternance.items.pochette.title'),
              category: t('work.categories.alternance.items.pochette.category')
            },
            {
              id: 'montage',
              type: 'video',
              src: montage,
              title: t('work.categories.alternance.items.montage.title'),
              category: t('work.categories.alternance.items.montage.category')
            }
          ]
        }
      ]
    },
    {
      key: 'formation',
      title: t('work.categories.formation.title'),
      items: [
        {
          id: 'formation1',
          type: 'image',
          src: formation1,
          title: t('work.categories.formation.items.formation1.title'),
          category: t('work.categories.formation.items.formation1.category')
        },
        {
          id: 'formation2',
          type: 'image',
          src: formation2,
          title: t('work.categories.formation.items.formation2.title'),
          category: t('work.categories.formation.items.formation2.category')
        },
        {
          id: 'formationba1',
          type: 'before-after',
          before: formationbefore1,
          after: formationafter1,
          title: t('work.categories.formation.items.formationba1.title'),
          category: t('work.categories.formation.items.formationba1.category')
        },
        {
          id: 'formationba2',
          type: 'before-after',
          before: formationbefore2,
          after: formationafter2,
          title: t('work.categories.formation.items.formationba2.title'),
          category: t('work.categories.formation.items.formationba2.category')
        }
      ]
    }
  ]

  const handleSliderChange = (id, position) => {
    setSliderPositions(prev => ({ ...prev, [id]: position }))
  }

  const handleItemClick = (item) => {
    setSelectedItem(item)
    setCurrentPage(1)
  }

  const closePreview = () => {
    setSelectedItem(null)
    setCurrentPage(1)
  }

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
    hidden: { x: -30, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="work" className="work-section">
      <div className="work-bg">
        <div className="work-gradient"></div>
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
            <Briefcase className="section-icon" />
            <span className="gradient-text">{t('work.title')}</span>
          </h2>
          <p className="section-subtitle">{t('work.subtitle')}</p>
        </motion.div>

        {/* Work Categories */}
        {workCategories.map((category) => (
          <motion.div
            key={category.key}
            className="work-category"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <h3 className="category-title gradient-text">{category.title}</h3>
            
            {/* Check if category has subsections or direct items */}
            {category.subsections ? (
              // Render subsections
              category.subsections.map((subsection) => (
                <div key={subsection.key} className="work-subsection">
                  {subsection.title && (
                    <h4 className="subsection-title">{subsection.title}</h4>
                  )}
                  <div className="work-gallery">
                    <div className="gallery-scroll">
                      {subsection.items.map((item) => (
                        <motion.div
                          key={item.id}
                          className={`work-item glass ${item.type === 'video' ? 'video-card' : 'content-card'}`}
                          variants={itemVariants}
                          whileHover={{ y: -10, scale: 1.02 }}
                          onClick={() => item.type === 'video' && handleItemClick(item)}
                        >
                          <div className="work-preview">
                            {item.type === 'video' ? (
                              <div className="video-thumbnail">
                                <video
                                  src={item.src}
                                  className="preview-video"
                                  muted
                                  playsInline
                                />
                                <div className="play-overlay">
                                  <Play size={48} />
                                </div>
                              </div>
                            ) : item.type === 'before-after' ? (
                              <div className="before-after-container">
                                <div className="before-after-wrapper">
                                  <img src={item.after} alt={`${item.title} - After`} className="after-image" />
                                  <div 
                                    className="before-image-overlay"
                                    style={{ clipPath: `inset(0 ${100 - (sliderPositions[item.id] || 50)}% 0 0)` }}
                                  >
                                    <img src={item.before} alt={`${item.title} - Before`} />
                                  </div>
                                  <div 
                                    className="slider-line"
                                    style={{ left: `${sliderPositions[item.id] || 50}%` }}
                                  >
                                    <div className="slider-handle">
                                      <ChevronLeft size={20} />
                                      <ChevronRight size={20} />
                                    </div>
                                  </div>
                                  <input
                                    type="range"
                                    min="0"
                                    max="100"
                                    value={sliderPositions[item.id] || 50}
                                    onChange={(e) => handleSliderChange(item.id, e.target.value)}
                                    className="before-after-slider"
                                  />
                                </div>
                                <div className="before-after-labels">
                                  <span className="label-before">Avant</span>
                                  <span className="label-after">Après</span>
                                </div>
                              </div>
                            ) : item.type === 'image' ? (
                              <div className="image-preview-container">
                                <img src={item.src} alt={item.title} className="preview-image-full" />
                              </div>
                            ) : (
                              <div className="pdf-preview-container">
                                <iframe
                                  src={`${item.src}#view=FitH`}
                                  className="pdf-preview-frame"
                                  title={item.title}
                                />
                              </div>
                            )}
                          </div>
                          <div className="work-info">
                            <span className="work-category-badge">{item.category}</span>
                            <h4 className="work-title">{item.title}</h4>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              // Render direct items (for backward compatibility)
              <div className="work-gallery">
                <div className="gallery-scroll">
                  {category.items.map((item) => (
                    <motion.div
                      key={item.id}
                      className={`work-item glass ${item.type === 'video' ? 'video-card' : 'content-card'}`}
                      variants={itemVariants}
                      whileHover={{ y: -10, scale: 1.02 }}
                      onClick={() => item.type === 'video' && handleItemClick(item)}
                    >
                      <div className="work-preview">
                        {item.type === 'video' ? (
                          <div className="video-thumbnail">
                            <video
                              src={item.src}
                              className="preview-video"
                              muted
                              playsInline
                            />
                            <div className="play-overlay">
                              <Play size={48} />
                            </div>
                          </div>
                        ) : item.type === 'before-after' ? (
                          <div className="before-after-container">
                            <div className="before-after-wrapper">
                              <img src={item.after} alt={`${item.title} - After`} className="after-image" />
                              <div 
                                className="before-image-overlay"
                                style={{ clipPath: `inset(0 ${100 - (sliderPositions[item.id] || 50)}% 0 0)` }}
                              >
                                <img src={item.before} alt={`${item.title} - Before`} />
                              </div>
                              <div 
                                className="slider-line"
                                style={{ left: `${sliderPositions[item.id] || 50}%` }}
                              >
                                <div className="slider-handle">
                                  <ChevronLeft size={20} />
                                  <ChevronRight size={20} />
                                </div>
                              </div>
                              <input
                                type="range"
                                min="0"
                                max="100"
                                value={sliderPositions[item.id] || 50}
                                onChange={(e) => handleSliderChange(item.id, e.target.value)}
                                className="before-after-slider"
                              />
                            </div>
                            <div className="before-after-labels">
                              <span className="label-before">Avant</span>
                              <span className="label-after">Après</span>
                            </div>
                          </div>
                        ) : item.type === 'image' ? (
                          <div className="image-preview-container">
                            <img src={item.src} alt={item.title} className="preview-image-full" />
                          </div>
                        ) : (
                          <div className="pdf-preview-container">
                            <iframe
                              src={`${item.src}#view=FitH`}
                              className="pdf-preview-frame"
                              title={item.title}
                            />
                          </div>
                        )}
                      </div>
                      <div className="work-info">
                        <span className="work-category-badge">{item.category}</span>
                        <h4 className="work-title">{item.title}</h4>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Preview Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            className="preview-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closePreview}
          >
            <motion.div
              className="preview-content"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="close-button" onClick={closePreview}>
                <X size={24} />
              </button>

              <div className="preview-header">
                <div>
                  <span className="preview-category">{selectedItem.category}</span>
                  <h3 className="preview-title">{selectedItem.title}</h3>
                </div>
              </div>

              <div className="preview-body">
                {selectedItem.type === 'video' && (
                  <video
                    src={selectedItem.src}
                    controls
                    autoPlay
                    className="preview-media"
                  />
                )}
                {selectedItem.type === 'image' && (
                  <img
                    src={selectedItem.src}
                    alt={selectedItem.title}
                    className="preview-media"
                  />
                )}
                {selectedItem.type === 'pdf' && (
                  <div className="pdf-viewer">
                    <iframe
                      src={`${selectedItem.src}#page=${currentPage}`}
                      className="pdf-frame"
                      title={selectedItem.title}
                    />
                    <div className="pdf-controls">
                      <button
                        onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                        disabled={currentPage === 1}
                      >
                        <ChevronLeft size={20} />
                      </button>
                      <span>Page {currentPage}</span>
                      <button onClick={() => setCurrentPage(currentPage + 1)}>
                        <ChevronRight size={20} />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Work
