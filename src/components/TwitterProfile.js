import React, { Component } from 'react';
import axios from 'axios';

class TwitterProfile extends Component {
  state = {
    data: null,
    count: null,
    isLoading: false,
  }

  componentDidMount() {
    const { username, fetchCount } = this.props;
    this.setState({ isLoading: true });
    axios.get(`https://api.twitter.com/1.1/users/show.json?screen_name=${username}&count=${fetchCount}`).then((data) => {
      this.setState({
        data: data.data,
        count: data.data.public_gists,
        isLoading: false,
      });
    });
  }

  render() {
    const { count, isLoading } = this.state;
    return (
      <li className="twitter">
        <a href="http://twitter.com/aaronfischer" target="_blank">
          <i className="icon-twitter"></i>
          Tweets
          <span className="fr count">{isLoading ? '...' : count}</span>
        </a>
      </li>
    );
  }
}

export default TwitterProfile;
