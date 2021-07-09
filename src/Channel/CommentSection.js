import React from "react";
import Comments from "./Comments";
class CommentSection extends React.Component {
  componentDidUpdate(prevProps) {
    // const comments = this.props.comments;
  }
  render() {
    const { comment, deleteComments } = this.props;
    // const last = CommentSection.map((comments) => {
    //   return <Comments comments={comments} deleteComments={deleteComments} />;
    // })
    return (
      <div>
          <ul id="comment">
             {comment}
           </ul>
      </div>
      
    );
  }
}
export default CommentSection;