import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "dummy",
        location: "Default",
        login: "dummy@123",
      },
    };

    //console.log(this.props.name + "Child Constructor");
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/im-shikha");
    const json = await data.json();

    this.setState({ userInfo: json });

    // this.timer = setInterval(() => {
    //   console.log("Namaste React OP");
    // }, 3000);

    console.log(json);
    //console.log(this.props.name + "Child componentDidMount");
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.count !== prevState.componentDidUpdate) {
    }
  }

  componentWillUnmount() {
    // clearInterval(timer);
  }

  render() {
    //console.log(this.props.name + "Child Render");
    const { name, location, login, avatar_url } = this.state.userInfo;

    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: {login}</h4>
      </div>
    );
  }
}

export default UserClass;
