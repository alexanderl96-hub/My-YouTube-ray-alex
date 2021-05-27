import React from "react";
import Comments from "./Comments";
class CommentSection extends React.Component {
  componentDidUpdate(prevProps) {
    const comments = this.props.comments;
  }
  render() {
    const { CommentSection, deleteComments } = this.props;
    return (
      <ul id="comment">
        {CommentSection.map((comments) => {
          return <Comments comments={comments} deleteComments={deleteComments} key={comments.uuid}/>;
        })}
      </ul>
    );
  }
}
export default CommentSection;