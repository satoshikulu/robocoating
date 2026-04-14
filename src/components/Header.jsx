import { useState, useEffect } from 'react'
import './Header.css'
import robotingLogo from '../../assets/robotinglogo.png'

function Header({ currentSection, setCurrentSection }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)
  const [corporateOpen, setCorporateOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const corporateItems = [
    'BİZ KİMİZ',
    'ROBOCOATING HAKKINDA',
    'VİZYON – MİSYON – DEĞERLERİMİZ',
    'KALİTE VE ÇEVRE POLİTİKAMIZ',
    'S.S.S'
  ]

  const productCategories = [
    {
      title: 'BOYAHANE TESİSLERİ',
      items: ['Boya Kurutma Fırınları', 'Kumlama Tesisleri', 'Otomobil Boya Kabinleri', 'Toz Boya Tesisleri', 'Yaş Boya Tesisleri']
    },
    {
      title: 'ROBOTİK BOYAMA',
      items: [
        'Ahşap Sektörü Robotik Boyama', 'Metal Sektörü Robotik Boyama', 'Plastik Sektörü Robotik Boyama',
        'Seramik Sektörü Robotik Boyama', 'Robotik Püskürtme Yapıştırma', 'Robotlu Sandalye Koltuk Boyama',
        'Mobilya Robotik Boyama', 'Kapı-Panel-Pencere Robotik Boyama', 'Metal Konteyner-Şase-Kanat Robotik Boyama',
        'Oyuncak Boyama', 'Beyaz Eşya Plastik Aksam Boyama', 'Televizyon Setleri Boyama',
        'Araç Tampon Boyama', 'Otomotiv Plastik Aksam Boyama', 'Sır Kaplama Robotları',
        'Seramik Sır Uygulamaları', 'Elektrik Panoları vb. Toz Boyama', 'Pompa Vana Metal Boyama',
        'Havlupan Boyama', 'Traktör, Kabin vb. Parçaları Boyama', 'Robotik Toz Boyama',
        '6 Eksen Robotlu Toz Boya Tesisleri', 'Robotik Gel-Coat Püskürtme',
        '5 Eksen Robotlu Toz Boya Hatları', 'Robotlu Elyaf Kırpma'
      ]
    },
    {
      title: 'BOYAMA EKİPMANLARI',
      items: [
        'Boya Pompaları', 'Oranlamalı Pompalar', 'Toz Boya Ekipmanları', 'Teksture Makinaları',
        'Elektrikli Airless Boya Pompaları', 'Benzinli Airless Boya Pompaları', 'Hava Tahrikli Boya Pompaları',
        'Hava Destekli Havasız Airmax Boya Pompaları', 'Airsprey Boya Pompaları',
        'Elektrostatik Yaş Boya Tabanca ve Pompaları', 'Transfer Pompaları', 'Basınç Tankları',
        'Pistoleli Tabancalar', 'Çift Kompenantlı Boya Makinaları', 'Airspray (Havalı) Boya Makinası Tabancası',
        'Airless (Havasız) Boya Makinası Tabancası', 'Airmix (Hava Destekli Havasız) Boya Makinası Tabancası',
        'Yüksek Basınçlı ve Düşük Basınçlı Solvente Dayanıklı Hortumlar', 'Tabanca Uzatmaları',
        'Tabanca Nozulları', 'Otomatik Boya Tabancaları', 'Pnomatik Boya Karıştırıcıları',
        'Boyacı Tulumu Koruyucu Elbise', 'Boya Maskesi', 'Yaş Film Ölçme Tarağı',
        'Kuru Film Kalınlığı Ölçme Cihazı', 'Kalınlık Ölçme Aparatı', 'Viskozite Kabı', 'Aksesuarlar'
      ]
    },
    {
      title: 'ÇEVRE TEKNOLOJİLERİ',
      items: ['Boya Çamuru Arıtma Sistemleri', 'Solvent Geri Dönüşüm Sistemleri', 'Toz Toplama Sistemleri', 'Baca Gazı Yıkama Sistemleri']
    },
    {
      title: 'YÜZEY İŞLEM',
      items: ['Yüzey İşlem Teknolojileri', 'Püskürtmeli Yüzey İşlem Tesisleri', 'Daldırmalı Yüzey Temizleme', 'Yüzey İşlem Tesisleri']
    },
    {
      title: 'HİZMETLER',
      items: ['Proje Danışmanlığı', 'Servis ve Yedek Parça', 'Eğitim ve Seminerler']
    }
  ]

  const navItems = [
    { id: 'corporate', label: 'KURUMSAL', hasDropdown: true },
    { id: 'products', label: 'ÜRÜN & HİZMETLER', hasDropdown: true },
    { id: 'solutions', label: 'ENDÜSTRİYEL ÇÖZÜMLER' },
    { id: 'news', label: 'HABERLER' },
    { id: 'hr', label: 'İNSAN KAYNAKLARI' },
    { id: 'contact', label: 'İLETİŞİM' }
  ]

  return (
    <>
      {/* Top Bar */}
      <div className="top-bar">
        <div className="container">
          <div className="top-bar-content">
            <div className="top-bar-left">
              <div className="logo-full" onClick={() => setCurrentSection('home')} style={{ cursor: 'pointer' }}>
                <img src={robotingLogo} alt="Robocoating Logo" className="logo-image" />
              </div>
            </div>
            
            <div className="top-bar-center">
              <div className="contact-info-top">
                <div className="contact-item-top">
                  <span className="icon">✉️</span>
                  <div>
                    <span className="label">Email</span>
                    <a href="mailto:info@robocoating.com">info@robocoating.com</a>
                  </div>
                </div>
                <div className="divider"></div>
                <div className="contact-item-top">
                  <span className="icon">📞</span>
                  <div>
                    <span className="label">Telefon</span>
                    <a href="tel:+905557038888">0555 703 88 88</a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="top-bar-right">
              <div className="language-flags-top">
                <span className="flag" title="Türkçe">🇹</span>
                <span className="flag" title="English">🇬</span>
                <span className="flag" title="Deutsch">🇩</span>
                <span className="flag" title="Italiano">🇮</span>
                <span className="flag" title="Русский">🇷🇺</span>
                <span className="flag" title="العربية">🇸🇦</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="header-content">
            {/* Desktop Navigation */}
            <nav className="desktop-nav">
              <ul>
                {navItems.map(item => (
                  <li 
                    key={item.id} 
                    className={item.id === 'products' ? 'products-nav-item' : item.id === 'corporate' ? 'corporate-nav-item' : ''}
                    onMouseEnter={() => {
                      if (item.id === 'products') setProductsOpen(true)
                      if (item.id === 'corporate') setCorporateOpen(true)
                    }}
                    onMouseLeave={() => {
                      if (item.id === 'products') setProductsOpen(false)
                      if (item.id === 'corporate') setCorporateOpen(false)
                    }}
                  >
                    <button
                      className={currentSection === item.id ? 'active' : ''}
                      onClick={() => item.id !== 'products' && item.id !== 'corporate' && setCurrentSection(item.id === 'home' ? 'home' : item.id)}
                    >
                      {item.label}
                      {item.hasDropdown && (
                        <span className={`dropdown-arrow ${(item.id === 'products' && productsOpen) || (item.id === 'corporate' && corporateOpen) ? 'open' : ''}`}>∨</span>
                      )}
                    </button>
                    {item.id === 'products' && productsOpen && (
                      <div className="products-dropdown" onMouseEnter={() => setProductsOpen(true)} onMouseLeave={() => setProductsOpen(false)}>
                        <div className="products-rectangle">
                          {productCategories.map((cat, catIndex) => (
                            <div key={catIndex} className="product-section">
                              <h4>{cat.title}</h4>
                              <div className="product-items-row">
                                {cat.items.map((prod, prodIndex) => (
                                  <button 
                                    key={prodIndex} 
                                    className="product-item-btn"
                                    onClick={() => { setCurrentSection('services'); setProductsOpen(false) }}
                                  >
                                    {prod}
                                  </button>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    {item.id === 'corporate' && corporateOpen && (
                      <div className="products-dropdown corporate-dropdown-narrow" onMouseEnter={() => setCorporateOpen(true)} onMouseLeave={() => setCorporateOpen(false)}>
                        <div className="products-rectangle">
                          <div className="product-section corporate-section">
                            <h4>KURUMSAL</h4>
                            <div className="corporate-items-vertical">
                              {corporateItems.map((corp, index) => (
                                <button 
                                  key={index} 
                                  className="corporate-item-vertical"
                                  onClick={() => { setCurrentSection('corporate'); setCorporateOpen(false) }}
                                >
                                  {corp}
                                </button>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </li>
                ))}
                <li>
                  <button className="search-btn">
                    🔍
                  </button>
                </li>
                <li>
                  <button className="catalog-btn" onClick={() => setCurrentSection('catalog')}>
                    <span className="btn-icon">→</span>
                    <span>KATALOG</span>
                  </button>
                </li>
                <li>
                  <button 
                    className={currentSection === 'about' ? 'active' : ''}
                    onClick={() => setCurrentSection('about')}
                  >
                    HAKKIMIZDA
                  </button>
                </li>
              </ul>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="mobile-menu-btn"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span className={menuOpen ? 'open' : ''}></span>
              <span className={menuOpen ? 'open' : ''}></span>
              <span className={menuOpen ? 'open' : ''}></span>
            </button>
          </div>

          {/* Mobile Navigation */}
          {menuOpen && (
            <nav className="mobile-nav">
              <ul>
                {navItems.map(item => (
                  <li key={item.id}>
                    <button
                      className={currentSection === item.id ? 'active' : ''}
                      onClick={() => {
                        setCurrentSection(item.id)
                        setMenuOpen(false)
                      }}
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </div>
      </header>
    </>
  )
}

export default Header
