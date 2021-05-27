import React from "react";
import Comments from "./Comments";
class CommentSection extends React.Component {
  componentDidUpdate(prevProps) {
    // const comments = this.props.comments;
  }
  render() {
    const { CommentSection, deleteComments } = this.props;
    // const last = CommentSection.map((comments) => {
    //   return <Comments comments={comments} deleteComments={deleteComments} />;
    // })
    return (
      <ul id="comment">
        {CommentSection}
      </ul>
    );
  }
}
export default CommentSection;