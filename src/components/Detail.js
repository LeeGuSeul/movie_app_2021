import React from "react";

class Detail extends React.Component {
    componentDidCatch() {
        const { location, history } = this.props;
        if(location.state === undefined) {
            history.pust("/");
        }
    }
    render() {
        const { location } = this.props;
        if (location.state) {
          return <span>{location.state.title}</span>;
        } else {
          return null;
        }
      }
}

export default Detail;