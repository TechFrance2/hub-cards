import React from "react";

class Card extends React.Component {
  render() {
    const profile = this.props;
    return (
      <div className="github-profile" style={{ margin: "2rem" }}>
        <img src={profile.avatar_url} />
        <div
          className="info"
          style={{ display: "inline-block", marginLeft: 10 }}
        >
          <div className="name" style={{ fontSize: "3rem" }}>
            {profile.name}
          </div>
          <div className="company" style={{ fontSize: "2rem" }}>
            Company: {profile.company}
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
