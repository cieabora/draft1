import React from 'react'
import './App.css'
import x_logo from './img/x-logo.png'
import tiktok_logo from './img/tiktok-logo.png'
import youtube_logo from './img/youtube-logo.png'
import instagram_logo from './img/insta-logo.png'
import cafe_logo from './img/cafe-logo.png'
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
import mwprofile from './img/mw_profile.JPG'
import mhprofile from './img/mh_profile.JPG'

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
            <img src={mwprofile} alt="황민우" className="profile-image" />
          </div>

          {/* 프로필 정보 영역 */}
          <div className="profile-info-wrap">
            <div className="profile-left">
              <div className="profile-info">
                <p className="artist-sub-title">HWANG MIN WOO</p>
                <h2 className="artist-name">황민우</h2>

                <div className="info-details">
                  <p>별명: 리틀싸이</p>
                  <p>생년월일 : 2005년 5월 17일</p>
                  <p>데뷔 : 2013년 싱글 앨범 (Show + Time)</p>
                </div>

                {/* 소셜 아이콘 영역 */}
                <div className="social-links-wrapper">
                  <a href="https://www.instagram.com/littlepsy_hmw"><img src={instagram_logo} alt="Instagram" className="social-links"></img></a>
                  <a href="https://www.youtube.com/channel/UCnmGrHvdV_CcVG4kvTm_0Eg"><img src={youtube_logo} alt="YouTube" className="social-links"></img></a>
                  <a href="https://www.tiktok.com/@minwoo0517"><img src={tiktok_logo} alt="TikTok" className="social-links"></img></a>
                  <a href="https://cafe.naver.com/trothoowoo"><img src={cafe_logo} alt="Cafe" className="social-links"></img></a>
                </div>
              </div>
            </div>

            <div className="profile-right">
              <p class="intro-text">
                어린 시절부터 남다른 끼와 독보적인 퍼포먼스로 대중의 시선을 사로잡은 가수 황민우.
              </p>
              <p class="right-detail">
                2012년 싸이의 세계적인 히트곡 '강남스타일' 뮤직비디오에 출연하며 '리틀싸이'라는 이름으로 국내외에 얼굴을 알린 그는, 이후 해외 13개국에서 활동하며 글로벌 무대에서도 존재감을 드러냈다. LG전자와 미국 LA 비비고 광고 모델을 비롯해 경찰청 포돌이 홍보대사 등 다양한 분야에서 활약하며 폭넓은 활동 영역을 구축해 왔다.
              </p>
              <p class="right-detail">
                이후 MBN '보이스트롯'에서 결승 TOP10에 오르며 가수로서의 실력을 입증했고, TV CHOSUN '미스터트롯2'에서는 동생 황민호와 함께 도전해 남다른 형제애와 무대 위 시너지로 대중의 사랑을 받았다. 또한 KBS '불후의 명곡'을 비롯해 SBS '인기가요', KBS '뮤직뱅크', MBC '쇼! 음악중심' 등 주요 음악 프로그램에서 활약하며 장르를 넘나드는 음악적 역량을 선보였다.
              </p>
              <p class="right-detail">
                2023년에는 싱글 '오빠(OPPA)'의 작사·작곡에 직접 참여하며 싱어송라이터로서의 역량까지 넓혔으며, KBS '슈퍼맨이 돌아왔다'에 동생 황민호와 함께 고정 출연하는 등 음악과 예능을 아우르는 활동을 이어가고 있다.
              </p>
              <p class="right-detail">
                현재는 국내 활동을 넘어 베트남 음악 시장 진출과 현지 앨범 발매를 준비하며 글로벌 아티스트로서 새로운 도약을 앞두고 있다.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="profile" className="profile-section">
        <div className="profile-content">
          {/* 프로필 이미지 영역 */}
          <div className="profile-image-wrapper">
            <img src={mhprofile} alt="황민우" className="profile-image" />
          </div>

          {/* 프로필 정보 영역 */}
          <div className="profile-info-wrap">
            <div className="profile-left">
              <div className="profile-info">
                <p className="artist-sub-title">HWANG MIN WOO</p>
                <h2 className="artist-name">황민호</h2>

                <div className="info-details">
                  <p>별명: 감성거인</p>
                  <p>출생 : 2013년 10월 22일</p>
                </div>

                {/* 소셜 아이콘 영역 */}
                <div className="social-links-wrapper">
                  <a href="https://www.instagram.com/real.hwangminho"><img src={instagram_logo} alt="Instagram" className="social-links"></img></a>
                  <a href="https://www.tiktok.com/@hwangminho2013"><img src={tiktok_logo} alt="TikTok" className="social-links"></img></a>
                </div>
              </div>
            </div>
            <div className="profile-right">
              <p class="intro-text">
                어린 나이가 믿기지 않는 깊은 감성과 폭발적인 가창력으로 대중의 마음을 사로잡은 가수 황민호.
              </p>
              <p class="right-detail">
                TV CHOSUN '미스터트롯2'에서 '감성 거인'이라는 수식어와 함께 뜨거운 화제를 모으며 높은 무대 영상 조회수를 기록했고, MBN '현역가왕2'에서는 본선 2차전 MVP에 선정되며 뛰어난 가창력과 무대 장악력을 다시 한번 입증했다. 특히 노래뿐만 아니라 화려한 장구 퍼포먼스까지 선보이며 자신만의 독보적인 음악적 색깔을 구축해 왔다.
              </p>
              <p class="right-detail">
                이후 KBS '불후의 명곡' 왕중왕전 우승을 비롯해 MBN '한일톱텐쇼', KBS '슈퍼맨이 돌아왔다', tvN '앙상블' 등 다양한 방송에서 활약하며 음악과 예능을 넘나드는 다재다능한 아티스트로 성장하고 있다.
              </p>
              <p class="right-detail">
                또한 경기도 오산시와 전라남도 영광군 홍보대사로 활동하며 대중과의 소통을 이어가고 있으며, 2025년에는 형 황민우와 함께 단독 콘서트 '황금효선물'을 개최하며 방송을 넘어 공연 무대에서도 존재감을 넓혀가고 있다.
              </p>
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

      {/*
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
      */}

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
