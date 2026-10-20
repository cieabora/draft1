import React from 'react'
import './App.css'
import profileImg from './img/profile.jpg'
import x_logo from './img/x-logo.png'
import tiktok_logo from './img/tiktok-logo.png'
import youtube_logo from './img/youtube-logo.png'
import instagram_logo from './img/insta-logo.png'
import gallery1 from './img/gallery1.JPG'
import gallery2 from './img/gallery2.JPG'
import gallery3 from './img/gallery3.JPG'
import gallery4 from './img/gallery4.JPG'
import gallery5 from './img/gallery5.JPG'
import gallery6 from './img/gallery6.JPG'
import album1 from './img/album1.jpeg'
import album2 from './img/album2.jpeg'
import album3 from './img/album3.jpeg'
import album4 from './img/album4.jpeg'
import album5 from './img/album5.jpeg'
import album6 from './img/album6.jpeg'
import album7 from './img/album7.jpeg'
import album8 from './img/album8.jpeg'
import mainimg from './img/mainimg.JPG'

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
          <img src={mainimg} alt="황민우" className="hero-image" />
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
          {[gallery1, gallery2, gallery3, gallery4, gallery5, gallery6].map((img, index) => (
            <div key={index} className="gallery-item-placeholder">
              <img src={img} alt={`Gallery Image ${index + 1}`} />
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
            <div className="album-cover-placeholder">
              <img src={album1} alt="Album 1" />
            </div>
            <h4 className="album-name">Show + Time</h4>
            <p className="album-date">2013.03.13</p>
          </div>

          <div className="album-card">
            <div className="album-cover-placeholder">
              <img src={album2} alt="Album 2" />
            </div>
            <h4 className="album-name">오키도키</h4>
            <p className="album-date">2016.10.21</p>
          </div>

          <div className="album-card">
            <div className="album-cover-placeholder">
              <img src={album3} alt="Album 3" />
            </div>
            <h4 className="album-name">오빠 (OPPA)</h4>
            <p className="album-date">2023.06.27</p>
          </div>

          <div className="album-card">
            <div className="album-cover-placeholder">
              <img src={album4} alt="Album 4" />
            </div>
            <h4 className="album-name">Vroom</h4>
            <p className="album-date">2025.06.20</p>
          </div>

          <div className="album-card">
            <div className="album-cover-placeholder">
              <img src={album5} alt="Album 5" />
            </div>
            <h4 className="album-name">울아버지</h4>
            <p className="album-date">2023.05.15</p>
          </div>

          <div className="album-card">
            <div className="album-cover-placeholder">
              <img src={album6} alt="Album 6" />
            </div>
            <h4 className="album-name">팔팔하게</h4>
            <p className="album-date">2024.08.10</p>
          </div>

          <div className="album-card">
            <div className="album-cover-placeholder">
              <img src={album7} alt="Album 7" />
            </div>
            <h4 className="album-name">망나니</h4>
            <p className="album-date">2025.03.01</p>
          </div>

          <div className="album-card">
            <div className="album-cover-placeholder">
              <img src={album8} alt="Album 8" />
            </div>
            <h4 className="album-name">가라지</h4>
            <p className="album-date">2025.09.27</p>
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