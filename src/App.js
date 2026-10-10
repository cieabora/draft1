import React from 'react'
import './App.css'
import profileImg from './img/profile.jpg'
import x_logo from './img/x-logo.png'
import tiktok_logo from './img/tiktok-logo.png'
import youtube_logo from './img/youtube-logo.png'
import instagram_logo from './img/insta-logo.png'

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
          <h1 className="artist-title-en">HWANG MIN WOO</h1>
          <p className="artist-title-kr">황 민 우</p>
        </div>
      </section>

      <section id="profile" className="profile-section">
        <div className="profile-content">
          {/* 프로필 이미지 영역 */}
          <div className="profile-image-wrapper">
            <img src={profileImg} alt="황민우" className="profile-image" />
          </div>

          {/* 프로필 정보 영역 */}
          <div className="profile-info">
            <p className="artist-sub-title">HWANG MIN WOO</p>
            <h2 className="artist-name">황민우</h2>

            <div className="info-details">
              <p>출생 : 2005년 5월 17일</p>
              <p>데뷔 : 2013년 3월 13일 (Show + Time)</p>
            </div>

            {/* 소셜 아이콘 영역 */}
            <div className="social-links-wrapper">
              <a href="#instagram"><img src={instagram_logo} alt="Instagram" className="social-links"></img></a>
              <a href="#youtube"><img src={youtube_logo} alt="YouTube" className="social-links"></img></a>
              <a href="#tiktok"><img src={tiktok_logo} alt="TikTok" className="social-links"></img></a>
              <a href="#x"><img src={x_logo} alt="X" className="social-links"></img></a>
              <a href="#cafe"><i className="social-links"></i></a>
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
            <h4 className="album-name">Show + Time</h4>
            <p className="album-date">2013.03.13</p>
          </div>
          <div className="album-card">
            <div className="album-cover-placeholder">Cover</div>
            <div className="album-badge">정규 1집</div>
            <h4 className="album-name">아리아리랑</h4>
            <p className="album-date">2014.04.21</p>
          </div>
          <div className="album-card">
            <div className="album-cover-placeholder">Cover</div>
            <div className="album-badge">정규 1집</div>
            <h4 className="album-name">Hay Cho Toi</h4>
            <p className="album-date">2015.12.04</p>
          </div>
          <div className="album-card">
            <div className="album-cover-placeholder">Cover</div>
            <div className="album-badge">정규 1집</div>
            <h4 className="album-name">오키도키</h4>
            <p className="album-date">2016.10.21</p>
          </div>
          <div className="album-card">
            <div className="album-cover-placeholder">Cover</div>
            <div className="album-badge">정규 1집</div>
            <h4 className="album-name">카톡송 (#KTS)</h4>
            <p className="album-date">2017.06.09</p>
          </div>
          <div className="album-card">
            <div className="album-cover-placeholder">Cover</div>
            <div className="album-badge">정규 1집</div>
            <h4 className="album-name">영일만친구</h4>
            <p className="album-date">2022.12.30</p>
          </div>
          <div className="album-card">
            <div className="album-cover-placeholder">Cover</div>
            <div className="album-badge">정규 1집</div>
            <h4 className="album-name">님의 등불</h4>
            <p className="album-date">2023.06.03</p>
          </div>
          <div className="album-card">
            <div className="album-cover-placeholder">Cover</div>
            <div className="album-badge">정규 1집</div>
            <h4 className="album-name">오빠(OPPA)</h4>
            <p className="album-date">2023.06.27</p>
          </div>
          <div className="album-card">
            <div className="album-cover-placeholder">Cover</div>
            <div className="album-badge">정규 1집</div>
            <h4 className="album-name">당신의 의미</h4>
            <p className="album-date">2023.07.08</p>
          </div>
          <div className="album-card">
            <div className="album-cover-placeholder">Cover</div>
            <div className="album-badge">정규 1집</div>
            <h4 className="album-name">황금꿩꿩</h4>
            <p className="album-date">2023.11.15</p>
          </div>
          <div className="album-card">
            <div className="album-cover-placeholder">Cover</div>
            <div className="album-badge">정규 1집</div>
            <h4 className="album-name">Vroom</h4>
            <p className="album-date">2025.06.20</p>
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