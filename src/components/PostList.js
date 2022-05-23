import { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";
class PostList extends Component {
  componentDidMount() {
    //store.dispatch(fetchPosts())-->behind the scene
    this.props.fetchPosts();
  }

  renderList() {
    return this.props.posts.map((post, index) => {
      return (
        <div className="item" key={index}>
          <i className="large middle aligned icon user" />
          <div className="content">
            <div className="description">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    // console.log(this.props.posts);
    return <div className="ui relaxed divided list">{this.renderList()}</div>;
  }
}

const mapStateToProps = (state) => {
  //   console.log(state);
  return { posts: state.posts };
};

export default connect(mapStateToProps, { fetchPosts })(PostList);
