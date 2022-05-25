import { Component } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../actions";

class UserHeader extends Component {
  componentDidMount() {
    this.props.fetchUser(this.props.userId);
  }
  render() {
    // console.log(this.props);
    const user = this.props.users.find((user) => user.id === this.props.userId);
    if (!user) {
      return null;
    }

    // console.log(user);
    return <div className="header">{user.name}</div>;
  }
}

const mapStateToProps = (state) => {
  //   console.log(state);
  return { users: state.users };
};

export default connect(mapStateToProps, { fetchUser })(UserHeader);
