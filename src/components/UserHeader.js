import { Component } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../actions";

class UserHeader extends Component {
  componentDidMount() {
    this.props.fetchUser(this.props.userId);
  }
  render() {
    // console.log(this.props);
    const { user } = this.props;
    if (!user) {
      return null;
    }
    // console.log(user);
    return <div className="header">{user.name}</div>;
  }
}

//pulling the data from redux store
const mapStateToProps = (state, ownProps) => {
  //   console.log(state);
  //   console.log(ownProps);
  return { user: state.users.find((user) => user.id === ownProps.userId) };
};

export default connect(mapStateToProps, { fetchUser })(UserHeader);
