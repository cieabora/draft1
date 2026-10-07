import React from 'react'
import './App.css'
import profileImg from './img/profile.jpg'

export default function App(){
  return(
    <div className="container">
      <header className="header">
        <div className="header-inner">
          <div className="logo">
            <a href="#home">BLANK</a>
          </div>
          <nav className="nav-menu">
            <ul>
              <li><a href="#home">홈</a></li>
              <li><a href="#profile">프로필</a></li>
              <li><a href="#gallery">갤러리</a></li>
              <li><a href="#album">앨범</a></li>
              <li><a href="#video">영상</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* hero section */}
      <section id="home" className="hero-section">
        <div className="hero-overlay">
          <h1 className="artist-title-en">KIM CHAE WOON</h1>
          <p className="artist-title-kr">김 채 운</p>
        </div>
      </section>

      <section id="profile" className="profile-section">
        <div className="profile-content">
          {/* 프로필 이미지 영역 */}
          <div className="profile-image-wrapper">
            <img src={profileImg} alt="김채운" className="profile-image" />
          </div>

          {/* 프로필 정보 영역 */}
          <div className="profile-info">
            <p className="artist-sub-title">KIM CHAE WOON</p>
            <h2 className="artist-name">김채운</h2>

            <div className="info-details">
              <p>출생 : 1995년 08월 21일</p>
              <p>데뷔 : 2013년 07월 02일 싱글 앨범 (꿈)</p>
            </div>

            {/* 소셜 아이콘 영역 */}
            <div className="social-links">
              <a href="#instagram"><i className="icon-instagram"></i></a>
              <a href="#youtube"><i className="icon-youtube"></i></a>
              <a href="#tiktok"><i className="icon-tiktok"></i></a>
              <a href="#x"><i className="icon-x"></i></a>
              <a href="#cafe"><i className="icon-cafe"></i></a>
            </div>
          </div>
        </div>
      </section>

      {/* gallery section */}
      <section id="gallery" className="section gallery-section">
        <div className="section-title">
          <h2>GALLERY</h2>
        </div>
        <div className="gallery-grid">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="gallery-item-placeholder">
              <span>Gallery Image {item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* album section */}
      <section id="album" className="section album-section">
        <div className="section-title">
          <h2>ALBUM</h2>
        </div>
        <div className="album-grid">
          <div className="album-card">
            <div className="album-cover-placeholder">Cover</div>
            <div className="album-badge">정규 1집</div>
            <h4 className="album-name">어쩌구</h4>
            <p className="album-data">2026.10.06</p>
          </div>
          <div className="album-card">
            <div className="album-cover-placeholder">Cover</div>
            <div className="album-badge">정규 1집</div>
            <h4 className="album-name">어쩌구</h4>
            <p className="album-data">2026.10.06</p>
          </div><div className="album-card">
            <div className="album-cover-placeholder">Cover</div>
            <div className="album-badge">정규 1집</div>
            <h4 className="album-name">어쩌구</h4>
            <p className="album-data">2026.10.06</p>
          </div><div className="album-card">
            <div className="album-cover-placeholder">Cover</div>
            <div className="album-badge">정규 1집</div>
            <h4 className="album-name">어쩌구</h4>
            <p className="album-data">2026.10.06</p>
          </div><div className="album-card">
            <div className="album-cover-placeholder">Cover</div>
            <div className="album-badge">정규 1집</div>
            <h4 className="album-name">어쩌구</h4>
            <p className="album-data">2026.10.06</p>
          </div><div className="album-card">
            <div className="album-cover-placeholder">Cover</div>
            <div className="album-badge">정규 1집</div>
            <h4 className="album-name">어쩌구</h4>
            <p className="album-data">2026.10.06</p>
          </div><div className="album-card">
            <div className="album-cover-placeholder">Cover</div>
            <div className="album-badge">정규 1집</div>
            <h4 className="album-name">어쩌구</h4>
            <p className="album-data">2026.10.06</p>
          </div>
        </div>
      </section>

      {/* video section */}
      <section id="video" className="section video-section">
        <div className="section-title">
          <h2>VIDEO</h2>
        </div>
        <div className="video-grid">
          {[1, 2, 3].map((v) => (
            <div key={v} className="video-card">
              <div className="video-thumb-placeholder">Video Thumbnail {v}</div>
              <h4 className="video-title">어쩌구 저쩌구</h4>
            </div>
          ))}
        </div>
      </section>

      {/* footer section */}
      <footer className="footer">
        <div className="footer-content">
          <div className="social-center">
            <a href="#instagram">공식 인스타그램</a>
            <a href="#youtube">공식 유튜브</a>
          </div>
          <p className="contact">Contact : 이메일 주소</p>
          <p className="copyright">&copy; 어쩌구 저쩌구</p>
        </div>
      </footer>
    </div>
  );
}