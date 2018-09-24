import React, { Component } from 'react';
import './App.css';
import SwiperWrapper from './SwiperWrapper';
import SwiperSlide from './SwiperSlide';
import GitHubProfile from './components/GitHubProfile';
import FlickrSlider from './components/FlickrSlider';
import FlickrProfile from './components/FlickrProfile';
import TwitterProfile from './components/TwitterProfile';

class App extends Component {
  render() {
    return (
      <div className="App container fh">
        <div className="row fh cf">
          <aside className="col-16 pad-col-5 desk-col-4">
            <div className="row cf">
              <div className="col-16 pad-col-5 desk-col-4 ac">
                <div className="top-img">
                  <FlickrSlider />
                </div>
                <figure className="circle  col-5 pad-col-2 desk-col-1 ci">
                  <img src="assets/media/img/me.jpg" alt="me" />
                </figure>
                <div className="vcard">
                  <h1 className="h2">Aaron Bryce Fischer</h1>
                  <h2 className="h5">Front-End Engineer / Designer</h2>
                  <div className="about-me ac">
                    <div>I am a Front-End Engineer, <a href="https://dribbble.com/aaronfischer" target="_blank">designer</a>, <a href="https://500px.com/aaronfischer" target="_blank">hobby-photographer</a>, <a href="https://valenciacollege.edu/" target="_blank">educator</a>, forever-student, father, apple nerd, and movie-lover. Currently with <a href="https://www.caxiam.com/" target="_blank">@caxiam</a>, previously <a href="https://purplerockscissors.com/" target="_blank">@prplrckscssrs</a>.</div>
                  </div>
                  <ul className="social list-unstyled ac">
                    <TwitterProfile username="aaronfischer" fetchCount="10" callbackName="callbackCity" />
                    <FlickrProfile />
                    <GitHubProfile />
                    <li>
                      <a href="https://dribbble.com/aaronfischer" target="_blank">
                        <i className="fab fa-dribbble"></i>
                        <span className="hoverable ac">
                          Dribbble
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="https://500px.com/aaronfischer" target="_blank">
                        <i className="fab fa-500px"></i>
                        <span className="hoverable ac">
                          500px
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/in/aaronbrycefischer/" target="_blank">
                        <i className="fab fa-linkedin-in"></i>
                        <span className="hoverable ac">
                          LinkedIn
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="mailto:aaron@gofisching.com?subject=Contacting you via your website">
                        <i className="icon-mail-1"></i>
                        <span className="hoverable ac">
                          Email
                        </span>
                      </a>
                    </li>
                  </ul>
                  Things I Use:
                  <ul className="social list-unstyled ac">
                    <li>
                      <a href="https://dribbble.com/aaronfischer" target="_blank">
                        <i className="fab fa-bitbucket"></i>
                        <span className="hoverable ac">
                          BitBucket
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="https://dribbble.com/aaronfischer" target="_blank">
                        <i className="fab fa-html5"></i>
                        <span className="hoverable ac">
                          HTML5
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="https://dribbble.com/aaronfischer" target="_blank">
                        <i className="fab fa-sass"></i>
                        <span className="hoverable ac">
                          SASS
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="https://dribbble.com/aaronfischer" target="_blank">
                        <i className="fab fa-digital-ocean"></i>
                        <span className="hoverable ac">
                          Digital Ocean
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="https://dribbble.com/aaronfischer" target="_blank">
                        <i className="fab fa-js"></i>
                        <span className="hoverable ac">
                          Javascript
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="https://dribbble.com/aaronfischer" target="_blank">
                        <i className="fab fa-ember"></i>
                        <span className="hoverable ac">
                          Ember.js
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="https://dribbble.com/aaronfischer" target="_blank">
                        <i className="fab fa-react"></i>
                        <span className="hoverable ac">
                          React.js
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="https://dribbble.com/aaronfischer" target="_blank">
                        <i className="fab fa-npm"></i>
                        <span className="hoverable ac">
                          npm
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="https://dribbble.com/aaronfischer" target="_blank">
                        <i className="fab fa-git"></i>
                        <span className="hoverable ac">
                          Git
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="https://dribbble.com/aaronfischer" target="_blank">
                        <i className="fab fa-github"></i>
                        <span className="hoverable ac">
                          Github
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="https://dribbble.com/aaronfischer" target="_blank">
                        <i className="fab fa-gulp"></i>
                        <span className="hoverable ac">
                          Gulp
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </aside>
          <section className="col-16 pad-col-11 desk-col-12 ">
            <SwiperWrapper>
              <SwiperSlide
                name="WeDrinkin'"
                slide="wedrinkin"
                responsibilities="Development | Design | iOS | PhoneGap"
                img="assets/media/img/work/wedrinkin.png"
                link="https://appsto.re/us/SdCL4.i"
                linkName="Download App"/>
              {/* <SwiperSlide
                name="Ivanhoe Brewing Co"
                slide="ivanhoe"
                responsibilities="Development | Wordpress | Frontend | Backend"
                img="assets/media/img/work/ivanhoe.png"
                link="https://ivanhoeparkbrewing.com/"
                linkName="Visit Site"/> */}
              <SwiperSlide
                name="Ember Tabular"
                slide="tabular"
                responsibilities="Development | EmberJS | Ember Addon"
                img="assets/media/img/work/tabular.png"
                link="http://caxiam.github.io/ember-tabular/"
                linkName="Visit Github"/>
              <SwiperSlide
                name="Phil Kean Designs"
                slide="phil"
                responsibilities="Development | Wordpress | Frontend | Backend"
                img="assets/media/img/work/phil.png"
                link="https://philkeandesigns.com/"
                linkName="Visit Site"/>
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
