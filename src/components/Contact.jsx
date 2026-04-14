import './Contact.css'
import { useState } from 'react'

function Contact({ setCurrentSection }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  })

  const contactInfo = {
    person: 'Mehmet Ali Altundal',
    phone: '0555 703 88 88',
    email: 'info@robocoating.com',
    company: 'Robocoating',
    address: 'Organize Sanayi Bölgesi, Ankara',
    hours: 'Pzt–Cum: 08:00–18:00'
  }

  const services = [
    { 
      title: 'Robot Boyama', 
      desc: '6 eksenli robotik sistemler',
      icon: 'robot'
    },
    { 
      title: 'Lazer Markalama', 
      desc: 'Metal, plastik, cam yüzeyler',
      icon: 'laser'
    },
    { 
      title: 'İnkjet Kodlama', 
      desc: 'Tarih, seri no, barkod',
      icon: 'code'
    },
    { 
      title: 'Mobil Sistemler', 
      desc: 'Taşınabilir saha çözümleri',
      icon: 'mobile'
    },
    { 
      title: 'Otomasyon', 
      desc: 'Endüstri 4.0 entegrasyonu',
      icon: 'automation'
    }
  ]

  const sectors = [
    { name: 'Otomotiv', icon: 'car' },
    { name: 'Makine', icon: 'tool' },
    { name: 'Ambalaj', icon: 'package' },
    { name: 'Gıda', icon: 'food' },
    { name: 'İnşaat', icon: 'construction' },
    { name: 'Savunma', icon: 'defense' }
  ]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Form submission logic would go here
    alert('Mesajınız alındı! En kısa sürede size dönüş yapacağız.')
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      subject: '',
      message: ''
    })
  }

  return (
    <section className="contact">
      <div className="container">
        {/* Back to Home Button */}
        <div className="back-to-home">
          <button onClick={() => setCurrentSection('home')} className="btn-back-home">
            <span className="back-icon icon-home"></span>
            <span>Ana Sayfa</span>
          </button>
        </div>

        <div className="section-header fade-in">
          <h2>İletişim</h2>
          <p className="section-subtitle">Projeleriniz için bizimle iletişime geçin. Size en kısa sürede dönüş yapacağız.</p>
        </div>

        <div className="contact-columns">
          {/* Column 1: Contact Info */}
          <div className="contact-column fade-in">
            <div className="column-header">
              <div className="header-icon icon-phone-large"></div>
              <h3>İletişim Bilgileri</h3>
            </div>
            
            <div className="column-content">
              {/* Yönetici Profil Kartı */}
              <div className="manager-card">
                <div className="manager-avatar">
                  <div className="avatar-placeholder">
                    <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                      <circle cx="12" cy="7" r="4"/>
                    </svg>
                  </div>
                </div>
                <div className="manager-info">
                  <h4 className="manager-name">Mehmet Ali Altundal</h4>
                  <div className="manager-title">360 SANAYI Genel Müdürü</div>
                  <div className="manager-subtitle">Endüstriyel Teknoloji Uzmanı</div>
                  <p className="manager-description">
                    15 yılı aşkın sektör deneyimiyle endüstriyel markalama ve kodlama çözümlerinde güvenilir çözüm ortağınız.
                  </p>
                </div>
              </div>

              <div className="info-row">
                <div className="info-icon-small icon-phone"></div>
                <div className="info-row-content">
                  <div className="info-row-label">TELEFON</div>
                  <div className="info-row-value phone">{contactInfo.phone}</div>
                </div>
              </div>

              <div className="info-row">
                <div className="info-icon-small icon-building"></div>
                <div className="info-row-content">
                  <div className="info-row-label">FİRMA</div>
                  <div className="info-row-value">{contactInfo.company}</div>
                </div>
              </div>

              <div className="info-row">
                <div className="info-icon-small icon-clock"></div>
                <div className="info-row-content">
                  <div className="info-row-label">ÇALIŞMA SAATLERİ</div>
                  <div className="info-row-value">{contactInfo.hours}</div>
                </div>
              </div>

              <div className="column-actions">
                <a href={`tel:${contactInfo.phone.replace(/\s/g, '')}`} className="btn-action btn-call-action">
                  <span className="action-icon icon-phone-white"></span>
                  <span>Hemen Ara</span>
                </a>
                <a href={`https://wa.me/90${contactInfo.phone.replace(/\s/g, '').substring(1)}`} className="btn-action btn-whatsapp-action" target="_blank" rel="noopener noreferrer">
                  <span className="action-icon icon-whatsapp-white"></span>
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Services */}
          <div className="contact-column scale-in">
            <div className="column-header">
              <div className="header-icon icon-services-large"></div>
              <h3>Hizmet Alanlarımız</h3>
            </div>
            
            <div className="column-content">
              {services.map((service, index) => (
                <div key={index} className="service-row">
                  <div className={`service-icon-box icon-${service.icon}`}></div>
                  <div className="service-row-content">
                    <div className="service-row-title">{service.title}</div>
                    <div className="service-row-desc">{service.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 3: Sectors */}
          <div className="contact-column slide-in">
            <div className="column-header">
              <div className="header-icon icon-sectors-large"></div>
              <h3>Sektör Çözümleri</h3>
            </div>
            
            <div className="column-content">
              <div className="sectors-grid-new">
                {sectors.map((sector, index) => (
                  <div key={index} className="sector-box">
                    <div className={`sector-icon-new icon-${sector.icon}`}></div>
                    <div className="sector-name-new">{sector.name}</div>
                  </div>
                ))}
              </div>

              <div className="cta-box">
                <div className="cta-icon icon-rocket"></div>
                <h4>Hızlı Teklif</h4>
                <p>Projenizi anlatın, size özel çözüm sunalım.</p>
                <a href={`tel:${contactInfo.phone.replace(/\s/g, '')}`} className="btn-cta-new">
                  <span className="cta-phone-icon icon-phone-white"></span>
                  <span>{contactInfo.phone}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
