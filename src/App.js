import React from 'react'
import './App.css'

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

      <section id="home" className="hero-section">
        <div className="hero-overlay">
          <h1 className="artist-title-en">KIM CHAE WOON</h1>
          <p className="artist-title-kr">김 채 운</p>
        </div>
      </section>

      <section id="profile" className="section profile-section">
        <div className="section-title">
          <h2>PROFILE</h2>
        </div>
        <div className="profile-content">
          <div className="profile-image-placeholder">
            <span>Artist Photo</span>
          </div>
          <div className="profile-info">
            <h3>Kim Chae Woon</h3>
            <h1 className="profile-name">김채운</h1>
            <dl className="info-list">
              <dt>출생</dt>
              <dd>2005년 6월 6일</dd>
              <dt>데뷔일</dt>
              <dd>2024년 8월 8일</dd>
              <dt>소속사</dt>
              <dd>인하대학교</dd>
            </dl>
          </div>
        </div>
      </section>

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

      //6. 영상 섹션
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

      //7. 하단 footer
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