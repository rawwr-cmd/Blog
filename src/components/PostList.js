import { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";
class PostList extends Component {
  componentDidMount() {
    //store.dispatch(fetchPosts())-->behind the scene
    this.props.fetchPosts();
  }
  render() {
    console.log(this.props.posts);
    return <div>PostList</div>;
  }
}

const mapStateToProps = (state) => {
  //   console.log(state);
  return { posts: state.posts };
};

export default connect(mapStateToProps, { fetchPosts })(PostList);
