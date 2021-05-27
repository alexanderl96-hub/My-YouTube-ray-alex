import React from "react";
class Comments extends React.Component {
  componentDidMount() {
    // const { comments } = this.props;
  }
  componentWillUnmount() {
    // const { comments } = this.props;
  }
  render() {
    const { comments, deleteComments } = this.props;
    return (
      <li className="comments">
        {comments.text}
        <button onClick={() => deleteComments(comments)}>Delete Post</button>
      </li>
    );
  }
}
export default Comments;