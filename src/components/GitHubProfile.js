import React, { Component } from 'react';
import axios from 'axios';

class GitHubProfile extends Component {
  state = {
    data: null,
    publicGists: null,
    isLoading: false,
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    axios.get('https://api.github.com/users/Aaronfischer').then((data) => {
      this.setState({
        data: data.data,
        publicGists: data.data.public_gists,
        isLoading: false,
      });
    });
  }

  render() {
    const { publicGists, isLoading } = this.state;
    return (
      <li className="github">
        <a href="https://gist.github.com/Aaronfischer" target="_blank">
          <i className="icon-github-1"></i>
          Gists
          <span className="fr count">{isLoading ? '...' : publicGists}</span>
        </a>
      </li>
    );
  }
}

export default GitHubProfile;
