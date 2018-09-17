import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SwiperWrapper from './SwiperWrapper';
import SwiperSlide from './SwiperSlide';
import GitHubProfile from './components/GitHubProfile';
import FlickrSlider from './components/FlickrSlider';

class App extends Component {
  render() {
    return (
      <div className="App container fh">
        <div className="row fh cf">
          <aside className="col-16 pad-col-4 desk-col-3 ">
            <div className="row cf">
              <div className="col-16 pad-col-4 desk-col-3 ac">
                <div className="top-img">
                  <div className="swiper-container swiper-profile ac">
                    <FlickrSlider />
                  </div>
                </div>
                <figure className="circle  col-5 pad-col-2 desk-col-1 ci">
                  <img src="assets/media/img/me.jpg" alt="me" />
                </figure>
                <div className="vcard">
                  <h1 className="h3">Aaron Bryce Fischer</h1>
                  <h2 className="h5">Web Design / Development</h2>
                  <ul className="social list-unstyled al">
                    <li className="twitter"><a href="http://twitter.com/aaronfischer" target="_blank"><i className="icon-twitter"></i>Tweets <span className="fr count">0</span></a></li>
                    <li className="flickr"><a href="https://www.flickr.com/photos/aaronfischer" target="_blank"><i className="icon-flickr"></i>Photos <span className="fr count">0</span></a></li>
                    <GitHubProfile />
                    <li><a href="mailto:aaron@gofisching.com?subject=Contacting you via your website"><i className="icon-mail-1"></i>Email</a></li>
                  </ul>
                  <div className="about-me al">
                    <h3 className="h4">About:</h3>
                    <div>I am a web designer/developer, hobby-photographer, educator, student, apple nerd, and movie-lover</div>
                  </div>
                </div>
              </div>
            </div>
          </aside>
          <section className="col-16 pad-col-12 desk-col-13 ">
            <SwiperWrapper>
              <SwiperSlide
                name="WeDrinkin'"
                slide="wedrinkin"
                responsibilities="Development | Design | iOS | PhoneGap"
                img="assets/media/img/work/wedrinkin.png"
                link="https://appsto.re/us/SdCL4.i"
                linkName="Download App"/>
              <SwiperSlide
                name="Modernizing Medicine"
                slide="mmi"
                responsibilities="Development | Wordpress | Frontend | Backend"
                img="assets/media/img/work/mmi.png"
                link="http://modmed.com"
                linkName="Visit Site"/>
              <SwiperSlide
                name="Wedding"
                slide="wedding"
                responsibilities="Design | Branding | Letterpress"
                img="assets/media/img/work/wedding.png"
                link="https://www.facebook.com/mamassauce/photos/a.379061322209.157805.360217092209/10151652833417210"
                linkName="See More"/>
              <SwiperSlide
                name="Event Poster"
                slide="poster"
                responsibilities="Design | Screenprint"
                img="assets/media/img/work/poster.png"/>
              <SwiperSlide
                name="RMCAD | The Dome"
                slide="dome"
                responsibilities="Development | Drupal | Frontend | Backend"
                img="assets/media/img/work/dome.png"
                link="http://dome.rmcad.edu"
                linkName="Visit Site"/>
              <SwiperSlide
                name="Misc Branding"
                slide="branding"
                responsibilities="Design | Branding"
                img="assets/media/img/work/branding.png"/>
              <SwiperSlide
                name="FHFC | Specialist Directory"
                slide="fhfc"
                responsibilities="Design | Development | Web App | Frontend | Backend"
                img="assets/media/img/work/fhfcdirectory.png"/>
              <SwiperSlide
                name="gitcommit-m | Sideproject"
                slide="gitcommit"
                responsibilities="Design | Development | Web App | Frontend | Backend"
                img="assets/media/img/work/gitcommit.png"
                link="http://gitcommit-m.com"
                linkName="Visit Site"/>
            </SwiperWrapper>
          </section>
        </div>
      </div>
    );
  }
}

export default App;
