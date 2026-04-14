import './About.css'
import factoryMain from '../../assets/LestaUSA Self Learning Finishing Robot at DSW-min.jpg'
import industrialEquipment from '../../assets/paint_clients_lesta_robot.png'
import automation from '../../assets/Powder Application-min.jpg'

function About() {
  return (
    <section className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text fade-in">
            <h2>Hakkımızda</h2>
            <p className="lead">
              20 yılı aşkın deneyimimizle endüstriyel robot boyama ve kaplama sektöründe öncü çözümler sunuyoruz.
            </p>
            <p>
              Robocoating olarak, robot teknolojisi ve uzman ekibimizle birleşerek müşterilerimize 
              en yüksek kaliteli boyama ve kaplama hizmetlerini sağlamaktayız. Sürekli gelişim ve yenilikçilik 
              anlayışımızla sektörün öncü firmalarından biri haline geldik.
            </p>
            <p>
              Müşteri memnuniyetini ön planda tutarak, her projede en iyi sonuçları elde etmek için 
              çalışıyoruz. Modern fabrikamız ve son teknoloji robot ekipmanlarımızla İzmir'de hizmet veriyoruz.
            </p>
            
            <div className="features">
              <div className="feature-item">
                <span className="check">✓</span>
                <div>
                  <h4>ISO 9001 Sertifikalı</h4>
                  <p>Kalite yönetim sistemi</p>
                </div>
              </div>
              <div className="feature-item">
                <span className="check">✓</span>
                <div>
                  <h4>500+ Tamamlanan Proje</h4>
                  <p>Endüstriyel başarı hikayeleri</p>
                </div>
              </div>
              <div className="feature-item">
                <span className="check">✓</span>
                <div>
                  <h4>6 Eksenli Robotlar</h4>
                  <p>Hassas boyama teknolojisi</p>
                </div>
              </div>
              <div className="feature-item">
                <span className="check">✓</span>
                <div>
                  <h4>Uzman Ekip</h4>
                  <p>50+ profesyonel çalışan</p>
                </div>
              </div>
            </div>
          </div>

          <div className="about-image scale-in">
            <div className="image-gallery">
              <div className="gallery-item main-image">
                <img 
                  src={factoryMain} 
                  alt="Fabrika ve Üretim Tesisi"
                  className="facility-image"
                />
                <div className="image-caption">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                    <polyline points="9 22 9 12 15 12 15 22"/>
                  </svg>
                  <span>Modern Üretim Tesisimiz</span>
                </div>
              </div>
              
              <div className="gallery-grid">
                <div className="gallery-item">
                  <img 
                    src={industrialEquipment} 
                    alt="Endüstriyel Ekipmanlar"
                    className="facility-image"
                  />
                  <div className="image-caption">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="3"/>
                      <path d="M12 1v6m0 6v6m11-7h-6m-6 0H1"/>
                    </svg>
                    <span>İleri Teknoloji</span>
                  </div>
                </div>
                
                <div className="gallery-item">
                  <img 
                    src={automation} 
                    alt="Otomasyon Sistemleri"
                    className="facility-image"
                  />
                  <div className="image-caption">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                    </svg>
                    <span>Otomasyon</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
