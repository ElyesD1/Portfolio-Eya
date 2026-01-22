import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  fr: {
    translation: {
      nav: {
        about: 'À Propos',
        experience: 'Expériences',
        skills: 'Compétences',
        education: 'Formation',
        work: 'Réalisations',
        contact: 'Contact'
      },
      skills: {
        title: 'Compétences',
        subtitle: 'Mon expertise en marketing digital, création de contenu et gestion de communauté',
        languagesTitle: 'Langues',
        categories: {
          marketing: {
            title: 'Marketing Digital & Communication',
            items: [
              'Stratégie Marketing',
              'Communication',
              'Brand Content',
              'Marketing Digital',
              'Webmarketing',
              'Gestion de projet'
            ]
          },
          content: {
            title: 'Création de Contenus',
            items: [
              'Canva',
              'Figma',
              'Adobe Photoshop',
              'CapCut',
              'InShot',
              'TikTok',
              'Création visuelle',
              'Montage vidéo'
            ]
          },
          social: {
            title: 'Réseaux Sociaux',
            items: [
              'Instagram',
              'TikTok',
              'LinkedIn',
              'Facebook',
              'Pinterest',
              'Twitter',
              'Community Management'
            ]
          },
          digital: {
            title: 'Acquisition Digitale',
            items: [
              'Google Ads',
              'Meta Ads',
              'TikTok Ads',
              'LinkedIn Ads',
              'SEO',
              'SEA',
              'Analytics'
            ]
          },
          tools: {
            title: 'Outils & Logiciels',
            items: [
              'Google Analytics',
              'HubSpot',
              'ActiveCampaign',
              'Waalaxy',
              'Microsoft Office 365',
              'Shopify',
              'Meta Business Suite',
              'Mailchimp'
            ]
          },
          soft: {
            title: 'Soft Skills',
            items: [
              'Autonomie',
              'Créativité',
              'Organisation',
              'Esprit d\'équipe',
              'Adaptabilité',
              'Communication',
              'Gestion du temps'
            ]
          }
        },
        languages: [
          {
            name: 'Anglais',
            level: 'TOEIC 840/990'
          },
          {
            name: 'Français',
            level: 'C1'
          }
        ]
      },
      education: {
        title: 'Formation',
        subtitle: 'Mon parcours académique en marketing digital et communication',
        degrees: [
          {
            degree: 'Master En programme grande école',
            school: 'EDC Paris Business School',
            location: 'Paris',
            period: 'Septembre 2023 - Août 2025',
            skills: [
              'Marketing Digital',
              'SEA',
              'Brand Content',
              'Content Marketing',
              'Analytics',
              'Campagnes 360°',
              'Acquisition/CRM',
              'Performance Digitale',
              'Stratégie Multicanale',
              'Pilotage des KPI'
            ]
          },
          {
            degree: 'Bachelor Communication & Marketing',
            school: 'Ascencia Business School',
            location: 'Paris',
            period: 'Septembre 2022 - Juin 2023',
            skills: [
              'Business',
              'Stratégie Marketing',
              'Communication',
              'Réseaux Sociaux'
            ]
          },
          {
            degree: 'Licence en Sciences de Gestion',
            school: 'Esprit School of Business',
            location: 'Tunis, Tunisie',
            period: 'Septembre 2020 - Juin 2023',
            skills: [
              'Business',
              'Management',
              'Entrepreneuriat',
              'Gestion',
              'Stratégie',
              'Sciences de Gestion'
            ]
          },
          {
            degree: 'Baccalauréat Sciences Expérimentales',
            school: 'Lycée Farhat Hached',
            location: 'Bizerte, Tunisie',
            period: 'Septembre 2015 - Juin 2020',
            skills: []
          }
        ]
      },
      contact: {
        title: 'Contact',
        subtitle: 'Discutons de votre prochain projet',
        email: 'Email',
        linkedin: 'LinkedIn',
        tiktok: 'TikTok',
        location: 'Localisation',
        availability: 'Disponibilité',
        availabilityValue: 'Ouvert aux opportunités',
        cta: {
          title: 'Travaillons Ensemble',
          description: 'Passionnée par le storytelling et la création de contenus, je suis prête à mettre mon énergie et ma créativité au service de votre projet.',
          button: 'Envoyez-moi un Email'
        },
        interestsTitle: 'Centres d\'Intérêt',
        interests: [
          { name: 'Voyage', emoji: '✈️' },
          { name: 'Bénévolat', emoji: '🤝' },
          { name: 'Sport', emoji: '🏃‍♀️' },
          { name: 'Création de Contenu', emoji: '🎨' }
        ],
        footer: {
          made: 'Conçu avec',
          by: 'par'
        }
      },
      hero: {
        greeting: 'Bonjour, je suis',
        name: 'Eya Darouich',
        title: 'Marketing Digital & Social Media',
        subtitle1: 'Brand Content Manager',
        subtitle2: 'Community Manager',
        subtitle3: 'Créatrice de Contenu',
        subtitle4: 'Stratège Social Media',
        subtitle5: 'Content Creator',
        description: 'Passionnée par le storytelling et la création de contenus, je mets mon énergie et ma créativité au service de projets mêlant marketing digital, community management et expérience client.',
        stats: {
          experience: "Ans d'Expérience",
          networks: 'Réseaux Sociaux',
          launches: 'Lancements Produits'
        },
        cta: 'Me Contacter',
        downloadCV: 'Télécharger CV'
      },
      work: {
        title: 'Réalisations',
        subtitle: 'Une sélection de mes projets en marketing digital et création de contenu',
        viewWebsite: 'Voir le site',
        tiktokCTA: 'Envie de découvrir plus de contenu ? Suivez-moi sur TikTok ! 🎵',
        followers: 'abonnés',
        following: 'abonnements',
        categories: {
          academic: {
            title: 'Projets Académiques',
            items: {
              academic1: {
                title: 'Travel Advisor',
                category: 'Projet Web'
              },
              academic2: {
                title: 'Jewelry Collection',
                category: 'E-Commerce'
              },
              academic3: {
                title: 'Zara Newsletter',
                category: 'Email Marketing'
              }
            }
          },
          alternance: {
            title: 'Alternance - Advyse',
            subsections: {
              videos: 'Vidéos'
            },
            items: {
              alternance1: {
                title: 'Fiche Publicitaire',
                category: 'Publicité'
              },
              alternance2: {
                title: 'Fiche Publicitaire',
                category: 'Publicité'
              },
              alternance3: {
                title: 'Fiche Publicitaire',
                category: 'Publicité'
              },
              alternance4: {
                title: 'Fiche Publicitaire',
                category: 'Publicité'
              },
              alternance5: {
                title: 'Fiche Publicitaire',
                category: 'Publicité'
              },
              alternance6: {
                title: 'Miniature YouTube',
                category: 'YouTube'
              },
              alternance7: {
                title: 'Miniature YouTube',
                category: 'YouTube'
              },
              alternance8: {
                title: 'Miniature YouTube',
                category: 'YouTube'
              },
              alternance9: {
                title: 'Miniature YouTube',
                category: 'YouTube'
              },
              alternance10: {
                title: 'Miniature YouTube',
                category: 'YouTube'
              },
              alternance11: {
                title: 'Miniature YouTube',
                category: 'YouTube'
              },
              alternance12: {
                title: 'Miniature YouTube',
                category: 'YouTube'
              },
              alternance14: {
                title: 'Fiche Publicitaire',
                category: 'Publicité'
              },
              alternance13: {
                title: 'Newsletter Advyse',
                category: 'Newsletter'
              },
              pochette: {
                title: 'Pochette',
                category: 'Vidéo'
              },
              montage: {
                title: 'Montage',
                category: 'Vidéo'
              }
            }
          },
          formation: {
            title: 'Formation - Photoshop',
            subsections: {
              tiktok: 'Créations TikTok - Mon Univers'
            },
            items: {
              formation1: {
                title: 'Création Photoshop',
                category: 'Photoshop'
              },
              formation2: {
                title: 'Création Photoshop',
                category: 'Photoshop'
              },
              formationba1: {
                title: 'Retouche Photo',
                category: 'Avant/Après'
              },
              formationba2: {
                title: 'Retouche Photo',
                category: 'Avant/Après'
              },
              tiktok1: {
                title: 'Masazzi, Tunis',
                category: 'Restaurant'
              },
              tiktok2: {
                title: 'December in Djerba Hotel',
                category: 'Hôtel'
              },
              tiktok3: {
                title: 'Unboxing Lancôme',
                category: 'Beauté'
              },
              tiktok4: {
                title: 'La Pistacherie, Paris',
                category: 'Restaurant'
              },
              tiktok5: {
                title: 'Pilau Restaurant, Tunis',
                category: 'Restaurant'
              },
              tiktok6: {
                title: 'Planet Wok ST-BRICE, Paris',
                category: 'Restaurant'
              },
              tiktok7: {
                title: 'Événementiel',
                category: 'Événement'
              },
              tiktok9: {
                title: 'Vlog Beauté',
                category: 'Beauté'
              },
              tiktok10: {
                title: 'DEMEL Edit',
                category: 'Lifestyle'
              },
              tiktok11: {
                title: 'Summer Vibes',
                category: 'Lifestyle'
              },
              tiktok12: {
                title: 'Food Edit',
                category: 'Restaurant'
              }
            }
          }
        }
      },
      experience: {
        title: 'Expériences Professionnelles',
        subtitle: 'Mon parcours dans le marketing digital et la communication',
        experiences: {
          exp1: {
            title: 'Alternante | Responsable Community Manager',
            company: 'Advyse',
            location: 'Asnières-sur-Seine',
            period: 'Septembre 2024 - Août 2025',
            responsibilities: [
              'Gestion et animation quotidienne de 5 réseaux sociaux',
              'Création de supports marketing : visuels, vidéos, publications, newsletters et présentations',
              "Gestion d'un calendrier éditorial",
              "Participation à des campagnes digitales : contenus, reporting, taux d'engagement, trafic",
              'Rédaction de contenus destinés au site web et aux réseaux sociaux',
              'Veille digitale et concurrentielle pour proposer des actions innovantes'
            ],
            skills: ['Marketing digital', 'Newsletters', 'Community Management', 'Création de Contenu']
          },
          exp2: {
            title: 'Stage Marketing Digital',
            company: 'Advyse',
            location: 'Asnières-sur-Seine',
            period: 'Novembre 2023 - Juillet 2024',
            responsibilities: [
              'Production de vidéos et contenus éditoriaux (TikTok, Instagram)',
              'Analyse de +15 KPI',
              'Suivi des performances, veille concurrentielle & adaptation stratégique',
              'Participation à la gestion de communauté et réponses aux messages'
            ],
            skills: ['TikTok', 'Instagram', 'Analytics', 'Production Vidéo']
          },
          exp3: {
            title: 'Responsable Communications Marketing',
            company: 'Perfect Hygiène',
            location: 'Tunis, Tunisie',
            period: 'Janvier 2023 - Juin 2023',
            responsibilities: [
              'Coordination de campagnes marketing 360° et création de supports pour plus de 5 lancements de produits',
              'Gestion des actions de communication, contenus et activations promotionnelles'
            ],
            skills: ['Campagnes 360°', 'Stratégie de contenu', 'Lancements produits']
          },
          exp4: {
            title: 'Alternante - Assistante Commerciale',
            company: 'Vatech Wabag',
            location: 'Tunis, Tunisie',
            period: 'Juin 2021 - Juin 2022',
            responsibilities: [
              'Préparation de 50+ offres clients B2B',
              'Analyses de marché et contribution aux réunions commerciales et au suivi des actions pour soutenir le développement commercial'
            ],
            skills: ['B2B', 'Analyses de marché', 'Business Development']
          }
        }
      }
    }
  },
  en: {
    translation: {
      nav: {
        about: 'About',
        experience: 'Experience',
        skills: 'Skills',
        education: 'Education',
        work: 'Portfolio',
        contact: 'Contact'
      },
      skills: {
        title: 'Skills',
        subtitle: 'My expertise in digital marketing, content creation and community management',
        languagesTitle: 'Languages',
        categories: {
          marketing: {
            title: 'Digital Marketing & Communication',
            items: [
              'Marketing Strategy',
              'Communication',
              'Brand Content',
              'Digital Marketing',
              'Web Marketing',
              'Project Management'
            ]
          },
          content: {
            title: 'Content Creation',
            items: [
              'Canva',
              'Figma',
              'Adobe Photoshop',
              'CapCut',
              'InShot',
              'TikTok',
              'Visual Creation',
              'Video Editing'
            ]
          },
          social: {
            title: 'Social Networks',
            items: [
              'Instagram',
              'TikTok',
              'LinkedIn',
              'Facebook',
              'Pinterest',
              'Twitter',
              'Community Management'
            ]
          },
          digital: {
            title: 'Digital Acquisition',
            items: [
              'Google Ads',
              'Meta Ads',
              'TikTok Ads',
              'LinkedIn Ads',
              'SEO',
              'SEA',
              'Analytics'
            ]
          },
          tools: {
            title: 'Tools & Software',
            items: [
              'Google Analytics',
              'HubSpot',
              'ActiveCampaign',
              'Waalaxy',
              'Microsoft Office 365',
              'Shopify',
              'Meta Business Suite',
              'Mailchimp'
            ]
          },
          soft: {
            title: 'Soft Skills',
            items: [
              'Autonomy',
              'Creativity',
              'Organization',
              'Teamwork',
              'Adaptability',
              'Communication',
              'Time Management'
            ]
          }
        },
        languages: [
          {
            name: 'English',
            level: 'TOEIC 840/990'
          },
          {
            name: 'French',
            level: 'C1'
          }
        ]
      },
      education: {
        title: 'Education',
        subtitle: 'My academic journey in digital marketing and communication',
        degrees: [
          {
            degree: 'Master in Grande École Program',
            school: 'EDC Paris Business School',
            location: 'Paris',
            period: 'September 2023 - August 2025',
            skills: [
              'Digital Marketing',
              'SEA',
              'Brand Content',
              'Content Marketing',
              'Analytics',
              '360° Campaigns',
              'Acquisition/CRM',
              'Digital Performance',
              'Multichannel Strategy',
              'KPI Management'
            ]
          },
          {
            degree: 'Bachelor Communication & Marketing',
            school: 'Ascencia Business School',
            location: 'Paris',
            period: 'September 2022 - June 2023',
            skills: [
              'Business',
              'Marketing Strategy',
              'Communication',
              'Social Networks'
            ]
          },
          {
            degree: 'Bachelor in Management Sciences',
            school: 'Esprit School of Business',
            location: 'Tunis, Tunisia',
            period: 'September 2020 - June 2023',
            skills: [
              'Business',
              'Management',
              'Entrepreneurship',
              'Administration',
              'Strategy',
              'Management Sciences'
            ]
          },
          {
            degree: 'High School Diploma in Experimental Sciences',
            school: 'Lycée Farhat Hached',
            location: 'Bizerte, Tunisia',
            period: 'September 2015 - June 2020',
            skills: []
          }
        ]
      },
      contact: {
        title: 'Contact',
        subtitle: 'Let\'s discuss your next project',
        email: 'Email',
        linkedin: 'LinkedIn',
        tiktok: 'TikTok',
        location: 'Location',
        availability: 'Availability',
        availabilityValue: 'Open to opportunities',
        cta: {
          title: 'Let\'s Work Together',
          description: 'Passionate about storytelling and content creation, I\'m ready to bring my energy and creativity to your project.',
          button: 'Send me an Email'
        },
        interestsTitle: 'Interests',
        interests: [
          { name: 'Travel', emoji: '✈️' },
          { name: 'Volunteering', emoji: '🤝' },
          { name: 'Sports', emoji: '🏃‍♀️' },
          { name: 'Content Creation', emoji: '🎨' }
        ],
        footer: {
          made: 'Made with',
          by: 'by'
        }
      },
      hero: {
        greeting: 'Hello, I am',
        name: 'Eya Darouich',
        title: 'Digital Marketing & Social Media',
        subtitle1: 'Brand Content Manager',
        subtitle2: 'Community Manager',
        subtitle3: 'Content Creator',
        subtitle4: 'Social Media Strategist',
        subtitle5: 'Content Creator',
        description: 'Passionate about storytelling and content creation, I bring my energy and creativity to projects combining digital marketing, community management, and customer experience.',
        stats: {
          experience: 'Years of Experience',
          networks: 'Social Networks',
          launches: 'Product Launches'
        },
        cta: 'Contact Me',
        downloadCV: 'Download CV'
      },
      work: {
        title: 'Portfolio',
        subtitle: 'A selection of my projects in digital marketing and content creation',
        viewWebsite: 'View Website',
        tiktokCTA: 'Want to see more content? Follow me on TikTok! 🎵',
        followers: 'followers',
        following: 'following',
        categories: {
          academic: {
            title: 'Academic Projects',
            items: {
              academic1: {
                title: 'Travel Advisor',
                category: 'Web Project'
              },
              academic2: {
                title: 'Jewelry Collection',
                category: 'E-Commerce'
              },
              academic3: {
                title: 'Zara Newsletter',
                category: 'Email Marketing'
              }
            }
          },
          alternance: {
            title: 'Work-Study - Advyse',
            subsections: {
              videos: 'Videos'
            },
            items: {
              alternance1: {
                title: 'Advertising Sheet',
                category: 'Advertising'
              },
              alternance2: {
                title: 'Advertising Sheet',
                category: 'Advertising'
              },
              alternance3: {
                title: 'Advertising Sheet',
                category: 'Advertising'
              },
              alternance4: {
                title: 'Advertising Sheet',
                category: 'Advertising'
              },
              alternance5: {
                title: 'Advertising Sheet',
                category: 'Advertising'
              },
              alternance6: {
                title: 'YouTube Thumbnail',
                category: 'YouTube'
              },
              alternance7: {
                title: 'YouTube Thumbnail',
                category: 'YouTube'
              },
              alternance8: {
                title: 'YouTube Thumbnail',
                category: 'YouTube'
              },
              alternance9: {
                title: 'YouTube Thumbnail',
                category: 'YouTube'
              },
              alternance10: {
                title: 'YouTube Thumbnail',
                category: 'YouTube'
              },
              alternance11: {
                title: 'YouTube Thumbnail',
                category: 'YouTube'
              },
              alternance12: {
                title: 'YouTube Thumbnail',
                category: 'YouTube'
              },
              alternance14: {
                title: 'Advertising Sheet',
                category: 'Advertising'
              },
              alternance13: {
                title: 'Advyse Newsletter',
                category: 'Newsletter'
              },
              pochette: {
                title: 'Cover Design',
                category: 'Video'
              },
              montage: {
                title: 'Video Editing',
                category: 'Video'
              }
            }
          },
          formation: {
            title: 'Training - Photoshop',
            subsections: {
              tiktok: 'TikTok Creations - My Universe'
            },
            items: {
              formation1: {
                title: 'Photoshop Creation',
                category: 'Photoshop'
              },
              formation2: {
                title: 'Photoshop Creation',
                category: 'Photoshop'
              },
              formationba1: {
                title: 'Photo Retouching',
                category: 'Before/After'
              },
              formationba2: {
                title: 'Photo Retouching',
                category: 'Before/After'
              },
              tiktok1: {
                title: 'Masazzi, Tunis',
                category: 'Restaurant'
              },
              tiktok2: {
                title: 'December in Djerba Hotel',
                category: 'Hotel'
              },
              tiktok3: {
                title: 'Unboxing Lancôme',
                category: 'Beauty'
              },
              tiktok4: {
                title: 'La Pistacherie, Paris',
                category: 'Restaurant'
              },
              tiktok5: {
                title: 'Pilau Restaurant, Tunis',
                category: 'Restaurant'
              },
              tiktok6: {
                title: 'Planet Wok ST-BRICE, Paris',
                category: 'Restaurant'
              },
              tiktok7: {
                title: 'Event Party',
                category: 'Event'
              },
              tiktok9: {
                title: 'Beauty Vlog',
                category: 'Beauty'
              },
              tiktok10: {
                title: 'DEMEL Edit',
                category: 'Lifestyle'
              },
              tiktok11: {
                title: 'Summer Vibes',
                category: 'Lifestyle'
              },
              tiktok12: {
                title: 'Food Edit',
                category: 'Restaurant'
              }
            }
          }
        }
      },
      experience: {
        title: 'Professional Experience',
        subtitle: 'My journey in digital marketing and communication',
        experiences: {
          exp1: {
            title: 'Work-Study | Community Manager',
            company: 'Advyse',
            location: 'Asnières-sur-Seine',
            period: 'September 2024 - August 2025',
            responsibilities: [
              'Daily management and animation of 5 social networks',
              'Creation of marketing materials: visuals, videos, posts, newsletters and presentations',
              'Editorial calendar management',
              'Participation in digital campaigns: content, reporting, engagement rate, traffic',
              'Writing content for website and social networks',
              'Digital and competitive intelligence to propose innovative actions'
            ],
            skills: ['Digital Marketing', 'Newsletters', 'Community Management', 'Content Creation']
          },
          exp2: {
            title: 'Digital Marketing Internship',
            company: 'Advyse',
            location: 'Asnières-sur-Seine',
            period: 'November 2023 - July 2024',
            responsibilities: [
              'Production of videos and editorial content (TikTok, Instagram)',
              'Analysis of +15 KPIs',
              'Performance monitoring, competitive intelligence & strategic adaptation',
              'Community management participation and message responses'
            ],
            skills: ['TikTok', 'Instagram', 'Analytics', 'Video Production']
          },
          exp3: {
            title: 'Marketing Communications Manager',
            company: 'Perfect Hygiène',
            location: 'Tunis, Tunisia',
            period: 'January 2023 - June 2023',
            responsibilities: [
              'Coordination of 360° marketing campaigns and creation of materials for more than 5 product launches',
              'Management of communication actions, content and promotional activations'
            ],
            skills: ['360° Campaigns', 'Content Strategy', 'Product Launches']
          },
          exp4: {
            title: 'Work-Study - Sales Assistant',
            company: 'Vatech Wabag',
            location: 'Tunis, Tunisia',
            period: 'June 2021 - June 2022',
            responsibilities: [
              'Preparation of 50+ B2B client proposals',
              'Market analysis and contribution to commercial meetings and action follow-up to support business development'
            ],
            skills: ['B2B', 'Market Analysis', 'Business Development']
          }
        }
      }
    }
  }
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'fr',
    fallbackLng: 'fr',
    interpolation: {
      escapeValue: false
    }
  })

export default i18n
