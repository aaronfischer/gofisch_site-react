import React, { Component } from 'react';
import axios from 'axios';

class FlickrProfile extends Component {
  state = {
    info: null,
    count: null,
    url: null,
    isLoading: false,
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    axios.get('https://api.flickr.com/services/rest/', {
      params: {
        'api_key': '0b6cd19f8d79fa07eb5b3057ce973db7',
        format: 'json',
        method: 'flickr.people.getInfo',
        'user_id': '35694074@N02',
        nojsoncallback: 1,
      }
    }).then((data) => {
      this.setState({
        info: data.data.person,
        count: data.data.person.photos.count._content,
        url: data.data.person.photosurl._content,
        isLoading: false,
      });
    });
  }

  render() {
    const { count, url, isLoading } = this.state;

    return (
      <li className="flickr">
        <a href={url} target="_blank">
          <i className="icon-flickr"></i>
          Photos
          <span className="fr count">{isLoading ? '...' : count}</span>
        </a>
      </li>
    );
  }
}

export default FlickrProfile;
