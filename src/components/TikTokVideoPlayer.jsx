import { useState, useRef, useEffect } from 'react'
import { Play, Pause, Volume2, VolumeX } from 'lucide-react'
import './TikTokVideoPlayer.css'

const TikTokVideoPlayer = ({ src, title, category }) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const [progress, setProgress] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const videoRef = useRef(null)
  const progressBarRef = useRef(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleTimeUpdate = () => {
      const progress = (video.currentTime / video.duration) * 100
      setProgress(progress)
    }

    const handleEnded = () => {
      video.currentTime = 0
      video.play()
    }

    // Auto-play when component mounts with Intersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().then(() => {
              setIsPlaying(true)
            }).catch(err => {
              console.log('Autoplay prevented:', err)
            })
          } else {
            video.pause()
            setIsPlaying(false)
          }
        })
      },
      { threshold: 0.5 }
    )

    observer.observe(video)

    video.addEventListener('timeupdate', handleTimeUpdate)
    video.addEventListener('ended', handleEnded)

    return () => {
      observer.disconnect()
      video.removeEventListener('timeupdate', handleTimeUpdate)
      video.removeEventListener('ended', handleEnded)
    }
  }, [])

  const togglePlay = () => {
    const video = videoRef.current
    if (video.paused) {
      video.play()
      setIsPlaying(true)
    } else {
      video.pause()
      setIsPlaying(false)
    }
  }

  const toggleMute = () => {
    const video = videoRef.current
    video.muted = !video.muted
    setIsMuted(!isMuted)
  }

  const handleProgressBarClick = (e) => {
    const video = videoRef.current
    const progressBar = progressBarRef.current
    if (!video || !progressBar) return
    
    const rect = progressBar.getBoundingClientRect()
    const pos = (e.clientX - rect.left) / rect.width
    const newTime = pos * video.duration
    
    if (!isNaN(newTime)) {
      video.currentTime = newTime
      setProgress(pos * 100)
    }
  }

  return (
    <div 
      className="tiktok-video-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* iPhone-like frame */}
      <div className="iphone-frame">
        <div className="iphone-notch"></div>
        
        <video
          ref={videoRef}
          src={src}
          className="tiktok-video"
          loop
          muted={isMuted}
          playsInline
          preload="auto"
        />

        {/* Controls overlay */}
        <div className={`video-controls-overlay ${isHovered ? 'visible' : ''}`}>
          {/* Play/Pause button */}
          <button 
            className="control-button play-pause-btn"
            onClick={togglePlay}
            aria-label={isPlaying ? 'Pause' : 'Play'}
          >
            {isPlaying ? <Pause size={32} /> : <Play size={32} />}
          </button>

          {/* Audio toggle button */}
          <button 
            className="control-button audio-btn"
            onClick={toggleMute}
            aria-label={isMuted ? 'Unmute' : 'Mute'}
          >
            {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
          </button>

          {/* Progress bar */}
          <div 
            ref={progressBarRef}
            className="progress-bar-container"
            onClick={handleProgressBarClick}
          >
            <div className="progress-bar-bg">
              <div 
                className="progress-bar-fill"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>

        {/* Info overlay */}
        <div className="video-info-overlay">
          <span className="video-category-badge">{category}</span>
          <h4 className="video-title">{title}</h4>
        </div>
      </div>
    </div>
  )
}

export default TikTokVideoPlayer
