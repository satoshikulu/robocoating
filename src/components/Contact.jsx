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
    address: 'TOB Organize Sanayi Bölgesi 10020 Sokak No:9 Menderes/İzmir',
    hours: 'Pzt–Cum: 08:00–18:00'
  }

  const services = [
    { 
      title: 'Robot Boyama', 
      desc: '6 eksenli robotik sistemler',
      icon: 'robot',
      image: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?w=400&h=300&fit=crop'
    },
    { 
      title: 'Otomatik Boyama', 
      desc: 'Endüstriyel otomasyon çözümleri',
      icon: 'laser',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop&q=80'
    },
    { 
      title: 'Yüzey Hazırlık', 
      desc: 'Profesyonel yüzey işleme',
      icon: 'code',
      image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=400&h=300&fit=crop'
    },
    { 
      title: 'Kalite Kontrol', 
      desc: 'İleri teknoloji test sistemleri',
      icon: 'mobile',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop'
    },
    { 
      title: 'Otomasyon', 
      desc: 'Endüstri 4.0 entegrasyonu',
      icon: 'automation',
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop'
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
          <p className="section-subtitle">Endüstriyel çözümlerimiz hakkında bilgi almak için bizimle iletişime geçin</p>
          
          <div className="contact-main-info">
            <div className="contact-info-item">
              <svg className="contact-info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              <div className="contact-info-content">
                <div className="contact-info-label">ADRES</div>
                <div className="contact-info-value">TOB Organize Sanayi Bölgesi 10020 Sokak No:9 Menderes/İzmir TÜRKİYE</div>
              </div>
            </div>
            
            <div className="contact-info-row">
              <div className="contact-info-item">
                <svg className="contact-info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                <div className="contact-info-content">
                  <div className="contact-info-label">E-POSTA</div>
                  <a href="mailto:info@robocoating.com" className="contact-info-value link">info@robocoating.com</a>
                </div>
              </div>
              
              <div className="contact-info-item">
                <svg className="contact-info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                <div className="contact-info-content">
                  <div className="contact-info-label">TELEFON</div>
                  <a href="tel:+902324588811" className="contact-info-value link">0232 458 88 11</a>
                </div>
              </div>
              
              <div className="contact-info-item">
                <svg className="contact-info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
                  <line x1="12" y1="18" x2="12" y2="18"/>
                </svg>
                <div className="contact-info-content">
                  <div className="contact-info-label">MOBİL - MEHMET ALİ ALTUNDAL</div>
                  <a href="tel:+905557038888" className="contact-info-value link">0555 703 88 88</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Corporate Stats Section */}
        <div className="contact-stats fade-in">
          <div className="stat-item">
            <div className="stat-number">15+</div>
            <div className="stat-label">Yıllık Deneyim</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">500+</div>
            <div className="stat-label">Tamamlanan Proje</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">200+</div>
            <div className="stat-label">Mutlu Müşteri</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">24/7</div>
            <div className="stat-label">Teknik Destek</div>
          </div>
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
                  <img 
                    src="https://plus.unsplash.com/premium_photo-1661766990599-6d725de0d278?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                    alt="Mehmet Ali Altundal - Genel Müdür"
                    className="manager-photo"
                  />
                </div>
                <div className="manager-info">
                  <h4 className="manager-name">Mehmet Ali Altundal</h4>
                  <div className="manager-title">Genel Müdür</div>
                  <div className="manager-subtitle">Endüstriyel Teknoloji Uzmanı</div>
                  <p className="manager-description">
                    15 yılı aşkın sektör deneyimiyle endüstriyel boyama ve kaplama çözümlerinde güvenilir çözüm ortağınız.
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
                <div className="info-icon-small icon-email"></div>
                <div className="info-row-content">
                  <div className="info-row-label">E-POSTA</div>
                  <div className="info-row-value email">{contactInfo.email}</div>
                </div>
              </div>

              <div className="info-row">
                <div className="info-icon-small icon-location"></div>
                <div className="info-row-content">
                  <div className="info-row-label">ADRES</div>
                  <div className="info-row-value address">{contactInfo.address}</div>
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
                  <span>WhatsApp ile Ulaşın</span>
                </a>
                <a href={`mailto:${contactInfo.email}`} className="btn-action btn-email-action">
                  <span className="action-icon icon-email-white"></span>
                  <span>E-posta Gönder</span>
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Services */}
          <div className="contact-column scale-in">
            <div className="column-header">
              <div className="header-icon icon-services-large"></div>
              <h3>Hizmetlerimiz</h3>
            </div>
            
            <div className="column-content">
              <div className="services-intro">
                <p>Endüstriyel üretim süreçlerinizi optimize etmek için kapsamlı çözümler sunuyoruz.</p>
              </div>
              
              {services.map((service, index) => (
                <div key={index} className="service-row">
                  <div className="service-image-wrapper">
                    <img src={service.image} alt={service.title} className="service-image" />
                  </div>
                  <div className={`service-icon-box icon-${service.icon}`}></div>
                  <div className="service-row-content">
                    <div className="service-row-title">{service.title}</div>
                    <div className="service-row-desc">{service.desc}</div>
                  </div>
                  <div className="service-arrow">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M9 18l6-6-6-6"/>
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 3: Contact Form */}
          <div className="contact-column slide-in">
            <div className="column-header">
              <div className="header-icon icon-form-large"></div>
              <h3>Hızlı Teklif</h3>
            </div>
            
            <div className="column-content">
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Ad Soyad *</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Adınız ve soyadınız"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">E-posta *</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="ornek@email.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Telefon</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="05XX XXX XX XX"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="company">Firma</label>
                  <input 
                    type="text" 
                    id="company" 
                    name="company" 
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Firma adı"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Konu *</label>
                  <select 
                    id="subject" 
                    name="subject" 
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Bir konu seçin</option>
                    <option value="robot-boyama">Robot Boyama Hizmetleri</option>
                    <option value="yuzey-hazirlik">Yüzey Hazırlık Çözümleri</option>
                    <option value="teklif">Fiyat Teklifi</option>
                    <option value="teknik-destek">Teknik Destek</option>
                    <option value="diger">Diğer</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Mesajınız *</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    placeholder="Projeniz hakkında detayları buraya yazabilirsiniz..."
                    rows="4"
                  ></textarea>
                </div>

                <button type="submit" className="btn-submit-form">
                  <span className="submit-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
                    </svg>
                  </span>
                  <span>Mesajı Gönder</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
