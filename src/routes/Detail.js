import React from 'react';

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push('/');
    }
  }

  render() {
    const { location } = this.props;
    if (location.state !== undefined) {
      return <span>{location.state.title}</span>;
    }
    return null;
  }
}


export default Detail;