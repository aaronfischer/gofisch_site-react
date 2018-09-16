import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SwiperWrapper from './SwiperWrapper';
import SwiperSlide from './SwiperSlide';

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
                    <div className="swiper-wrapper">
                    </div>
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
                    <li className="flickr"><a href="https://www.flickr.com/photos/aaronfischer" target="_blank"><i className="icon-flickr"></i>Photos <span className="fr count">0</span></a></li>                                   <li className="github"><a href="https://gist.github.com/Aaronfischer" target="_blank"><i className="icon-github-1"></i>Gists <span className="fr count">0</span></a></li>
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
            </SwiperWrapper>

                    {/* <div className="swiper-slide bg-contain slide-mmi">
                        <div className="img row cf bg-contain" style="background-image:url(assets/media/img/work/mmi.png);"></div>
                        <div className="row cf pos-ab">
                            <div className="col-16 pad-col-12 ci">
                                <header className="row  al cf">
                                    <div className="col-16 pad-col-9">
                                        <div className="padding-side-2">
                                            <h3 className="h4">Modernizing Medicine <span className="h6">Development | Wordpress | Frontend | Backend</span></h3>
                                        </div>
                                    </div>
                                    <div className="col-16 pad-col-3">
                                        <div className="padding-side-2">
                                            <a href="http://modmed.com" className="btn fr" target="_blank">Visit Site</a>
                                        </div>
                                    </div>
                                </header>
                            </div>
                        </div>
                    </div>

                    <div className="swiper-slide bg-contain slide-bdg">
                        <div className="img row cf bg-contain" style="background-image:url(assets/media/img/work/bdg.png);"></div>
                        <div className="row cf pos-ab">
                            <div className="col-16 pad-col-12 ci">
                                <header className="row al cf">
                                    <div className="col-16 pad-col-9">
                                        <div className="padding-side-2">
                                            <h3 className="h4">Bonnett Design Group <span className="h6">Development | Wordpress | Frontend | Backend</span></h3>
                                        </div>
                                    </div>
                                    <div className="col-16 pad-col-3">
                                        <div className="padding-side-2">
                                            <a href="http://www.bonnettdesigngroup.com" className="btn fr" target="_blank">Visit Site</a>
                                        </div>
                                    </div>
                                </header>
                            </div>
                        </div>
                    </div>

                    <div className="swiper-slide bg-contain slide-wedding">
                        <div className="img row cf bg-contain" style="background-image:url(assets/media/img/work/wedding.png);"></div>
                        <div className="row cf pos-ab">
                            <div className="col-16 pad-col-12 ci">
                                <header className="row  al cf">
                                    <div className="col-16 pad-col-9">
                                        <div className="padding-side-2">
                                            <h3 className="h4">Wedding <span className="h6">Design | Branding | Letterpress</span></h3>
                                        </div>
                                    </div>
                                    <div className="col-16 pad-col-3">
                                        <div className="padding-side-2">
                                            <a href="https://www.facebook.com/mamassauce/photos/a.379061322209.157805.360217092209/10151652833417210" className="btn fr" target="_blank">See More</a>
                                        </div>
                                    </div>
                                </header>
                            </div>
                        </div>
                    </div>

                    <div className="swiper-slide bg-contain slide-said">
                        <div className="img row cf bg-contain" style="background-image:url(assets/media/img/work/said.png);"></div>
                        <div className="row cf pos-ab">
                            <div className="col-16 pad-col-12 ci">
                                <header className="row  al cf">
                                    <div className="col-16 pad-col-9">
                                        <div className="padding-side-2">
                                            <h3 className="h4">Scott Architecture Interior Design <span className="h6">Design | Development | Wordpress | Frontend | Backend</span></h3>
                                        </div>
                                    </div>
                                    <div className="col-16 pad-col-3">
                                        <div className="padding-side-2">
                                            <a href="http://scottarchitects.com/" className="btn fr" target="_blank">Visit Site</a>
                                        </div>
                                    </div>
                                </header>
                            </div>
                        </div>
                    </div>

                    <div className="swiper-slide bg-cover slide-poster">
                        <div className="img row cf bg-cover" style="background-image:url(assets/media/img/work/poster.png);"></div>
                        <div className="row cf pos-ab">
                            <div className="col-16 pad-col-12 ci">
                                <header className="row  al cf">
                                    <div className="col-16 pad-col-9">
                                        <div className="padding-side-2">
                                            <h3 className="h4">Event Poster <span className="h6">Design | Screenprint</span></h3>
                                        </div>
                                    </div>
                                    <div className="col-16 pad-col-3">
                                        <div className="padding-side-2">
                                        </div>
                                    </div>
                                </header>
                            </div>
                        </div>
                    </div>

                    <div className="swiper-slide bg-contain slide-dome">
                        <div className="img row cf bg-contain" style="background-image:url(assets/media/img/work/dome.png);"></div>
                        <div className="row cf pos-ab">
                            <div className="col-16 pad-col-12 ci">
                                <header className="row  al cf">
                                    <div className="col-16 pad-col-9">
                                        <div className="padding-side-2">
                                            <h3 className="h4">RMCAD | The Dome <span className="h6">Development | Drupal | Frontend | Backend</span></h3>
                                        </div>
                                    </div>
                                    <div className="col-16 pad-col-3">
                                        <div className="padding-side-2">
                                            <a href="http://dome.rmcad.edu" className="btn fr" target="_blank">Visit Site</a>
                                        </div>
                                    </div>
                                </header>
                            </div>
                        </div>
                    </div>

                    <div className="swiper-slide bg-contain slide-fns">
                        <div className="img row cf bg-contain" style="background-image:url(assets/media/img/work/fns.png);"></div>
                        <div className="row cf pos-ab">
                            <div className="col-16 pad-col-12 ci">
                                <header className="row  al cf">
                                    <div className="col-16 pad-col-9">
                                        <div className="padding-side-2">
                                            <h3 className="h4">Farina and Sons <span className="h6">Development | Wordpress | Frontend | Backend</span></h3>
                                        </div>
                                    </div>
                                    <div className="col-16 pad-col-3">
                                        <div className="padding-side-2">
                                            <a href="http://farinaandsons.com" className="btn fr" target="_blank">Visit Site</a>
                                        </div>
                                    </div>
                                </header>
                            </div>
                        </div>
                    </div>

                    <div className="swiper-slide bg-contain slide-branding">
                        <div className="img row cf bg-contain" style="background-image:url(assets/media/img/work/branding.png);"></div>
                        <div className="row cf pos-ab">
                            <div className="col-16 pad-col-12 ci">
                                <header className="row  al cf">
                                    <div className="col-16 pad-col-9">
                                        <div className="padding-side-2">
                                            <h3 className="h4">Misc Branding <span className="h6">Design | Branding</span></h3>
                                        </div>
                                    </div>
                                    <div className="col-16 pad-col-3">
                                        <div className="padding-side-2">
                                        </div>
                                    </div>
                                </header>
                            </div>
                        </div>
                    </div>

                    <div className="swiper-slide bg-contain slide-fhfc">
                        <div className="img row cf bg-contain" style="background-image:url(assets/media/img/work/fhfcdirectory.png);"></div>
                        <div className="row cf pos-ab">
                            <div className="col-16 pad-col-12 ci">
                                <header className="row  al cf">
                                    <div className="col-16 pad-col-9">
                                        <div className="padding-side-2">
                                            <h3 className="h4">FHFC | Specialist Directory <span className="h6">Design | Development | Web App | Frontend | Backend</span></h3>
                                        </div>
                                    </div>
                                    <div className="col-16 pad-col-3">
                                        <div className="padding-side-2">
                                        </div>
                                    </div>
                                </header>
                            </div>
                        </div>
                    </div>

                    <div className="swiper-slide bg-contain slide-gitcommit">
                        <div className="img row cf bg-contain" style="background-image:url(assets/media/img/work/gitcommit.png);"></div>
                        <div className="row cf pos-ab">
                            <div className="col-16 pad-col-12 ci">
                                <header className="row  al cf">
                                    <div className="col-16 pad-col-9">
                                        <div className="padding-side-2">
                                            <h3 className="h4">gitcommit-m | Sideproject <span className="h6">Design | Development | Web App | Frontend | Backend</span></h3>
                                        </div>
                                    </div>
                                    <div className="col-16 pad-col-3">
                                        <div className="padding-side-2">
                                            <a href="http://gitcommit-m.com" className="btn fr" target="_blank">Visit Site</a>
                                        </div>
                                    </div>
                                </header>
                            </div>
                        </div>
                    </div> */}

          </section>
        </div>
      </div>
    );
  }
}

export default App;
