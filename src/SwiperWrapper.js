import React, { Component } from 'react';
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';
import './SwiperWrapper.css';

class SwiperWrapper extends Component {
  componentDidMount() {
    console.log('swiper-wrapper');
    var mySwiper = new Swiper('.swiper-projects', {
      loop:true,
      speed: 400,
      spaceBetween: 0,
      navigation: {
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next',
      },
    });
  }

  componentWillUnmount() {
    console.log('destroy');
    document.querySelector('.swiper-projects').destroy();
  }

  render() {
    return (
      <div className="swiper-container swiper-projects ac">
        <div className="swiper-button-prev"><i className="icon-left-open-big"></i></div>
        <div className="swiper-button-next"><i className="icon-right-open-big"></i></div>
        <div className="swiper-wrapper">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default SwiperWrapper;
