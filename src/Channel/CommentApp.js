// import React, { Component } from 'react'
// import CommentSection from './CommentSection'
// import Form from './Form'
// class CommentApp extends Component {
//     constructor() {
//         super()
//         this.state = {
//             comments: [],
//             input: "",
//           };
//     }
//       handleChange = (e) => {
//         const { value } = e.target;
//         this.setState(
//           {
//             input: value
//           }
//         );
//       };
//       handleSubmit = (e) => {
//         e.preventDefault();
//         const { input } = this.state;
//         const newcomment = {
//           text: input,
//           uuid: uuidv4()
//         };
//         this.addComments(newcomment);
//         this.setState({ input: "" });
//       };
//       addComments = (comment) => {
//         this.setState((prevState) => {
//           return {
//             comments: [...prevState.comments, comment]
//           };
//         });
//       };
//       deleteComments = (commet) => {
//         const { comments } = this.state;
//         const filterComment = comments.filter((item) => {
//           return comments.uuid !== item.uuid;
//         });
//         this.setState({ comments: filterComment });
//       };
//     render() {
//         const { input, comment } = this.state;
//         return (
//             <div>
//                 <h3>Comment Board</h3>
//                 <Form
//                 input={input}
//                 handleChange={this.handleChange}
//                 handleSubmit={this.handleSubmit}
//                 />
//                 <CommentSection
//                 comment={comment}
//                 deleteComments={this.deleteComments}
//                 />
//             </div>
//         )
//     }
// }
// export default CommentApp