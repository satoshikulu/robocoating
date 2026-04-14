import './Catalog.css'

function Catalog({ setCurrentSection }) {
  const catalogImages = [
    {
      title: 'Robot Boyama Sistemi',
      description: '6 eksenli endüstriyel robot ile hassas boyama uygulamaları',
      image: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?w=800&h=600&fit=crop&q=80'
    },
    {
      title: 'Otomatik Boyama Hattı',
      description: 'Tam otomatik boyama üretim hattı',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop&q=80'
    },
    {
      title: 'Endüstriyel Kaplama',
      description: 'Profesyonel endüstriyel kaplama çözümleri',
      image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&h=600&fit=crop&q=80'
    },
    {
      title: 'Yüzey Hazırlık Teknolojisi',
      description: 'İleri teknoloji yüzey hazırlık sistemleri',
      image: 'https://images.unsplash.com/photo-1558618666-fa982d6a3697?w=800&h=600&fit=crop&q=80'
    },
    {
      title: 'Kalite Kontrol Sistemleri',
      description: 'Otomatik kalite kontrol ve test ekipmanları',
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop&q=80'
    },
    {
      title: 'Otomasyon Çözümleri',
      description: 'Endüstri 4.0 tam entegre otomasyon sistemleri',
      image: 'https://images.unsplash.com/photo-1565043666705-5f2d605b6721?w=800&h=600&fit=crop&q=80'
    }
  ]

  return (
    <section className="catalog">
      <div className="container">
        {/* Back to Home Button */}
        <div className="back-to-home">
          <button onClick={() => setCurrentSection('home')} className="btn-back-home">
            <span className="back-icon icon-home"></span>
            <span>Ana Sayfa</span>
          </button>
        </div>

        <div className="section-header fade-in">
          <h2>KATALOG</h2>
          <p className="section-subtitle">Endüstriyel robot boyama ve kaplama teknolojilerimiz</p>
        </div>

        {/* Catalog Grid */}
        <div className="catalog-grid">
          {catalogImages.map((item, index) => (
            <div key={index} className={`catalog-card fade-in`} style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="catalog-image-wrapper">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="catalog-image"
                  loading="lazy"
                />
                <div className="catalog-overlay">
                  <div className="catalog-content">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="catalog-cta scale-in">
          <h3>Projeleriniz için bizimle iletişime geçin</h3>
          <p>Size özel çözümler sunmak için hazırız</p>
          <button 
            className="btn-contact"
            onClick={() => setCurrentSection('contact')}
          >
            <span>İletişime Geç</span>
            <span className="btn-arrow">→</span>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Catalog
