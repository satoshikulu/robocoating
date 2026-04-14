import { useEffect, useRef } from 'react'
import './Hero.css'
import lesta1 from '../../assets/lesta.PNG'
import lesta4 from '../../assets/lesta4.png'
import lesta7 from '../../assets/lesta7.png'
import paintClients from '../../assets/paint_clients_lesta_robot.png'
import furnitureCart from '../../assets/Furniture Cart Solution 0303.jpg'
import lestaUSA from '../../assets/LestaUSA Self Learning Finishing Robot at DSW-min.jpg'
import powderApplication from '../../assets/Powder Application-min.jpg'

function Hero({ setCurrentSection }) {
  const contentRef = useRef(null)
  const titleRef = useRef(null)

  useEffect(() => {
    // Trigger animation on mount
    const timer = setTimeout(() => {
      if (contentRef.current) {
        contentRef.current.classList.add('visible')
      }
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  // Spark effect on mouse move
  const handleMouseMove = (e) => {
    if (!titleRef.current) return
    
    const rect = titleRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    
    // Create spark particle
    const spark = document.createElement('div')
    spark.className = 'spark-particle'
    spark.style.left = `${x}px`
    spark.style.top = `${y}px`
    titleRef.current.appendChild(spark)
    
    // Remove spark after animation
    setTimeout(() => spark.remove(), 1000)
  }

  const backgroundImages = [
    lesta1,
    lesta4,
    lesta7,
    paintClients,
    furnitureCart,
    lestaUSA,
    powderApplication
  ]

  return (
    <section className="hero">
      {/* Background Image Slider */}
      <div className="hero-background-slider">
        {backgroundImages.map((img, index) => (
          <div
            key={index}
            className="hero-bg-slide"
            style={{
              backgroundImage: `url(${img})`,
              animationDelay: `${index * 4}s`
            }}
          ></div>
        ))}
      </div>

      {/* Grid Pattern Overlay */}
      <div className="hero-grid-pattern"></div>

      <div className="hero-overlay"></div>
      <div className="container">
        <div className="hero-content">
          <div ref={contentRef} className="hero-text scroll-fade-in">
            <div 
              ref={titleRef}
              className="hero-label industrial-title"
              onMouseMove={handleMouseMove}
            >
              <span className="metallic-text">Robocoating</span>
              <div className="industrial-line"></div>
            </div>
            <h1>
              BOYAMA TEKNOLOJİSİNDE
              <br />
              <span className="highlight">GLOBAL UZMAN</span>
            </h1>
            <div className="hero-buttons">
              <button className="btn btn-primary" onClick={() => setCurrentSection('contact')}>
                <span className="btn-icon">→</span>
                <span>İLETİŞİM</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
