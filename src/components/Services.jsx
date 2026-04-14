import { useEffect, useRef, useState } from 'react'
import './Services.css'

function Services() {
  const sectionRef = useRef(null)
  const cardsRef = useRef([])
  const [cardTransforms, setCardTransforms] = useState({})

  const handleMouseMove = (e, index) => {
    const card = cardsRef.current[index]
    if (!card) return

    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotateX = ((y - centerY) / centerY) * -8
    const rotateY = ((x - centerX) / centerX) * 8

    setCardTransforms(prev => ({
      ...prev,
      [index]: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`
    }))
  }

  const handleMouseLeave = (index) => {
    setCardTransforms(prev => ({
      ...prev,
      [index]: undefined
    }))
  }

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

    // Observe section header
    const header = sectionRef.current?.querySelector('.section-header')
    if (header) observer.observe(header)

    // Observe cards with stagger
    cardsRef.current.forEach((card, index) => {
      if (card) {
        card.classList.add(`stagger-${(index % 6) + 1}`)
        observer.observe(card)
      }
    })

    return () => observer.disconnect()
  }, [])

  const services = [
    {
      icon: 'robotic',
      title: 'Robotik Boya Sistemleri',
      description: '6 eksenli robotik boyama sistemleri ile hassas ve tutarlı boyama çözümleri. Otomotiv, beyaz eşya ve endüstriyel parça boyama uygulamaları.'
    },
    {
      icon: 'painting',
      title: 'Boyahane Tesisleri',
      description: 'Anahtar teslimi komple boyahane tesisi çözümleri. Tasarımdan kuruluma, otomasyondan kalite kontrol sistemlerine kadar tam entegre hizmet.'
    },
    {
      icon: 'equipment',
      title: 'Endüstriyel Boyama Ekipmanları',
      description: 'Yüksek performanslı endüstriyel boyama ekipmanları, boyama odaları, kurutma fırınları ve malzeme taşıma sistemleri.'
    },
    {
      icon: 'spray',
      title: 'İnkjet ve Lazer Markalama',
      description: 'Tarih, seri numarası, barkod ve logo markalama çözümleri. Metal, plastik ve cam yüzeylerde yüksek çözünürlüklü kodlama.'
    },
    {
      icon: 'automation',
      title: 'Otomasyon Sistemleri',
      description: 'Endüstri 4.0 standartlarında akıllı otomasyon çözümleri. PLC kontrol sistemleri, SCADA entegrasyonu ve proses optimizasyonu.'
    },
    {
      icon: 'environmental',
      title: 'Mobil ve Taşınabilir Sistemler',
      description: 'Saha uygulamaları için mobil boyama ve kaplama sistemleri. Yerinde hizmet ve taşınabilir çözümler ile esnek operasyon.'
    }
  ]

  return (
    <section className="services" ref={sectionRef}>
      <div className="container">
        <div className="section-header scroll-fade-in">
          <h2>Ürünler ve Hizmetler</h2>
          <p>
            Robotik boyama ve kaplama teknolojilerinde uzman çözümler. <br/>
            Endüstriyel uygulamaların tüm gereksinimlerini karşılayan profesyonel hizmet anlayışı.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div
              key={index}
              ref={(el) => { cardsRef.current[index] = el }}
              className="service-card scroll-fade-in"
              onMouseMove={(e) => handleMouseMove(e, index)}
              onMouseLeave={() => handleMouseLeave(index)}
              style={{ transform: cardTransforms[index] || undefined }}
            >
              <div className="service-icon-wrapper">
                {getIcon(service.icon)}
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function getIcon(type) {
  const icons = {
    painting: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M19 3H5c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/>
        <path d="M12 11v6"/>
        <path d="M8 17h8l-1 4H9l-1-4z"/>
      </svg>
    ),
    robotic: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="8" width="18" height="10" rx="2"/>
        <circle cx="12" cy="13" r="2"/>
        <path d="M7 8V6a5 5 0 0 1 10 0v2"/>
        <path d="M12 3v3"/>
      </svg>
    ),
    equipment: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="3"/>
        <path d="M12 1v4"/>
        <path d="M12 19v4"/>
        <path d="M4.22 4.22l2.83 2.83"/>
        <path d="M16.95 16.95l2.83 2.83"/>
        <path d="M1 12h4"/>
        <path d="M19 12h4"/>
        <path d="M4.22 19.78l2.83-2.83"/>
        <path d="M16.95 7.05l2.83-2.83"/>
      </svg>
    ),
    spray: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
        <path d="M8 12l3 3 5-5"/>
      </svg>
    ),
    environmental: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <path d="M9 12l2 2 4-4"/>
      </svg>
    ),
    automation: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
      </svg>
    )
  }
  return icons[type] || null
}

export default Services
