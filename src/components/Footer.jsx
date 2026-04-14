import { useEffect, useRef } from 'react'
import './Footer.css'

function Footer({ setCurrentSection }) {
  const footerRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    const sections = footerRef.current?.querySelectorAll('.footer-section')
    sections?.forEach((section, index) => {
      section.classList.add('scroll-fade-in', `stagger-${index + 1}`)
      observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])
  const news = [
    {
      date: '05.10.2024 12:16',
      title: "Robocoating Türkiye'nin İlk 12 Eksen Boyama Robotunu Kurdu",
      image: 'news1.jpg'
    },
    {
      date: '09.08.2024 10:24',
      title: 'Cezayir Otomotiv Devi Bizi Tercih Etti',
      image: 'news2.jpg'
    },
    {
      date: '09.08.2024 10:23',
      title: "Ayd Otomotiv Robocoating'e Büyük Güven",
      image: 'news3.jpg'
    }
  ]

  return (
    <footer className="footer" ref={footerRef}>
      <div className="container">
        <div className="footer-content">
          {/* Left Column - About */}
          <div className="footer-section">
            <h3>Robotik Boya</h3>
            <p className="footer-description">
              Robocoating®, Boyahane Tesisleri imalat ve kurulumundan,her türlü malzemeyi en rantabl biçimde boyayabilecek otomatik boyama sistemlerinden,boya ustasının elindeki tabancaya kadar komple çözümler sunar. Ayrıca yüksek teknolojiyi kolay kullanabilir programlama dilleri ile her türlü sanayide başarıyla ve güvenle kullanılmasını sağlar.
            </p>
          </div>

          {/* Middle Column - News */}
          <div className="footer-section">
            <h3>Haber & Duyurular</h3>
            <div className="news-list">
              {news.map((item, index) => (
                <div
                  key={index}
                  className="news-item"
                  onClick={() => setCurrentSection && setCurrentSection('news')}
                  role="button"
                  tabIndex={0}
                  onKeyPress={(e) => e.key === 'Enter' && setCurrentSection && setCurrentSection('news')}
                >
                  <div className="news-image-placeholder">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                      <circle cx="8.5" cy="8.5" r="1.5"/>
                      <polyline points="21 15 16 10 5 21"/>
                    </svg>
                  </div>
                  <div className="news-content">
                    <span className="news-date">{item.date}</span>
                    <h4>{item.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Contact */}
          <div className="footer-section">
            <h3>İletişim</h3>
            <div className="contact-info">
              <div className="contact-item" tabIndex={0}>
                <span className="icon">📍</span>
                <p>TOB Organize Sanayi Bölgesi 10020 Sokak No:9 Menderes/İzmir TÜRKİYE</p>
              </div>
              <div className="contact-item" tabIndex={0}>
                <span className="icon">✉️</span>
                <a href="mailto:info@robocoating.com">info@robocoating.com</a>
              </div>
            </div>

            {/* Language Flags */}
            <div className="language-flags">
              <span className="flag active" title="Türkçe">🇹🇷</span>
              <span className="flag" title="English">🇬🇧</span>
              <span className="flag" title="Deutsch">🇩🇪</span>
              <span className="flag" title="Italiano">🇮🇹</span>
              <span className="flag" title="Русский">🇷🇺</span>
              <span className="flag" title="العربية">🇸🇦</span>
            </div>

            {/* Social Media */}
            <div className="social-links">
              <a href="#" aria-label="Twitter" className="social-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
                </svg>
              </a>
              <a href="#" aria-label="Facebook" className="social-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="social-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect x="2" y="9" width="4" height="12"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
              <a href="#" aria-label="Instagram" className="social-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-bottom">
          <p>
            Tüm hakları saklıdır © {new Date().getFullYear()} Robocoating®. Bu websitesinin tamamı veya herhangi bir kısmı yazılı izin olmaksızın çoğaltılamaz, dağıtılamaz veya kullanılamaz.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
