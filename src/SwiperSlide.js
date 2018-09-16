import React, { Component } from 'react';
import 'swiper/dist/css/swiper.min.css';

class SwiperSlide extends Component {
  componentDidMount() {
    console.log('swiper-slide');
  }

  render() {
    return (
      <div className="swiper-slide bg-contain slide-{this.props.slide}">
          <div className="img row cf bg-contain" style={{backgroundImage:`url(${this.props.img})`}}></div>
          <div className="row cf pos-ab">
              <div className="col-16 pad-col-12 ci">
                  <header className="row  al cf">
                      <div className="col-16 pad-col-9">
                          <div className="padding-side-2">
                              <h3 className="h4">{this.props.name} <span className="h6">{this.props.responsibilities}</span></h3>
                          </div>
                      </div>
                      <div className="col-16 pad-col-3">
                          <div className="padding-side-2">
                              <a href={this.props.link} className="btn fr" target="_blank">{this.props.linkName}</a>
                          </div>
                      </div>
                  </header>
              </div>
          </div>
      </div>
    );
  }
}

export default SwiperSlide;
